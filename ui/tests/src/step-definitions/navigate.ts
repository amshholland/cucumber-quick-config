import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { navigateToPage } from "../support/navigation-behavior";

When(
  /^they are on the "([^"]*)" page$/,
  async function (this: ScenarioWorld, route: string) {
    const {
      screen: { page },
      globalConfig,
    } = this;

    await navigateToPage(page, route, globalConfig);
  }
);
