import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ScenarioWorld } from '../setup/world';

Then(/^the message text is equal to "([^"]*)"$/, async function (this: ScenarioWorld, messageText: string) {
  const {
    screen: { page }
  } = this;

  await expect(page.locator(`text=${messageText}`)).toBeVisible();
});
