import {
    Page
} from "./page.js";

class LoginPage extends Page {
    async openLoginPage(path) {
        await super.open(path);
    };

    get userLoginInput() {
        return $('#filled-error-email');
    }
    get userPasswordInput() {
        return $('#filled-error-password');
    }

    get userSubmitButton() {
        return $('.login')
    }
    get expectedValue() {
        return $('.header__title')
    }
    static handleLoginRequest(login, password){
        return fetch('https://tenx-backen-testing.e-butler.com/v1/auth/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                login,
                password,
            })
        })
    }


    async login(username, password) {
        await this.userLoginInput.setValue(username);
        await this.userPasswordInput.setValue(password);
        await this.userSubmitButton.click();
        await LoginPage.handleLoginRequest(username,password)
    }


}

export default new LoginPage();
