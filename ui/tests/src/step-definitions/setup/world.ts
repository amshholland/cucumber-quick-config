import playwright, {
  Browser,
  BrowserContext,
  BrowserContextOptions,
  BrowserType,
  Page,
} from "playwright";
import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { GlobalConfig, GlobalVariables } from "../../env/global";
import { PlaywrightTestOptions } from "@playwright/test";

export type Screen = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
};

export class ScenarioWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);

    this.globalConfig = options.parameters as GlobalConfig;
    this.globalVariables = {};
  }

  playwrightOptions?: PlaywrightTestOptions;

  globalConfig: GlobalConfig;
  globalVariables: GlobalVariables;
  screen!: Screen;

  async init(contextOptions?: BrowserContextOptions): Promise<Screen> {
    await this.screen?.page?.close();
    await this.screen?.context?.close();
    await this.screen?.browser?.close();

    const browser = await this.newBrowser();
    const context = await browser.newContext(contextOptions);
    const page = await context.newPage();

    this.screen = { browser, context, page };

    return this.screen;
  }

  private newBrowser = async (): Promise<Browser> => {
    const automationBrowsers = ["chromium", "firefox", "webkit"];
    type AutomationBrowser = (typeof automationBrowsers)[number];
    const automationBrowser = process.env
      .UI_AUTOMATION_BROWSER as AutomationBrowser;

    const browserType: BrowserType = playwright[automationBrowser];
    return await browserType.launch({
      devtools: process.env.DEVTOOLS !== "false",
      headless: process.env.HEADLESS !== "false",
      args: [
        "--disable-web-security",
        "--disable-features=IsolateOrigins, site-per-process",
      ],
    });
  };
}

setWorldConstructor(ScenarioWorld);
