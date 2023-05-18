import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";

When(
  /^they click the "([^"]*)" button$/,
  async function (this: ScenarioWorld, buttonName: string) {
    const {
      screen: { page },
    } = this;
    await page.locator(`text=${buttonName}`).click();
  }
);
