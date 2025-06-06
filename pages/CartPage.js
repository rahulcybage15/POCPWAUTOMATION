// @ts-check
import { expect } from "@playwright/test";
import  UploadComponent  from "./Components/uploadComponent";
//const path = require('path');
import path from 'path';
import exp from "constants";
class CartPage {
  
    /**
     * @param {any} page
     */
    constructor(page){

        this.page = page;
        this.fileupload1 = page.locator('input#upfile_1');
        this.clickUploadBtn = page.locator('input#upload_1');
        this.successMessage =  page.locator('.file_messageblock_fileheader label');
    }

    async goToCartPage(){
        await this.page.goto('/cart');
    }

    UploadingFileComponent(){
        return new UploadComponent(this.page);
    }


    async uploadFileManually(){

        const filepath = path.join(__dirname,'../data/Image_1.png');
        await this.page.setInputFiles('input#upfile_1',filepath);
        await this.clickUploadBtn.click();
    }

    async verifyUploadSuccessMessage(){
        await expect(this.successMessage).toBeVisible();
        console.log(await this.successMessage.innerText());
    }

    async uploadFileUsingDom(){
        
     const filepath = path.join(__dirname,'../data/Image_1.png');

     await this.page.evaluate(() => {
        const slector = document.querySelector('input#ùpfile_1');
        if(slector){
            slector.className = '';
        }
    })
    await this.page.setInputFiles('input#upfile_1',filepath);
    await this.clickUploadBtn.click();

    }


}

export default CartPage;