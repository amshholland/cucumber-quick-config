import dotenv from 'dotenv';
import { getJsonFromFile } from './env/parseEnv';
import { generateCucumberRuntimeTag } from './support/tag-helper';
import { GlobalConfig, HostsConfig, MocksConfig, MockPayloadMappings, PageElementMappings } from './env/global';
import fs from 'fs';

dotenv.config();

const hostsConfig: HostsConfig = getJsonFromFile(`${process.env.HOSTS_URLS_PATH}`);
const mocksConfig: MocksConfig = getJsonFromFile(`${process.env.MOCKS_URLS_PATH}`);

const payloadFiles = fs.readdirSync(`${process.cwd()}${process.env.MOCK_PAYLOAD_PATH}`);
const mappingFiles = fs.readdirSync(`${process.cwd()}${process.env.PAGE_ELEMENTS_PATH}`);

const getEnvList = (): string[] => {
  const envList = Object.keys(hostsConfig);

  if (envList.length === 0) {
    throw Error(`🧨 No environments mapped in your ${process.env.HOSTS_URL_PATH}`);
  }

  return envList;
};

const mockPayloadMappings: MockPayloadMappings = payloadFiles.reduce((payloadConfigAcc, file) => {
  const key = file.replace('.json', '');
  const payloadMappings = getJsonFromFile(`${process.env.MOCK_PAYLOAD_PATH}${key}`);

  return { ...payloadConfigAcc, [key]: payloadMappings };
}, {});

const pageElementMappings: PageElementMappings = mappingFiles.reduce((pageElementConfigAcc, file) => {
  const key = file.replace('.json', '');
  const elementMappings = getJsonFromFile(`${process.env.PAGE_ELEMENTS_PATH}${file}`);
  return { ...pageElementConfigAcc, [key]: elementMappings };
}, {});

const worldParameters: GlobalConfig = {
  hostsConfig,
  mocksConfig,
  pageElementMappings,
  mockPayloadMappings
};

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --world-parameters ${JSON.stringify(worldParameters)} \
                --format progress-bar \
                --parallel ${process.env.PARALLEL} \
                --retry ${process.env.RETRY}`;

const devv = generateCucumberRuntimeTag(common, getEnvList(), 'devv');

const dev = generateCucumberRuntimeTag(common, getEnvList(), 'dev');
const smoke = generateCucumberRuntimeTag(common, getEnvList(), 'smoke');
const regression = generateCucumberRuntimeTag(common, getEnvList(), 'regression');

export { devv, dev, smoke, regression };
