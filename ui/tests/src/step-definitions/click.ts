import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { getElementLocator } from "../support/element-helper";
import { ElementKey } from "../env/global";
import { waitFor } from "../support/wait-for-behavior";

When(
    /^they click the "([^"]*)" button$/,
    async function (this: ScenarioWorld, buttonName: string) {
      const {
        screen: {page},
      } = this;
      await page.locator(`text=${buttonName}`).click();
    }
);

When(
    /^they click the "([^"]*)" "([^"]*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        parentElement: string
    ) {
      const {
        screen: {page},
        globalConfig,
      } = this;

      const elementIdentifier = await getElementLocator(
          elementKey,
          globalConfig,
          parentElement
      );

      await waitFor(async () => {
        const result = await page.waitForSelector(elementIdentifier, {
          state: "visible",
        });
        if (result) {
          await page.locator(elementIdentifier).click();
        }

        return result;
      });
    }
);
