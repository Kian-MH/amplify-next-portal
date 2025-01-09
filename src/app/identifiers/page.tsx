import inCompleteIdentifierSchema from '@/lib/schemas/identifierSchema';
import scan from '../../utils/db/scan';
import { AsyncProvider } from "../context";
import Identifiers from "./components/Identifiers";

const Page = () => {
  const tableName = 'YourDynamoDBTable';
  const identifiersPromise = scan(tableName).then(res => res.json())
  .then(data => {
    // TODO: replace with proper API fetch
    // Working with single table for all records for testing purposes, only SizeMapping has a name property, using this to filter
    // @ts-ignore
    const identifiers = data.filter(item => item.value);
    // @ts-ignore
    const entityGroups = data.filter(item => item.group);

    // @ts-ignore
    const options = entityGroups.map(item => {return { const: item.id, title: item.group }});
    options.push({ const: 'default', title: 'default' });
    const identifierSchema = inCompleteIdentifierSchema;

    identifierSchema['properties']['entityGroup']['oneOf'] = options;

    return { identifiers, identifierSchema };
  });
  return (
    <>
      <div id='wrapper'>
        <AsyncProvider promise={identifiersPromise}>
          <Identifiers />
        </AsyncProvider>
      </div>
    </>
  );
}

export default Page;