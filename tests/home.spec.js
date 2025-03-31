// @ts-check
import {test,expect} from '@playwright/test';
import  HomePage  from '../pages/HomePage';
//const path = require('path');

test.describe('home', () => {

    let homePage;
    
    test('first test', async ({ page }) => {
        
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
        homePage.verifyHomePageTitle();
        await homePage.clickOnGetStartedBtn();
        await homePage.verifyGetStartedURL();
        await homePage.verifyHeadingTextIsVisible();
    });

   
})
