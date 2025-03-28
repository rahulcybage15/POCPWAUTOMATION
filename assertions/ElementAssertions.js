
import BaseAssertion from './BaseAssertions'

export class ElementAssertions extends BaseAssertion{
    constructor(page){
        super();
        this.page = page;
    }

    async elementHaveText(selector,expectedText,message='does not match'){
        const actualText = await this.page.locator(selector).innerText();
        await this.assertEqual(actualText,expectedText,message);
    }

    


}

module.exports= ElementAssertions;