export type PageId = string;
export type ElementKey = string;
export type ElementLocator = string;
export type MockConfigKey = string;
export type MockServerKey = string;
export type MockPayloadKey = string;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type PageElementMappings = Record<
  PageId,
  Record<ElementKey, ElementLocator>
>;
export type MockPayloadMappings = Record<string, string>;
export type HostsConfig = Record<string, string>;
export type MocksConfig = Record<string, string>;
export type GlobalVariables = { [key: string]: string };

export type GlobalConfig = {
  pageElementMappings: PageElementMappings;
  mockPayloadMappings: MockPayloadMappings;
  hostsConfig: HostsConfig;
  pagesConfig: PagesConfig;
  mocksConfig: MocksConfig;
};
