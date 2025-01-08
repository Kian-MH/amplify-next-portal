'use client'

import { use, useState } from "react";
import { useAsyncContext } from "../../context"
import ScanList from "@/components/ScanList";
import ToggleForm from "@/components/ToggleForm";
import ConfigForm from "@/components/ConfigForm";
import { write, update } from '@/utils/db/fetchers';

const Identifiers = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const identifiersPromise = useAsyncContext();
  const { identifiers, identifierSchema } = use(identifiersPromise);

  const tableName = 'YourDynamoDBTable';
  const boundWrite = write.bind(null, tableName);
  const boundUpdate = update.bind(null, tableName);
  
  return (
    <>
      <div>{identifiers.length} Identifiers</div>
      <ScanList data={identifiers} schema={identifierSchema} elementId='updateIdentifiersRenderForm' displayKey='value' setPlacementFormData={undefined} onSubmit={boundUpdate}></ScanList>
      <div id='updateIdentifiersRenderForm'></div>
      <ToggleForm state={showCreateForm} setState={setShowCreateForm}/>
      {
        showCreateForm && 
        <ConfigForm data={undefined} schema={identifierSchema} onSubmit={boundWrite} onChange={() => {}}></ConfigForm>
      }
    </>
  )
}

export default Identifiers;