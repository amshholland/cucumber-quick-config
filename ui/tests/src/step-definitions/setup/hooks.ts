import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { ScenarioWorld } from "./world";

setDefaultTimeout(parseInt(`${process.env.SCRIPT_TIMEOUT}`));

Before(async function (this: ScenarioWorld, scenario) {
  console.log(`SCENARIO: ${scenario.pickle.name}`);

  const contextOptions = {
    recordVideo: {
      dir: `${process.env.VIDEO_PATH}${scenario.pickle.name}`,
    },
  };

  return await this.init(contextOptions);
});

After(async function (this: ScenarioWorld, scenario) {
  const {
      screen: {page, browser},
  } = this;

  const scenarioStatus = scenario.result?.status;

  if (scenarioStatus === "FAILED") {
    const screenshot = await page.screenshot({
      path: `${process.env.SCREENSHOT_PATH}${scenario.pickle.name}.png`,
    });

    await this.attach(screenshot, "image/png");
  }

  await browser.close();
  return browser;
});
