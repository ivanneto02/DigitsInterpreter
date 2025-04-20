import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as Infra from '../lib/users-stack';

test('AlphanumericDetectorUsersStack Resource Count', () => {
    const app = new cdk.App();
    const stack = new Infra.AlphanumericDetectorUsersStack(app, 'MyTestStack', {});
    const template = Template.fromStack(stack);

    template.resourceCountIs("AWS::DynamoDB::Table", 1);
    template.resourceCountIs("AWS::Lambda::Function", 2);
    template.resourceCountIs("AWS::ApiGateway::RestApi", 2);
    template.hasResourceProperties("AWS::DynamoDB::Table", {
        BillingMode: "PAY_PER_REQUEST", // Make sure billing mode is right
    });
});
