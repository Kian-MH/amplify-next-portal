'use client'

import { use, useState } from "react";
import { useAsyncContext } from "../../context"
import ScanList from "@/components/ScanList";
import ToggleForm from "@/components/ToggleForm";
import updateFormData from "@/lib/updateFormData";
import ConfigForm from "@/components/ConfigForm";
import { write, update } from "@/utils/db/fetchers";

const Placements = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const placementsPromise = useAsyncContext();
  const { placements, placementSchema } = use(placementsPromise);

  const tableName = 'YourDynamoDBTable';
  const boundWrite = write.bind(null, tableName);
  const boundUpdate = update.bind(null, tableName);

  // @ts-ignore
  const callback = ({formData}) => updateFormData(formData, setPlacementFormData);
  const [placementFormData, setPlacementFormData] = useState({ prebid: { bidders: [] }});
  

  
  return (
    <>
      <div>{placements.length} Placements</div>
      {/* TODO: the updateFormData works correctly for the create form, but is delayed by 1 interaction for the update form. data being passed is placementFromData vs placementList, likely to be the cause */}
      <ScanList data={placements} schema={placementSchema} elementId='updatePlacementsRenderForm' displayKey='id' setPlacementFormData={callback} onSubmit={boundUpdate}></ScanList>
      <div id='updatePlacementsRenderForm'></div>
      <ToggleForm state={showCreateForm} setState={setShowCreateForm}/>
      {
        showCreateForm && 
        <ConfigForm data={placementFormData} schema={placementSchema} onSubmit={boundWrite} onChange={callback}></ConfigForm>
      }
    </>
  )
}

export default Placements;