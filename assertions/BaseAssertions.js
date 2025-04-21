import { expect } from "allure-playwright";

class BaseAssertion{

    async assertTrue(condition,message = "not true"){
        expect(condition,message).toBeTruthy();

    }
    async assertFalse(condition,message='false'){
        expect(condition,message).toBeFalsy();
    }

    async assertEqual(actual, expected,message='not equal'){
        expect(actual,message).toEqual(expected);

    }

}

export default BaseAssertion;