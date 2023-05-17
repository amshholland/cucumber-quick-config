import { ElementKey, ElementLocator, GlobalConfig } from '../env/global';

export const getElementLocator = (
  elementKey: ElementKey,
  globalConfig: GlobalConfig,
  parentElement: string
): ElementLocator => {
  const { pageElementMappings } = globalConfig;

  const elementIdentifier = pageElementMappings[parentElement]?.[elementKey];

  if (!elementIdentifier) {
    throw Error(`🧨 Unable to find the ${elementKey} mapping 🧨`);
  }

  return elementIdentifier;
};
