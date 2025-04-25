import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as path from "path";

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
                const userImagesBucket = new s3.Bucket(this, "PortfolioWebsiteImagesBucket", {
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
                const cloudFrontDistribution = new cloudfront.Distribution(this, "PortfolioWebsiteImagesCDN", {
                        defaultBehavior: {
                                origin: origins.S3BucketOrigin.withOriginAccessControl(userImagesBucket),
                                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                                allowedMethods: cloudfront.AllowedMethods.ALLOW_ALL,
                                cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
                                responseHeadersPolicy: cloudfront.ResponseHeadersPolicy.CORS_ALLOW_ALL_ORIGINS,
                        }
                });

                // TODO: We need a dynamoDB table to index the images that each user has.
                //
                // TODO: Add API gateway endpoints for executing lambda functions to index a user addition
                //
                // TODO: Add lambda functions that index user addition
                //
                // TODO: figure out how the indexing is going to work. Do some research on how people usually index their images in S3 with DynamoDB table.

        };
};
