import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import uiSchema from "../lib/schemas/uiSchema";

const ConfigForm = ({ data, schema, onSubmit, onChange }: { data: any, schema: any, onSubmit: any, onChange: any }) => {
  return (
    <>
      <Form schema={schema} uiSchema={uiSchema} validator={validator} formData={data} onSubmit={onSubmit} onChange={onChange}></Form>
    </>
  );
}

export default ConfigForm;