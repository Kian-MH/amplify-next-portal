// @ts-ignore
const updateFormData = (formdata, setPlacementFormData) => {
  const temp = formdata;
  console.log('formdata', temp);
  // filter removed bidders from bidder list
  // @ts-ignore
  temp['prebid']['bidderConfigs'] = temp['prebid']['bidderConfigs'].filter(config => temp['prebid']['bidders'].includes(config.name));
  console.log('formdata prebid filtered configs', temp['prebid']);
  // if bidder config doesn't exist, add it to the array
  // @ts-ignore
  temp['prebid']['bidders'].forEach(bidder => {
    // @ts-ignore
    const index = temp['prebid']['bidderConfigs'].findIndex((config) => config.name === bidder);
    if (index === -1) temp['prebid']['bidderConfigs'].push({ name: bidder });
  });
  console.log('formdata prebid added configs', temp['prebid']);
  setPlacementFormData(temp);
}

export default updateFormData;