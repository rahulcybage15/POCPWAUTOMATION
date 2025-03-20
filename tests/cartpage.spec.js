import {test,expect} from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
const path = require('path');

test.describe('test cases for upload files', () => {
    
    let cartPage;
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateToHomePage();
    })
    

    test('upload manually', async ({ page }) => {
        
        
        cartPage = new CartPage(page);
        await cartPage.goToCartPage();
        await cartPage.uploadFileManually();
        await cartPage.verifyUploadSuccessMessage();
    })

    test('upload using dom', async ({ page }) => {
        cartPage = new CartPage(page);
        await cartPage.goToCartPage();
        await cartPage.uploadFileUsingDom();
        await cartPage.verifyUploadSuccessMessage();
        
    })

    test('uploading using component', async ({ page }) => {
        const filepath = path.join(__dirname,'../data/Image_1.png');
        cartPage = new CartPage(page);
        await cartPage.goToCartPage();
        await cartPage.UploadingFileComponent().uploadFile(filepath);
        await cartPage.verifyUploadSuccessMessage();
    })
    
    
    
})
