// @ts-check
import { expect } from '@playwright/test';
import BasePage from './BasePage';
import verificationUtils from '../utils/VerificationUtils';
import HomePageLocators from './Locators/HomePageLocators';

 class HomePage extends BasePage {

    /**
     * @param {import("playwright-core").Page} page
     */
    constructor(page){


        super(page);
        //this.page = page;
        this.locatorMap = HomePageLocators;

       // this.getStartedBtn = page.locator('#get-started');
        //this.headingText = page.locator('text=Think different. Make different.');
       // this.coursesBtn = page.locator('a.zak-button');
       // this.contactLink = page.locator('#menu-item-493');
       // this.blogLink = page.locator('#menu-item-490');
       // this.homeLink = page.locator('#menu-item-489 a');
       // this.navLinks = page.locator('#zak-primary-nav ul li');
       // this.headingText = page.locator('text=Think');
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
        return this.getLocator('navLinks').allInnerTexts();
    }

   async verifyHomePageTitle(){


    await verificationUtils.pageHaveTitle(this.page,`${process.env.HOME_TITLE}`);
       // await expect(this.page).toHaveTitle(`${process.env.HOME_TITLE}`);
    }

    async clickOnGetStartedBtn(){
        await this.getLocator('getStartedBtn').click();

       // await this.getStartedBtn.click();
    }

    async verifyGetStartedURL(){

        await verificationUtils.pageHaveURL(this.page,/.*#get-started/);
    
       //await expect(this.page).toHaveURL(/.*#get-started/);
    }

    async fetchHeadingName(){
        return await this.getText(this.getLocator('headingText'));
        //return await this.getText(this.headingText);
        
    }

    async verifyHeadingTextIsVisible(){

        await verificationUtils.elementIsVisible(this.getLocator('headingText'));
        //const te = await this.fetchHeadingName();
        //console.log(te);
        //await expect(this.headingText).toBeVisible()
    }
}

export default HomePage;

