export const generateCucumberRuntimeTag = (
  commonConfig: string,
  availableEnvList: string[],
  runtimeTag: string
): string => {
  const tagExpression = availableEnvList.map((e) => `(@${runtimeTag} and not @${e})`).join(' and ');
  return `${commonConfig} --tags '${tagExpression}'`;
};
