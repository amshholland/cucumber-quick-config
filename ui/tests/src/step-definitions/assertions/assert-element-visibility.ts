import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ScenarioWorld } from '../setup/world';
import { getElementLocator } from '../../support/element-helper';
import { ElementKey } from '../../env/global';
import { waitFor } from '../../support/wait-for-behavior';

Then(
  /^the "([^"]*)" is( not)? visible in the "([^"]*)"$/,
  async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, parentElement: string) {
    const {
      screen: { page },
      globalConfig
    } = this;

    const elementIdentifier = await getElementLocator(elementKey, globalConfig, parentElement);

    await waitFor(async () => {
      negate
        ? await expect(page.locator(elementIdentifier)).not.toBeVisible()
        : await expect(page.locator(elementIdentifier)).toBeVisible();
    });
  }
);