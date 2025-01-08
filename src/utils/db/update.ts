import { UpdateCommand } from '@aws-sdk/lib-dynamodb';
import dynamoDbDocClient from './shared/dbClient.mjs';

const update = async (tableName: string, prevState: any, formData: FormData) => {
  try {
    const data = {};
    for (const [key, value] of formData.entries()) {
      // @ts-ignore
      data[key] = value
    }
    // TODO?: Primary key cannot be edited, pass this info to dynamically remove it? or will it always be ID?
    // @ts-ignore
    const id = data.id;
    // @ts-ignore
    delete data.id;

    // Validate required fields
    // validateRequestBody(body, ['id', 'name', 'description']);

    const bodyArrayPairs = Object.entries(data);
    const length = bodyArrayPairs.length - 1;
    // Create & populate the attributes needed for update
    const setup = bodyArrayPairs.reduce((object, attribute, index) => {
      const key = attribute[0];
      const value = attribute[1];
      object.UpdateExpression += `#${key} = :${key}`;
      if (index < length) object.UpdateExpression += `, `;
      // @ts-ignore
      object.ExpressionAttributeNames[`#${key}`] = key;
      // @ts-ignore
      object.ExpressionAttributeValues[`:${key}`] = value;
      return object;
    }, {
      UpdateExpression: 'SET ',
      ExpressionAttributeNames: {},
      ExpressionAttributeValues: {}
    });

    const { UpdateExpression, ExpressionAttributeNames, ExpressionAttributeValues } = setup;

    const params = {
      TableName: tableName,
      Key: { id },
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues
    };

    await dynamoDbDocClient.send(new UpdateCommand(params));
    return new Response('Item updated successfully', { status: 200 });
  } catch (err) {
    if (err instanceof Error) {
      return new Response(err.message, { status: 500 });
    } else if (typeof err === 'string') {
      return new Response(err);
    }
  }
}

export default update;