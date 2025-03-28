class BaseElement {

    constructor(page,selector){
        this.page =page;
        this.selector = selector;

    }
    async click(){
        await this.page.locator(this.selector).click();
    }

    async getText(){
        await this.page.locator(this.selector).innerText();
    }

}

export default BaseElement;