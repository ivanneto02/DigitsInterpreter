import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as path from "path";

/*
 *	Stack to add users to the site:
 *
 *  userDataTable (AWS DynamoDB)
 *		- username: string
 *		- date: string
 *		- email?: string
 *
 *  addUserDataGatewayEndpoint (AWS API Gateway)
 *		- Front for when users check if their username is unique
 *
 *	uniqueUserNameCheckGatewayEndpoint (AWS API Gateway)
 *		- Front for submitting form and adding users to the DynamoDB table
 *
 *  addUserDataLambda (AWS Lambda)
 *		- Called to add new user to the DynamoDB table
 *
 *  uniqueUserNameCheckLambda (AWS Lambda)
 * 		- Called to check if username is unique
 *
 * */
export class AlphanumericDetectorUsersStack extends cdk.Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {cdk.StackProps=} props
     */

    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        /* DynamoDB table to store the users */
        const userDataTable: dynamodb.TableV2 = new dynamodb.TableV2(this, "AlphanumericDetectorUserDataTable", {
            partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
            contributorInsights: true,
            tableClass: dynamodb.TableClass.STANDARD,
        });
        /* --- */

        /* Lambda function adds users to the dynamodb table */
        const addUserData: lambda.Function = new lambda.Function(this, "AlphanumericDetectorAddUserData", {
            code: lambda.Code.fromAsset("lib/userStackFunctions/addUserDataLambda"),
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'index.handler',
            environment: {
                TABLE_NAME: userDataTable.tableName, // need for writing
            }
        });
        // Make sure lambda function has permission to write
        userDataTable.grantWriteData(addUserData);
        /* --- */

        /* API Gateway to front the lambda function to add user data */
        const addUserDataGatewayEndpoint: apigateway.LambdaRestApi = new apigateway.LambdaRestApi(this, "AlphanumericDetectorAddUserDataEndpoint", {
            handler: addUserData,
            restApiName: "AlphanumericDetectorAddUserDataRestAPI",
            defaultCorsPreflightOptions: { // need to allow cors
                allowOrigins: apigateway.Cors.ALL_ORIGINS,
                allowMethods: ["POST"],
                allowHeaders: ["Content-Type"],
            }
        });
        /* --- */

        /* Lambda2 lambdaUniqueUserNameCheck - Checks if username is already present in the DynamoDB table */
        const uniqueUserNameCheckLambda: lambda.Function = new lambda.Function(this, "AlphanumericDetectorUniqueUserNameCheck", {
            code: lambda.Code.fromAsset("lib/userStackFunctions/uniqueUserNameCheckLambda"),
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'index.handler',
            environment: {
                TABLE_NAME: userDataTable.tableName, // need for reading
            }
        });
        // Make sure lambda function has permission to read
        userDataTable.grantReadData(uniqueUserNameCheckLambda);
        /* --- */

        /* API Gateway to front the unique users Lambda2 function */
        const uniqueUserNameCheckGatewayEndpoint: apigateway.LambdaRestApi = new apigateway.LambdaRestApi(this, "AlphanumericDetectorUniqueUserNameCheckEndpoint", {
            handler: uniqueUserNameCheckLambda,
            restApiName: "AlphanumericDetectorUniqueUserNameCheckRestAPI",
            defaultCorsPreflightOptions: {
                allowOrigins: apigateway.Cors.ALL_ORIGINS,
                allowMethods: ["GET"],
                allowHeaders: ["Content-Type"],
            }
        });
        /* --- */

    }
};

