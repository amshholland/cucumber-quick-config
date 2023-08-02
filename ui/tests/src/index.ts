import { getJsonFromFile } from "./env/parseEnv";
import { generateCucumberRuntimeTag } from "./support/tag-helper";
import {
    GlobalConfig,
    HostsConfig,
    MockPayloadMappings,
    MocksConfig,
    PageElementMappings,
    PagesConfig,
} from "./env/global";
import fs from "fs";

require("dotenv").config({path: `.env.${process.env.NODE_ENV}`});

const hostsConfig: HostsConfig = getJsonFromFile(
    `${process.env.HOST_URLS_PATH}`
);
const mocksConfig: MocksConfig = getJsonFromFile(
    `${process.env.MOCK_URLS_PATH}`
);
const pagesConfig: PagesConfig = getJsonFromFile(
    `${process.env.PAGE_URLS_PATH}`
);

const payloadFiles = fs.readdirSync(
    `${process.cwd()}${process.env.MOCK_PAYLOADS_PATH}`
);
const mappingFiles = fs.readdirSync(
    `${process.cwd()}${process.env.PAGE_ELEMENTS_PATH}`
);

const getEnvList = (): string[] => {
  const envList = Object.keys(hostsConfig);

  if (envList.length === 0) {
    throw Error(
        `🧨 No environments mapped in your ${process.env.HOST_URLS_PATH}`
    );
  }
    console.log(envList);
  return envList;
};

const mockPayloadMappings: MockPayloadMappings = payloadFiles.reduce(
  (payloadConfigAcc, file) => {
    const key = file.replace(".json", "");
    const payloadMappings = getJsonFromFile(
        `${process.env.MOCK_PAYLOADS_PATH}/${key}`
    );

    return { ...payloadConfigAcc, [key]: payloadMappings };
  },
  {}
);

const pageElementMappings: PageElementMappings = mappingFiles.reduce(
  (pageElementConfigAcc, file) => {
    const key = file.replace(".json", "");
    const elementMappings = getJsonFromFile(
      `${process.env.PAGE_ELEMENTS_PATH}${file}`
    );
    return { ...pageElementConfigAcc, [key]: elementMappings };
  },
  {}
);

const worldParameters: GlobalConfig = {
  hostsConfig,
  mocksConfig,
  pagesConfig,
  pageElementMappings,
  mockPayloadMappings,
};

const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --world-parameters ${JSON.stringify(worldParameters)} \
                --format progress-bar \
                --parallel ${process.env.PARALLEL} \
                --retry ${process.env.RETRY}`;

const dev = generateCucumberRuntimeTag(common, getEnvList(), "dev");
const smoke = generateCucumberRuntimeTag(common, getEnvList(), "smoke");
const regression = generateCucumberRuntimeTag(
    common,
    getEnvList(),
    "regression"
);

export { dev, smoke, regression };
