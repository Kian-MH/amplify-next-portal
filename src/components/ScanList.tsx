'use client'

import ConfigForm from "./ConfigForm";
import updateFormData from "@/lib/updateFormData";
import { createRoot } from 'react-dom/client';

let rootCreated = false;
// @ts-ignore
let wrapper = undefined;
// @ts-ignore
const renderUpdate = (data, schema, elementId, setPlacementFormData = undefined, onSubmit) => {
  // @ts-ignore
  if (!rootCreated) wrapper = createRoot(document.getElementById(elementId));
  if (elementId === 'updatePlacementFormWrapper') {
    // @ts-ignore
    wrapper.render(<ConfigForm data={data} schema={schema} onSubmit={onSubmit} onChange={({formData}) => updateFormData(formData, setPlacementFormData)}></ConfigForm>)
  } else {
    // @ts-ignore
    wrapper.render(<ConfigForm data={data} schema={schema} onSubmit={onSubmit} onChange={undefined}></ConfigForm>)
  }
  rootCreated = true;
}

const ScanList = ({ data, schema, elementId, displayKey, setPlacementFormData, onSubmit }: { data: any, schema: any, elementId: any, displayKey: any, setPlacementFormData: any, onSubmit: any }) => {
  if (data) {
    // @ts-ignore
    const listItems = data.map(item => {
      return (
        <li key={item.id}>{item[displayKey]}<input type='button' onClick={() => renderUpdate(item, schema, elementId, setPlacementFormData, onSubmit)} value='Details'></input></li>
      );
    });
    return <ul>{listItems}</ul>
  } else {
    return undefined;
  }
}

export default ScanList;