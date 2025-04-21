// @ts-nocheck
// Import the custom test and expect
import { test, expect } from '../core/BaseTest';

/**
 * @typedef {import('../core/BaseTest').CustomFixtures} CustomFixtures
 */

/** @type {import('@playwright/test').Test<CustomFixtures>} */
//const typedTest = test;

import  HomePage  from '../pages/HomePage';
//import PageAssertions from '../assertions/PageAssertions';
import DataGenerator from '../utils/datagenerator';
import  ContactPage from '../pages/ContactPage';
import dotenv from 'dotenv';
import VerificationUtils from '../utils/VerificationUtils';
//import { read } from 'fs';
import apiController from '../core/api-controller';

//let apiContext;
let randomPerson;

dotenv.config();

test.describe('contact page test cases', () => {

   // let homePage ;
   // let contactPage;
   test.beforeAll(async ({ playwright }) => 
    {
       // apiContext = await playwright.request.newContext({
            // All requests we send go to this API endpoint.
         //   baseURL: `${process.env.API_BASE_URL}`,
         // });
         await apiController.init();
    
   })
   test.afterAll(async ({ playwright }) => {


    await apiController.closeApi();
   })
   

   test.beforeEach(async ({ homePage }) => {
    
        //homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    })

    test('using pom fill the form', async ({ homePage, contactPage }) => {
        
        const index = DataGenerator.generateRandomNumber();
        const randomPerson = await apiController.getUsers(index);
        //const response = await apiContext.get('users');
        //expect(response.ok()).toBeTruthy();
        //const responsebody = await response.json();
        //sconsole.log(responsebody);
        
        //randomPerson = responsebody[index];
        await homePage.verifyHomePageTitle();
        await contactPage.navigateToContactPage();
        await contactPage.verifyContactPageURL();
        await contactPage.fillTheForm(
         randomPerson['name'],
         randomPerson['email'],
         randomPerson['phone'],
         randomPerson['website']
        );
        await contactPage.verifySuccessMessage();
    })
    
})
