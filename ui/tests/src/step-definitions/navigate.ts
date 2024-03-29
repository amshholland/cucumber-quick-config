import { PageId } from "../env/global";
import { navigateToPage } from "../support/navigation-behavior";
import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";

When(
    /^on the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: {page},
            globalConfig,
        } = this;

        console.log(`I am on the ${pageId} page`);

        await navigateToPage(page, pageId, globalConfig);
    }
);
