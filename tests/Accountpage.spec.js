//@ts-check

import {test,expect} from '@playwright/test';
import  AccountPage from '../pages/AccountPage';

test.describe('with not logged in state', () => {

    let accountpage;
    test('test without login', async ({ page }) => {
        
        accountpage = new AccountPage(page);
        await page.goto('/my-account');
        await accountpage.performLogin('practiceuser1','PracticePass1!');
        await page.waitForTimeout(5000);
        //await accountpage.navigateToOrderSection();
        //await accountpage.fetchMessageOnOrderPage();
    })
    
})
