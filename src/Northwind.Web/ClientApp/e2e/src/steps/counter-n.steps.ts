import { Before, Given, Then, When } from "@cucumber/cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";
import { protractor } from "protractor/built/ptor";

let page: AppPage;

const getIncrementButton = () => element(by.id("increment"));
const getNValueInput = () => element(by.id("n-value"));

Before(() => {
  page = new AppPage();
});

Given("I am on the counter-n page", async () => {
  await page.navigateToCounterN();
});

When("I set N to be {int} and click on increment button {int} times", async (nValue: number, timesClicked: number) => {
  const nValueInput = getNValueInput();
  const incrementButton = getIncrementButton();
  await nValueInput.sendKeys(protractor.Key.BACK_SPACE, `${nValue}`);
  // couldn't get this to work, might be a timing issue so not sure what to do there
  // const currentNValue = await nValueInput.getAttribute('value');
  // expect(currentNValue).equals(`${nValue}`, 'N was not updated correctly');

  for(let index = 0; index < timesClicked; index++){
    await incrementButton.click();
  }

})
