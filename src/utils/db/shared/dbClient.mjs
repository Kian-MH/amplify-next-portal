import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// TODO: remove region? (used for testing locally)
const awsConfig = {
  region: 'eu-west-1',
}

const dbClient = new DynamoDBClient(awsConfig);
const dynamoDbDocClient = DynamoDBDocumentClient.from(dbClient);

export default dynamoDbDocClient;
