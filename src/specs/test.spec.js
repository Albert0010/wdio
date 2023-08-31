import { config } from "../../wdio.conf";


describe('Login functionality',()=>{
    it("should not login with invalid parametres",async ()=>{
        await browser.maximizeWindow();
        await browser.url(config.baseUrl); 
    })
})