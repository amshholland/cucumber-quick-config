import { When } from '@cucumber/cucumber';

When(/^the app loads$/, async function () {
  const {
    screen: { page }
  } = this;

  await page.waitForSelector('text=Home Energy Study');
});
