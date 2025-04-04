// @ts-check
import { expect } from '@playwright/test';
import BasePage from './BasePage';
 class HomePage extends BasePage {

    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){


        super();
        this.page = page;
        this.getStartedBtn = page.locator('#get-started');
        this.headingText = page.locator('text=Think different. Make different.');
        this.coursesBtn = page.locator('a.zak-button');
        this.contactLink = page.locator('#menu-item-493');
        this.blogLink = page.locator('#menu-item-490');
        this.homeLink = page.locator('#menu-item-489 a');
        this.navLinks = page.locator('#zak-primary-nav ul li');
        this.headingText = page.locator('text=Think');
    }

    async navigateToHomePage(){
        //console.log(`${process.env.BASE_URL});
        await this.navigate(`${process.env.BASE_URL}`);
    
    }

    async navigateTotAccountPage(){
        await this.navigate(`${process.env.BASE_URL}/my-account`);
        //await this.page.goto('');
    }

    getNavLinksText(){
        return this.navLinks.allInnerTexts();
    }

   async verifyHomePageTitle(){
        await expect(this.page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    }

    async clickOnGetStartedBtn(){

        await this.getStartedBtn.click();
    }

    async verifyGetStartedURL(){
    
       await expect(this.page).toHaveURL(/.*#get-started/);
    }

    async fetchHeadingName(){
         await this.getText(this.headingText);
        // return await this.headingText.innerText()
    }

    async verifyHeadingTextIsVisible(){
        const te = await this.fetchHeadingName();
        console.log(te);
        await expect(this.headingText).toBeVisible()
    }
}

export default HomePage;

