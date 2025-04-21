<!-- # Welcome to your CDK TypeScript project -->
<!---->
<!-- This is a blank project for CDK development with TypeScript. -->
<!---->
<!-- The `cdk.json` file tells the CDK Toolkit how to execute your app. -->
<!---->
<!-- ## Useful commands -->
<!---->
<!-- * `npm run build`   compile typescript to js -->
<!-- * `npm run watch`   watch for changes and compile -->
<!-- * `npm run test`    perform the jest unit tests -->
<!-- * `npx cdk deploy`  deploy this stack to your default AWS account/region -->
<!-- * `npx cdk diff`    compare deployed stack with current state -->
<!-- * `npx cdk synth`   emits the synthesized CloudFormation template -->

# Welcome

This stores the `AWS CDK` infrastructure code for this project.

## Stacks

There are three stacks implemented in this project:

1. Users Stack
- Store users, check if usernames are unique

2. Images Stack
- Store images, and query them if needed

3. Inference Stack
- Machine Learning inference stack that deploys the digit detection model with S3 and Lambda

## Usage

`npm install`   Installs the packages in this project
`cdk synth`     See what the deployment changes will be
`cdk deploy`    Deploy to AWS.

Note: ensure you have correctly configured your CDK credentials.o

## Why this is public

This is mostly a testing project, as I've been wanting to learn how to deploy Machine Learning models on AWS.
