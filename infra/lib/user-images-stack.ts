import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3n from "aws-cdk-lib/aws-s3-notifications";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

/* STACK MEANT TO STORE IMAGES FOR THIS WEBSITE
 *
 * userImagesBucket: AWS S3 Bucket
 *
 * cloudFrontDistribution: AWS CloudFront
 * */
export class AlphanumericDetectorImagesStack extends cdk.Stack {
    /**
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope: Construct, id: string, props: cdk.StackProps) {
        super(scope, id, props);

        /* S3 Bucket will store all the images that the users upload. Images are stored under the path ROOT/user/[imagename].png. All images are publicly accessible. */
        const userImagesBucket = new s3.Bucket(this, "AlphanumericDetectorUserImagesBucket", {
            publicReadAccess: false,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
            accessControl: s3.BucketAccessControl.PRIVATE,
            removalPolicy: cdk.RemovalPolicy.RETAIN,
        });

        /* Allows browser access to the bucket */
        userImagesBucket.addCorsRule({
            allowedOrigins: ["*"],
            allowedMethods: [s3.HttpMethods.GET],
            allowedHeaders: ["*"],
        });

        // CloudFront will cache these images and distribute them appropriate. Since
        // this service comes with AWS Shield Standard included, it should prevent DDoS attacks. Images are distributed publicly. ANYONE CAN ACCESS THEM BECAUSE THEY ARE NOT MEANT TO BE HIDDEN.
        const cloudFrontDistribution = new cloudfront.Distribution(
            this,
            "PortfolioWebsiteImagesCDN",
            {
                defaultBehavior: {
                    origin: origins.S3BucketOrigin.withOriginAccessControl(userImagesBucket),
                    viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                    allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                    cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
                    responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                }
            }
        );

        /* DynamoDB Table will index the images in the S3 bucket */
        const userImagesIndexTable: dynamodb.TableV2 = new dynamodb.TableV2(
            this,
            "AlphanumericDetectorUserImagesIndexTable",
            {
                partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
                contributorInsights: false, // prevent charges
                tableClass: dynamodb.TableClass.STANDARD,
            }
        );
        /* --- */

        // NOTE: GENERAL IMAGES STRATEGY:
        // 1. User gets authenticated 
        // 2. User uploads a batch of images to the S3 bucket via an upload key
        // 3. S3 bucket upload triggers lambda function, writes to dynamodb table

        /* INDEXING AND REMOVING */
        // Lambda function indexes S3 bucket by placing metadata into the DynamoDB table */
        const userImagesIndexFunction = new lambda.Function(
            this,
            "AlphanumericDetectorUserImageIndexFunction",
            {
                code: lambda.Code.fromAsset("lib/functions/userImageIndexFunction"),
                runtime: lambda.Runtime.NODEJS_LATEST,
                handler: "index.handler",
            }
        );

        // Lambda function removes DynamoDB entry for removed image
        const userImagesRemoveIndexFunction = new lambda.Function(
            this,
            "AlphanumericDetectorUserImageRemoveIndexFunction",
            {
                code: lambda.Code.fromAsset("lib/functions/userImageRemoveIndexFunction"),
                runtime: lambda.Runtime.NODEJS_LATEST,
                handler: "index.handler",
            }
        );

        // S3 Bucket permission for each index/de-index function
        userImagesBucket.grantPut(userImagesIndexFunction);
        userImagesBucket.grantDelete(userImagesRemoveIndexFunction);

        // DynamoDB permissions for each index/de-index function
        userImagesIndexTable.grantWriteData(userImagesIndexFunction);
        userImagesIndexTable.grantWriteData(userImagesRemoveIndexFunction);

        // NOTE: API ENDPOINTS ARE NOT USED TO INDEX, BUT RATHER WE NOTIFY LAMBDA FUNCTION OF THE BUCKET UPLOAD
        const userImagesBucketEventNotification = new s3n.LambdaDestination(userImagesIndexFunction);
        userImagesBucket.addEventNotification(s3.EventType.OBJECT_CREATED_PUT, userImagesBucketEventNotification);
        userImagesBucket.addEventNotification(s3.EventType.OBJECT_REMOVED, userImagesBucketEventNotification);
        /* --- */
    };
};
