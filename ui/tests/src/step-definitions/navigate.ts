import { ScenarioWorld } from "./setup/world";
import { When } from "@cucumber/cucumber";

When(
    /^on the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageRoute: string) {
        const {
            screen: {page},
        } = this;

        await page.goto(`${process.env.BASE_URL}/${pageRoute}`);
    }
);
