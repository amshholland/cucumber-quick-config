import reporter, { Options } from "cucumber-html-reporter";

require("dotenv").config({path: `.env.${process.env.COMMON_CONFIG_FILE}`});

const options: Options = {
  theme: "bootstrap",
  jsonFile: process.env.JSON_REPORT_FILE,
  output: process.env.HTML_REPORT_FILE!,
  screenshotsDirectory: process.env.SCREENSHOT_PATH,
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: true,
};

reporter.generate(options);
