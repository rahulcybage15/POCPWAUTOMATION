import {test,expect} from '@playwright/test';
import { CartPage } from '../pages/CartPage';
const path = require('path');

test.describe('test cases for upload files', () => {
    
    let cartPage;

    test('upload manually', async ({ page }) => {
        
        cartPage = new CartPage(page);
        await page.goto('https://practice.sdetunicorns.com/cart/');
        await cartPage.uploadFileManually();
        await cartPage.verifyUploadSuccessMessage();
    })

    test('upload using dom', async ({ page }) => {
        cartPage = new CartPage(page);
        await page.goto('https://practice.sdetunicorns.com/cart/');
        await cartPage.uploadFileUsingDom();
        await cartPage.verifyUploadSuccessMessage();
        
    })

    test('uploading using component', async ({ page }) => {
        const filepath = path.join(__dirname,'../data/Image_1.png');
        cartPage = new CartPage(page);
        await page.goto('https://practice.sdetunicorns.com/cart/');
        await cartPage.UploadingFileComponent().uploadFile(filepath);
        await cartPage.verifyUploadSuccessMessage();
    })
    
    
    
})
