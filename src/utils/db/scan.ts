import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDbDocClient from './shared/dbClient.mjs';

const scan = async (tableName: string) => {
  try {
    const params = { TableName: tableName };
    const result = await dynamoDbDocClient.send(new ScanCommand(params));
    if (!result.Items) {
      return new Response(JSON.stringify([]), { status: 404 });
    }
    return new Response(JSON.stringify(result.Items), { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return new Response(JSON.stringify([]), { status: 500 });
    } else if (typeof err === 'string') {
      return new Response(JSON.stringify([]));
    } else {
      return new Response(JSON.stringify([]), { status: 500 });
    }
  }
}

export default scan;
