import inCompleteIdentifierSchema from '@/lib/schemas/identifierSchema';
import scan from '../../utils/db/scan';
import { AsyncProvider } from "../context";
import Identifiers from "./components/Identifiers";

const Page = () => {
  const tableName = 'YourDynamoDBTable';
  const identifiersPromise = new Promise(resolve => { return resolve({ identifiers: [], identifierSchema: inCompleteIdentifierSchema }) });
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