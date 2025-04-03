//@ts-check

import {test,expect} from '@playwright/test';
import  AccountPage from '../pages/AccountPage';
import dotenv from 'dotenv';

dotenv.config();


test.describe('with not logged in state', () => {

    

    let accountpage;
    test('test without login', async ({ page }) => {
        
        accountpage = new AccountPage(page);

        await page.goto(`${process.env.BASE_URL}/my-account`);
        await accountpage.performLogin(String(process.env.USER),String(process.env.PASSWORD));
        await accountpage.navigateToOrderSection();
        await accountpage.verifyMessagePresentOnOrderSection();
    })
    
})
