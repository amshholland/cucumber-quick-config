import { expect } from "@playwright/test";
import { Then } from "@cucumber/cucumber";

Then(
    /^the "([^"]*)" "([^"]*)" is( not)? enabled$/,
    async function (buttonName: string, negate: boolean) {
        const {
            screen: {page},
        } = this;

        negate
            ? await expect(page.locator(`text=${buttonName}`)).toBeDisabled()
            : await expect(page.locator(`text=${buttonName}`)).not.toBeDisabled();
    }
);
