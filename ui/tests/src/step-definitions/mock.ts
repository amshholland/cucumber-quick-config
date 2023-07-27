import { MockConfigKey, MockPayloadKey, MockServerKey } from "../env/global";
import { interceptResponse } from "../support/mock-behavior";
import { ScenarioWorld } from "./setup/world";
import { When } from "@cucumber/cucumber";
import { getLogger } from "../logger/logger";

When(
  /^the "([^"]*)" endpoint for "([^"]*)" is mocked with "([^"]*)"$/,
  async function (
    this: ScenarioWorld,
    mockServerKey: MockServerKey,
    mockConfigKey: MockConfigKey,
    mockPayloadKey: MockPayloadKey
  ) {
    const {
      screen: {page},
      globalConfig,
    } = this;

    getLogger().log(
        `the ${mockServerKey} endpoint for ${mockConfigKey} is mocked with ${mockPayloadKey}`
    );

    // const mockServerKey = 'user-profile';
    // const mockConfigKey = 'api';
    // const mockPayloadKey = 'user';

    await interceptResponse(
        page,
        mockServerKey,
        mockConfigKey,
        mockPayloadKey,
        globalConfig
    );
  }
);
