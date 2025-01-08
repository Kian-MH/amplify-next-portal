'use client'

import { use, useState } from "react";
import { useAsyncContext } from "../../context"
import ScanList from "@/components/ScanList";
import ToggleForm from "@/components/ToggleForm";
import ConfigForm from "@/components/ConfigForm";
import { write, update } from "@/utils/db/fetchers";

const SizeMappings = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const sizeMappingPromise = useAsyncContext();
  const { sizeMappings, sizeMappingSchema } = use(sizeMappingPromise);

  const tableName = 'YourDynamoDBTable';
  const boundWrite = write.bind(null, tableName);
  const boundUpdate = update.bind(null, tableName);

  return (
    <>
      <div>{sizeMappings.length} Size Mappings</div>
      <ScanList data={sizeMappings} schema={sizeMappingSchema} elementId='updateSizeMappingRenderForm' displayKey='name' setPlacementFormData={undefined} onSubmit={boundUpdate}></ScanList>
      <div id='updateSizeMappingRenderForm'></div>
      <ToggleForm state={showCreateForm} setState={setShowCreateForm}/>
      {
        showCreateForm &&
        <ConfigForm data={undefined} schema={sizeMappingSchema} onSubmit={boundWrite} onChange={() =>{}}></ConfigForm>
      }
    </>
  )
}

export default SizeMappings;