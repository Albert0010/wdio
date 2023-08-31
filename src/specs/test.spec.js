import {expect} from "chai";
import {} from "../pages/login.page.js"

describe('Login functionality',()=>{
    it("should not login with invalid parametres",async ()=>{

        await $('locator').setValue('wrong_log');
        await $('locator').setValue('wrong_user');
        await $('locator').click();
        expect()
    })
})