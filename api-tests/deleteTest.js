import { handler as deleteItem } from '../utils/delete.js';

const deleteItemEvent = {
  queryStringParameters: { id: '123' }
};

deleteItem(deleteItemEvent)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
