import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

/*
 *	Stack to add users to the site:
 *
 *	S3 Bucket responsible for holding the users
 *		- Triggers lambda function to index user via DynamoDB database
 *
 *	DynamoDB index table
 *		- username: string
 *		- date: string
 *		- email?: string
 *
 *	API Gateway
 *		- Front for users clicking on sign-up button
 *
 *	Lambda1
 *		- Gets trigged by S3 bucket
 *
 * 	Lambda2
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
        const userDataTable: dynamodb.TableV2 = new dynamodb.TableV2(this, "AlphaNumericDetectorUserDataTable", {
            partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
            contributorInsights: true,
            tableClass: dynamodb.TableClass.STANDARD,
        });
        /* --- */

        /* Lambda function adds users to the dynamodb table */
        const addUserData: lambda.Function = new lambda.Function(this, "AlphaNumericDetectorAddUserData", {
            code: lambda.Code.fromAsset("lib/usersStackFunctions/addUserDataLambda"),
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
            code: lambda.Code.fromAsset("lib/usersStackFunctions/uniqueUserNameCheckLambda"),
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

