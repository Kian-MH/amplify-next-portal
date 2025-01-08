import { GetCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDbDocClient from './shared/dbClient.mjs';

const read = async (tableName: string, id: string) => {
  const params = { TableName: tableName, Key: { id } };
  const result = await dynamoDbDocClient.send(new GetCommand(params));
  if (!result.Item) {
    return new Response('Item not found', { status: 404 });
  }
  return new Response(JSON.stringify(result.Item), { status: 200 });
}
export default read;