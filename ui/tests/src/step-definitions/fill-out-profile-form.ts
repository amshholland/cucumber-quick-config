import { When } from '@cucumber/cucumber';

When(/^they fill out the user profile form completely and correctly$/, async function () {
  const {
    screen: { page }
  } = this;
  await page.locator();
  await page.click('[placeholder="Choose a name"]');
  await page.fill('[placeholder="Choose a name"]', 'michaelScottWorldsBestBoss');
  await page.press('[placeholder="Choose a name"]', 'Tab');
  await page.fill('[placeholder="City"]', 'Scranton');

  await page.click('[data-testid="state-field"]');
  await page.waitForSelector(`text=PA`);
  await page.click('li[role="option"]:has-text("PA")');

  await page.click('[data-testid="number-of-adults-field"]');
  await page.waitForSelector(`text=1`);
  await page.click('li[role="option"]:has-text("1")');

  await page.click('[data-testid="number-of-children-field"]');
  await page.waitForSelector(`text=0`);
  await page.click('li[role="option"]:has-text("0")');

  await page.click('[data-testid="dwelling-type-field"]');
  await page.waitForSelector(`text=Apartment 5 to 9 Units`);
  await page.click('li[role="option"]:has-text("Apartment 5 to 9 Units")');

  await page.click('[data-testid="number-of-bedrooms-field"]');
  await page.waitForSelector(`text=1`);
  await page.click('li[role="option"]:has-text("1")');

  await page.click('[data-testid="number-of-bathrooms-field"]');
  await page.waitForSelector(`text=1`);
  await page.click('li[role="option"]:has-text("1")');

  await page.fill('input[type="number"]', '1200');

  await page.click('[data-testid="utility-company-field"]');
  await page.waitForSelector(`text=Pacific Gas & Electric`);
  await page.click('li[role="option"]:has-text("Pacific Gas & Electric")');
});

When(/^the user profile form has not been filled out completely$/, async function () {
  const {
    screen: { page }
  } = this;
  await page.click('[placeholder="City"]');
  await page.fill('[placeholder="City"]', 'Scranton');
});
