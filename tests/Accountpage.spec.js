// @ts-nocheck

import { test, expect } from '../core/BaseTest';

/**
 * @typedef {import('../core/BaseTest').CustomFixtures} CustomFixtures
 */

/** @type {import('@playwright/test').Test<CustomFixtures>} */

//import {test,expect} from '@playwright/test';
//import  AccountPage from '../pages/AccountPage';
import dotenv from 'dotenv';
import PageAssertions from '../assertions/PageAssertions';
import DataGenerator from '../utils/datagenerator';
import VerificationUtils from '../utils/VerificationUtils';

dotenv.config();


test.describe('Account pages test cases', () => {

    test.beforeEach(async ({ homePage }) => {

        await homePage.navigateToHomePage();
        
    })

    test('login test', async ({ accountPage }) => {
        
        await accountPage.navigateToAccountPage();
        await accountPage.performLogin(String(process.env.USER),String(process.env.PASSWORD));
        await accountPage.navigateToOrderSection();
        await accountPage.verifyMessagePresentOnOrderSection();
    })

    test('modify the account details and save ', async ({ accountPage }) => {

        const user = DataGenerator.generateUser();
        await accountPage.navigateToAccountPage();
        await accountPage.performLogin(String(process.env.USER),String(process.env.PASSWORD));
        await accountPage.navigateToAccountDetailsSection();
        await accountPage.modifyDetailsOnAccountSection(user.firstname,user.lastname,user.displayname);
        await accountPage.verifyAccountDetailsGotSaved();
        
    })

    test('Registration Process', async ({ accountPage }) => {

        const newUser = DataGenerator.generateUser();
        await accountPage.navigateToAccountPage();
        await accountPage.registerNewUser(newUser.regiserUserName,newUser.registerEmail,newUser.password);
        await accountPage.verifyRegistrationIsSuccessufl(newUser.regiserUserName);
        
    })
    
    
    
})
