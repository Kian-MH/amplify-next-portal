import inCompleteSizeMappingSchema from '@/lib/schemas/sizeMappingSchema';
import scan from '../../utils/db/scan';
import { AsyncProvider } from "../context";
import SizeMappings from "./components/SizeMappings";

const Page = () => {
  const tableName = 'YourDynamoDBTable';
  const sizeMappingPromise = scan(tableName).then(res => res.json())
  .then(data => {
    // TODO: replace with proper API fetch
    // Working with single table for all records for testing purposes, only SizeMapping has a name property, using this to filter
    // @ts-ignore
    const sizeMappings = data.filter(item => item.name);
    // @ts-ignore
    const entityGroups = data.filter(item => item.group);

    // @ts-ignore
    const options = entityGroups.map(item => {return { const: item.id, title: item.group }});
    const sizeMappingSchema = inCompleteSizeMappingSchema;
    
    sizeMappingSchema['properties']['entityGroup']['oneOf'] = options;
    console.log(sizeMappingSchema);
    return { sizeMappings, sizeMappingSchema };
  });
  return (
    <>
      <div id='wrapper'>
        <AsyncProvider promise={sizeMappingPromise}>
          <SizeMappings>
          </SizeMappings>
        </AsyncProvider>
      </div>
    </>
  );
}

export default Page;