import { Page } from "./page.js";
import { config } from "../../wdio.conf.js";

class LoginPage extends Page{
    async openLoginPage(path){
        await super.open(config.baseUrl);
    };

    get usernameInput(){
        return $('locator')
    }
    get userpasswrodInput(){
        return $('locator')
    }
}

export default new LoginPage();