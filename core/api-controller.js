import { request} from '@playwright/test';
import dotenv from 'dotenv';



dotenv.config();

class ApiController {

     apiContext;

     async init(){
        this.apiContext = await request.newContext({
            // All requests we send go to this API endpoint.
            baseURL: `${process.env.API_BASE_URL}`,
          });
     }

     async closeApi(){
      await this.apiContext.dispose();
     }

     async getUsers(index){

        const response = await this.apiContext.get('users');
        const responsebody = await response.json();
        return responsebody[index];
     }

}

export default new ApiController();