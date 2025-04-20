import { Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

const s3 = require("aws-cdk-lib/aws-s3");
const lambda = require("aws-cdk-lib/aws-lambda");

/*
 *	Stack to add users to the site:
 *
 *	S3 Bucket responsible for holding the users
 *		- Triggers lambda function to index user via DynamoDB database
 *	
 *	DynamoDB index table
 *		- username: string
 *		- date: string
 *		- email?: date
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
export class AlphanumericDetectorUsersStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */

    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props);

        // S3 bucket to store users
        const usersBucket = new s3.Bucket(this, "AlphanumericDetectorUsersBucket", {
            /* No public accesss */
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            accessControl: s3.BucketAccessControl.PRIVATE,
            /* -- */
            removalPolicy: cdk.RemovalPolicy.RETAIN, // on removal of items locally, keep them in bucket
        });

        usersBucket.addCorsRule({
            allowedOrigins: ["*"],
            allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.POST],
            allowedHeaders: ["*"]
        });

        // Lambda1 - lambdaUniqueUserNameCheck
        const uniqueUserNameCheckLambda = new lambda.Function(this, "AlphanumericDetectorUniqueUserNameCheck", {

            code: lambda.Code.fromAsset(),

        })

    }
};
