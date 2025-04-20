// Import specific classes from the @aws-sdk package
// const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");
//
// const BUCKET_NAME = "websiteimagesstack-websiteimagesbucketc3b6307e-ubuqmhoej5as";
//
// // Create an instance of the S3Client
// const s3Client = new S3Client({ region: 'us-west-1' });  // Adjust region as needed

/* TODO
 * Takes care of indexing the current user event with all their information.
 *
 * username: string
 * date: string
 * email: string
 * filepath: string
 *
 * */
exports.handler = async (event) => {

    const prefix = event.queryStringParameters?.prefix || "";

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    /* Boilerplate code for now TODO */
    try {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: "Hello from AlphanumericDetectorUniqueUserNameCheckLambda" })
        }
    } catch (error) {
        console.log(error);

        return {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ error: "Failure in AlphanumericDetectorUniqueUserNameCheckLambda" })
        }
    }
};


