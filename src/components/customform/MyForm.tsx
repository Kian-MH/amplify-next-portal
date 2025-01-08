// NOT IN USE ATM
// TDOO: TO BE DEVELOPED & IMPLEMENTED

const MyForm = ({ schema, data }: { schema: Object, data: any }) => {
  if (!schema) return <p>Loading...</p>
  Object.entries(schema).forEach(([key, value]) => {
    console.log(key);
  });
  return (
    <form action="">
      {Object.entries(schema.properties).map(([key, value]) => {
        return <FormAttribute key={key} itemKey={key} item={value} data={data}></FormAttribute>
      })}
    </form>
  );
}

const FormAttribute = ({itemKey, item, data}: {itemKey: any, item: any, data: any}) => {
  const { properties, type } = item;
  if (itemKey === 'properties') {
    Object.entries(item).map(([key, value]) => {
      return <FormAttribute itemKey={key} item={value} data={data}></FormAttribute>;
    });
  } else {
    return componentSelection({ key: itemKey, property: item });
  }
  return (
  <>
    <label htmlFor={itemKey}>{itemKey}<input type="text" id={itemKey} name={itemKey} value=''/></label>
  </>
  );
}

const FormValue = ({itemKey, item, data}: {itemKey: any, item: any, data: any}) => {

}

const SizeMapping = ({ key, property }) => {
  const options = property.oneOf.map(option => <option value={option.const}>{option.title}</option>);
  return (
    <>
      <label htmlFor={key}>{key}:</label>
      <select name={key} id={key}>{options}</select>
    </>
  );
}

const SizeMappingCreate = () => {
  
}

const Input = ({ key, property }) => {
  return <input></input>
} 

const componentSelection = ({ key, property }) => {
  let component = undefined;
  switch (key) {
    case 'sizeMapping':
        component = SizeMappingCreate;
      break;
    default:
        component = Input;
      break;
  }
  return component({ key, property });
}

export default MyForm;

// properties > type
// if type = Array or Object > LOOP
// else print