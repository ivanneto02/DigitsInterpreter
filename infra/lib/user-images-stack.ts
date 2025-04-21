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
export class AlphanumericDetectorImagesStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */

    // Blank stack for now

};
