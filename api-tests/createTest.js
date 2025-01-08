import { handler as createItem } from '../utils/create.js';

const createItemEvent = {
  body: JSON.stringify({
    id: '123',
    name: 'Test Item',
    description: 'This is a test',
  }),
};

createItem(createItemEvent)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
