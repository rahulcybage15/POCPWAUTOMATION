import { faker } from '@faker-js/faker';

class DataGenerator{

    static generateUser(){

        return{

        name: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        message: faker.commerce.productDescription()
        }
    }

}

export default DataGenerator;