// const s3Client = new S3Client({ region: 'us-west-1' });  // Adjust region as needed

import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

/* TODO
 * Takes care of indexing the current user event with all their information.
 *
 * username: string
 * date: string
 * email: string
 * filepath: string
 *
 * */
export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

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
            body: JSON.stringify({ message: "Hello from AlphanumericDetectorAddUserDataLambda" })
        }
    } catch (error: unknown) {
        console.log(error);

        return {
            statusCode: 500,
            headers: headers,
            body: JSON.stringify({ error: "Failure in AlphanumericDetectorAddUserDataLambda" })
        }
    }
};

