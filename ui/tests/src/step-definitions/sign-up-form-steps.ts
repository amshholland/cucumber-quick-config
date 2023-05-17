import { Given } from '@cucumber/cucumber';

Given(/^a first time user creating an account$/, async function () {
  const {
    screen: { page }
  } = this;

  await page.goto('http://localhost:3000/');
  await page.waitForSelector('text=Create Account');
});
