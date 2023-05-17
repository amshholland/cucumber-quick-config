export const getJsonFromFile = <T = Record<string, string>>(path: string): T => {
  return require(`${process.cwd()}${path}`);
};
