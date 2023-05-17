# Getting Started with Cucumber

For initial set up, in the UI/tests directory, run:

### `npm install`

## Available Scripts

To run tests:
### `npm run cucumber --profile --${env tag}`

To generate Playwright UI Selectors using Codegen for use in the newly created step-definitions/${component}.ts steps:
### `npm run codegen`

To create behavior driven development tests with ease:

### Install cucumber plugin
### Create ${component}.feature in tests/src/features
### Copy and paste AC from Jira ticket
### Right click statements to auto create the applicable test step in tests/src/step-definitions/${component}.ts

You must write your own assertion statements

To allow the tests to generate reports, screenshots, and videos:
### Create a tests/reports directory
### Create a tests/reports/screenshots directory
### Create a tests/reports/videos directory
### Create a tests/reports/cucumber-html-report.html file
### Create a tests/reports/report.json file



