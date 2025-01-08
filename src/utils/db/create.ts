import { PutCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDbDocClient from './shared/dbClient.mjs';
import { validateRequestBody } from './shared/validators.mjs';

// function is being passed as action via a useActionState with a bind
// action passes formData by default
// useActionState adds prevState
// bind adds property on top of that
const create = async (tableName: string, prevState: any, formData: FormData) => {
  try {
    const data = {};
    for (const [key, value] of formData.entries()) {
      // @ts-ignore
      data[key] = value
    }
    // @ts-ignore
    data.id = crypto.randomUUID();

    // Validate required fields
    // validateRequestBody(body, ['id', 'name', 'description']);

    const params = {
      TableName: tableName,
      Item: data,
      // TODO: attribute to not exist needs to be primary key (dynamically)
      ConditionExpression: 'attribute_not_exists(id)'
    };

    await dynamoDbDocClient.send(new PutCommand(params));
    return new Response('Item created successfully', { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 });
    } else if (typeof err === 'string') {
      return new Response(err);
    }
  }
}

export default create;