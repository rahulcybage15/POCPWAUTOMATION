//@ts-check

'import("@playwright/test").FullConfig'
import { HomePage } from "../pages/HomePage";
import { AccountPage } from "../pages/AccountPage";
import { chromium } from "@playwright/test";

/**
 * @param {import("@playwright/test").Config} FullConfig
 */
async function globalSetup(FullConfig) {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://practice.sdetunicorns.com/my-account/');
    await page.context().storageState({path:'notLoggedInState.json'});

    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('[value="Log in"]').click();

    await page.context().storageState({path:'loggedInState.json'});
    await browser.close();
    
}

export default globalSetup;