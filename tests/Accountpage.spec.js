//@ts-check

import {test,expect} from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';

test.describe('test case for account page', () => {
    
    let accountpage;
    test.use({storageState:'loggedInState.json'});

    test('access order section', async ({page}) => {

        accountpage = new AccountPage(page);
        await accountpage.navigateToOrderSection();
        await accountpage.fetchMessageOnOrderPage();
        await accountpage.verifyMessagePresentOnOrderSection();
        
    });
})

test.describe('with not logged in state', () => {

    let accountpage;
    test.use({storageState: 'notLoggedInState.json' });
    test('test without login', async ({ page }) => {
        
        accountpage = new AccountPage(page);
        await page.goto('/my-account');
        await expect(accountpage.btnLogin).toBeVisible();
        await expect(accountpage.btnRegister).toBeVisible();
    })
    
})
