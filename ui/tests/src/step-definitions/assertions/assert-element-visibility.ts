import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { ScenarioWorld } from "../setup/world";
import { getElementLocator } from "../../support/element-helper";
import { ElementKey } from "../../env/global";

Then(
  /^the "([^"]*)" "([^"]*)" is( not)? visible$/,
  async function (
    this: ScenarioWorld,
    elementKey: ElementKey,
    elementType: string,
    negate: boolean
  ) {
    const {
      screen: { page },
      globalConfig,
    } = this;

    const elementIdentifier = await getElementLocator(
      elementKey,
      globalConfig,
      elementType
    );

    negate
      ? await expect(page.locator(elementIdentifier)).not.toBeVisible()
      : await expect(page.locator(elementIdentifier)).toBeVisible();
  }
);
