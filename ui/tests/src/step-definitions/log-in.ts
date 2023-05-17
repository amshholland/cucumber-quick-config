import { Given } from '@cucumber/cucumber';
import { ScenarioWorld } from './setup/world';

Given(/^a logged in user$/, async function (this: ScenarioWorld) {
  const {
    screen: { page }
  } = this;

  await page.goto('http://localhost:3000/');
  await page.fill('[placeholder="Email"]', process.env.TEST_FIRST_TIME_USER_EMAIL!);
  await page.fill('[placeholder="Password"]', process.env.TEST_FIRST_TIME_USER_PASSWORD!);
  await page.click('div[role="tabpanel"] button:has-text("Sign in")');
  await page.waitForSelector(`[aria-label="Menu button"]`);
});