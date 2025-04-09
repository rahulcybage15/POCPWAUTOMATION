import { faker } from '@faker-js/faker';

class DataGenerator{

    static generateUser(){

        return{

        name: faker.person.fullName(),
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        displayname: faker.person.middleName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        message: faker.commerce.productDescription()
        }
    }

}

export default DataGenerator;