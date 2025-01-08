export const write = async (tableName: string, { formData: data }: { formData: Object}) => {
  const formData = new FormData();
  // @ts-ignore
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  await fetch(`api/${tableName}`, { method: 'POST', body: formData });
  // await mutate();
};

export const update = async (tableName: string, { formData: data }: { formData: Object}) => {
  const formData = new FormData();
  // @ts-ignore
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  await fetch(`api/${tableName}`, { method: 'PUT', body: formData });
  // await mutate();
}