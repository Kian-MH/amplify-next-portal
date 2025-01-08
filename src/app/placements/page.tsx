import inCompletePlacementSchema from '@/lib/schemas/placementSchema';
import scan from '../../utils/db/scan';
import { AsyncProvider } from "../context";
import Placements from "./components/Placements";

const Page = () => {
  const tableName = 'YourDynamoDBTable';
  const placementsPromise = scan(tableName).then(res => res.json())
  .then(data => {
    // TODO: replace with proper API fetch using API Gateway
    // Working with single table for all records for testing purposes, only SizeMapping has a name property, using this to filter
    // @ts-ignore
    const placements = data.filter(item => item.format);
    // @ts-ignore
    const identifiers = data.filter(item => item.value);
    // @ts-ignore
    const sizeMappings = data.filter(item => item.name);

    // @ts-ignore
    const sizeMappingOptions = sizeMappings.map(item => {return { const: item.id, title: item.name }});
    // @ts-ignore
    const identifierOptions = identifiers.map(item => {return { const: item.id, title: item.value }});
    const placementSchema = inCompletePlacementSchema;

    placementSchema['definitions']['sizeMapping']['oneOf'] = sizeMappingOptions;
    placementSchema['definitions']['identifier']['anyOf'][0]['oneOf'] = identifierOptions;

    return { placements, placementSchema };
  });
  return (
    <>
      <div id='wrapper'>
        <AsyncProvider promise={placementsPromise}>
          <Placements />
        </AsyncProvider>
      </div>
    </>
  );
}

export default Page;