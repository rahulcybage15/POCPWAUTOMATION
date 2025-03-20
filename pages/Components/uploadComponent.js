import { expect } from "@playwright/test";

export class UploadComponent{

    /**
     * @param {any} page
     */

    constructor(page){
        this.page = page;
        this.uploadInput = 'input#upfile_1';
        this.submitBtn = page.locator('input#upload_1');
        this.successMessage =  page.locator('.file_messageblock_fileheader label');
    }

    async uploadFile(filepath){
        await this.page.setInputFiles(this.uploadInput,filepath);
        await this.submitBtn.click();
    }


}