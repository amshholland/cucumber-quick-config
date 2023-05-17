import { expect } from '@playwright/test';
import { Then } from '@cucumber/cucumber';

Then(
  /^the "([^"]*)" button is (enabled)?(disabled)?$/,
  async function (buttonName: string, enabled: string, disabled: string) {
    const {
      screen: { page }
    } = this;

    enabled
      ? await expect(page.locator(`text=${buttonName}`)).not.toBeDisabled()
      : await expect(page.locator(`text=${buttonName}`)).toBeDisabled();
  }
);
