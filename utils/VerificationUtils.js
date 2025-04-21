import { expect } from "@playwright/test";

class VerificationUtils{

    async elementContainsText(targetElement, expectedText){

        await expect(targetElement).toContainText(expectedText);
        console.log(`asserts that elment contains text '${expectedText}'`);

    }

    async elementIsVisible(targetElement){

        await expect(targetElement).toBeVisible();
    }

    async pageContainsURL(page, expectedURL){

        const currentPageUrl = await page.url();
        expect(currentPageUrl).toContain(expectedURL);
    }

    async pageHaveURL(page, expectedURL){
        
         expect(page).toHaveURL(expectedURL);
    }

    async pageHaveTitle(page,expectedTitle){

        await expect(page).toHaveTitle(expectedTitle);
    }

    async pageContainsTitle(page,expectedTitle){
        
        const currentTitle = await page.title();
        expect(currentTitle).toContain(expectedTitle);
    }

}

export default new VerificationUtils;