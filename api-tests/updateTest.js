import { handler as updateItem } from '../utils/update.js';

const updateItemEvent = {
  body: JSON.stringify({
    id: '123',
    name: 'An Updated Test Item',
    description: 'This is a test updated',
  }),
};

updateItem(updateItemEvent)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
