import { faker } from '@faker-js/faker';
import { register } from 'module';

class DataGenerator{

    static generateUser(){

        return{

        name: faker.person.fullName(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        displayname: faker.person.middleName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        message: faker.commerce.productDescription(),
        registerEmail: faker.internet.email(),
        regiserUserName: faker.person.fullName(),
        password: faker.string.alphanumeric(10),
        }
    }

    static generateRandomNumber(){

        const randomNumber = Math.floor(Math.random() * 10);
        return randomNumber;
    }

}

export default DataGenerator;