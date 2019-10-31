
export const getApiUrl = (): string => {
  const apiProto = process.env.proto;
  const apiHost = process.env.host;
  console.log(`Using api: ${apiHost}`);
  return `${apiProto}://${apiHost}`;
};

export const getDeveloperParameterValue = (): string => (`${process.env.developer}`);
