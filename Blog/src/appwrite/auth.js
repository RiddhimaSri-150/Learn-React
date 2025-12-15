import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
   client = new Client();
   account;
    constructor(){
        this.client
          .setEndpoint(config.appWriteurl)
          .setProject(config.appWriteProject);
        this.account = new Account(this.client);
    }
    async  createAccount ({email, password, name}) {
         try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // return another method
                return this.login({email, password})
            } else {
                return userAccount;
            }
         } catch (error) {
            throw error;
         }
        }

    async login({email, password}) { 
            try {
                return await this.account.createEmailPasswordSession(
                    email, password
                )
            } catch (error) {
                throw error;
            }
         }
    
    async getCurrentuser(){
        try {
           return await this.account.get() 
        } catch (error) {
           throw error; 
        }
        return null;
    }
    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite servive :: logout :: error", error)
        }
    }

}
 const authService = new AuthService();
 export default authService
