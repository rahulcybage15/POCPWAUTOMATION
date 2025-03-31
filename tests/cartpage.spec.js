import {test,expect} from '@playwright/test';
import CartPage  from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import path from 'path';

test.describe('test cases for upload files', () => {
    
    let cartPage;
    let homePage;

    const filename = ['FlightItinerary.pdf','Image_1.png'];

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

    for(const name of filename){

        test(`uploading multiple files ${name}`, async ({ page }) => {

            const filepath = path.join(__dirname,`../data/${name}`);
            cartPage = new CartPage(page)
            await cartPage.goToCartPage();
            await cartPage.UploadingFileComponent().uploadFile(filepath);
            await cartPage.verifyUploadSuccessMessage();
            
        })
        
    }


    
    
    
})
