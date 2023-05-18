import { ElementKey, ElementLocator, GlobalConfig } from "../env/global";

export const getElementLocator = (
  elementKey: ElementKey,
  globalConfig: GlobalConfig,
  elementType: string
): ElementLocator => {
  const { pageElementMappings } = globalConfig;

  const elementIdentifier = pageElementMappings[elementType]?.[elementKey];

  if (!elementIdentifier) {
    throw Error(`🧨 Unable to find the ${elementKey} mapping 🧨`);
  }

  return elementIdentifier;
};
