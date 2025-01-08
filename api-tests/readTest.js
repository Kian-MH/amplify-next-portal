import { handler as readItem } from '../utils/read.js';

const readItemEvent = {
  queryStringParameters: { id: '123' }
};

readItem(readItemEvent)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
