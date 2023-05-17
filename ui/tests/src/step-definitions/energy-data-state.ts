import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { GlobalConfig } from '../env/global';
import { ScenarioWorld } from './setup/world';

When(/^they have chosen to submit data (.*)$/, async function (this: ScenarioWorld, submissionMethod: string) {
  const {
    screen: { page }
  } = this;
});
When(/^they are in the (.*) stage of their submission$/, async function (this: ScenarioWorld, submissionStage: string) {
  const {
    screen: { page }
  } = this;
});

When(/^they have submitted energy data to be uploaded$/, async function (this: ScenarioWorld) {
  const {
    screen: { page }
  } = this;
});

When(/^they (.*) connected to the utilityAPI$/, async function (this: ScenarioWorld, connected: boolean) {
  const {
    screen: { page }
  } = this;
});

When(
  /^they have previously submitted energy data (.*)$/,
  async function (this: ScenarioWorld, existingEnergyData: boolean) {
    const {
      screen: { page }
    } = this;
  }
);
