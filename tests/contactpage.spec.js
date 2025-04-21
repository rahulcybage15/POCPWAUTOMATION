// @ts-nocheck
// Import the custom test and expect
import { test, expect } from '../core/BaseTest';

/**
 * @typedef {import('../core/BaseTest').CustomFixtures} CustomFixtures
 */

/** @type {import('@playwright/test').Test<CustomFixtures>} */
//const typedTest = test;

import  HomePage  from '../pages/HomePage';
import DataGenerator from '../utils/datagenerator';
import  ContactPage from '../pages/ContactPage';
import dotenv from 'dotenv';
import VerificationUtils from '../utils/VerificationUtils';

dotenv.config();

test.describe('contact page test cases', () => {

   // let homePage ;
   // let contactPage;

   test.beforeEach(async ({ homePage }) => {
    
        //homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    })

    test('using pom fill the form', async ({ homePage, contactPage }) => {
        
        const user = DataGenerator.generateUser();
        //contactPage = new ContactPage(page);
        await homePage.verifyHomePageTitle();
        await contactPage.navigateToContactPage();
        await contactPage.verifyContactPageURL();
        await contactPage.fillTheForm(user.name,user.email,user.phone,user.message);
        await contactPage.verifySuccessMessage();
    })
    
})
