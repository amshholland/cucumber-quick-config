import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";
import { getElementLocator } from "../support/element-helper";
import { ElementKey } from "../env/global";

When(
  /^they click the "([^"]*)" button$/,
  async function (this: ScenarioWorld, buttonName: string) {
    const {
      screen: { page },
    } = this;
    await page.locator(`text=${buttonName}`).click();
  }
);

When(
  /^they click the "([^"]*)"$/,
  async function (
    this: ScenarioWorld,
    elementKey: ElementKey,
    parentElement: string
  ) {
    const {
      screen: { page },
      globalConfig,
    } = this;

    const elementIdentifier = getElementLocator(
      elementKey,
      globalConfig,
      parentElement
    );

    await page.locator(elementIdentifier).click();
  }
);

When(/^they submit their user profile form$/, async function () {
  const {
    screen: { page },
  } = this;

  await page.locator('[data-testid="submit-button"]').click();
});

When(
  /^they have clicked submit to upload their energy data file$/,
  async function () {
    const {
      screen: { page },
    } = this;

    await page.click("text=Upload File");
  }
);

When(/^they navigate to the sign up form$/, async function () {
  const {
    screen: { page },
  } = this;

  await page.click("text=Create Account");
  await page.waitForSelector("text=Strong password requirements:");
});
