//@ts-check

import {test,expect} from '@playwright/test';
import { AccountPage } from '../pages/AccountPage';
import { HomePage } from '../pages/HomePage';

test.describe('test case for account page', () => {
    
    let accountpage;

    test('access order section', async ({page}) => {

        accountpage = new AccountPage(page);
        await accountpage.navigateToOrderSection();
        await accountpage.fetchMessageOnOrderPage();
        await accountpage.verifyMessagePresentOnOrderSection();
        
    });
})
