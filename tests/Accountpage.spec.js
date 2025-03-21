//@ts-check

import {test,expect} from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';
import { HomePage } from '../pages/HomePage';

test.describe('test case for account page', () => {
    
    let accountpage;
    let homepage;
    let page;

    test.beforeAll(async ({ browser}) => {

        page = await browser.newPage();
        accountpage = new AccountPage(page);
        homepage = new HomePage(page);
        await homepage.navigateToHomePage();
        await homepage.navigateTotAccountPage();      
        await accountpage.performLogin('practiceuser1','PracticePass1!');
    })

    test('access order section', async () => {


        accountpage = new AccountPage(page);
        await accountpage.navigateToOrderSection();
        await accountpage.fetchMessageOnOrderPage();
        await accountpage.verifyMessagePresentOnOrderSection();
        
    })
    

    
})
