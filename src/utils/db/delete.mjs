import { DeleteCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDbDocClient from './shared/dbClient.mjs';
import { successResponse, errorResponse } from './shared/responses.mjs';

export async function handler(event) {
  try {
    const { id } = event.queryStringParameters;

    if (!id) {
      throw new Error('Missing required query parameter: id');
    }

    const params = {
      // TODO: make dynamic and update to correct value
      TableName: 'YourDynamoDBTable',
      Key: { id },
    };

    await dynamoDbDocClient.send(new DeleteCommand(params));
    return successResponse({ message: 'Item deleted successfully!' });
  } catch (err) {
    return errorResponse(err.message, err.statusCode || 500);
  }
}
