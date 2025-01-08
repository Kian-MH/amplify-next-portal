'use client'

const ToggleForm = ({ state, setState }: { state: any, setState: any }) => {
  return <button onClick={() => setState(!state)}>Display Create Form</button>
}

export default ToggleForm;