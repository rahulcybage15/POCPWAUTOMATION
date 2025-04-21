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
    }

    async navigateToHomePage(){
        await this.navigate(`${process.env.BASE_URL}`);
    
    }

    async navigateTotAccountPage(){
        await this.navigate(`${process.env.BASE_URL}/my-account`);
    }

    getNavLinksText(){
        return this.getLocator('navLinks').allInnerTexts();
    }

   async verifyHomePageTitle(){

    await verificationUtils.pageHaveTitle(this.page,`${process.env.HOME_TITLE}`);
    }

    async clickOnGetStartedBtn(){
        await this.getLocator('getStartedBtn').click();
    }

    async verifyGetStartedURL(){

        await verificationUtils.pageHaveURL(this.page,/.*#get-started/);
    }

    async fetchHeadingName(){
        return await this.getText(this.getLocator('headingText'));
    
    }

    async verifyHeadingTextIsVisible(){

        await verificationUtils.elementIsVisible(this.getLocator('headingText'));
    }
}

export default HomePage;

