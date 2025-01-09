import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// TODO: remove region? (used for testing locally)
const awsConfig = {
  region: 'eu-west-1',
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
  }
}

const dbClient = new DynamoDBClient(awsConfig);
const dynamoDbDocClient = DynamoDBDocumentClient.from(dbClient);

export default dynamoDbDocClient;
