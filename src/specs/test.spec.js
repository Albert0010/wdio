

import {expect} from "chai";
// import loginPage from "../pages/login.page.js"
import navigationPage from "../pages/navigation.page.js";
import {config} from "../../wdio.conf.js"
import {paths} from "../../_helper/constnats.js";
// const {openLoginPage} = loginPage
// describe('Login functionality',()=>{
//     before(()=>{
//         browser.execute(function() {
//             localStorage.clear();
//         });
//         // cookies.remove('token');
//     })
//     it("should login with valid parameters",async ()=>{
//         await openLoginPage(`${config.baseUrl}/login`);
//         await loginPage.login('armine.simonian@e-butler.com',"123456");
//         await openLoginPage(`${config.baseUrl}/home`);
//         const actualErrorMessage = await loginPage.expectedValue.getText();
//         expect(actualErrorMessage).eql('Home');
//         await browser.pause(9000);
//     })
// })


describe('Navigation functionality',()=>{
    before(async ()=>{
        await navigationPage.navigatePages(config.baseURL);
    });

    // Object.values(paths).forEach(({paths,expectedTitle})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly',async () => {
    //             await navigationPage.navigatePages(`${config.baseURL}${path}`);
    //             const actualErrorMessage = await  navigationPage.getHomeValue?.getText();
    //             expect(actualErrorMessage.toLowerCase()).eql(expectedTitle.toLowerCase());
    //             await browser.pause(2000);
    //         })
    //     })
    // })

    it('should click to book button and navigate to book page',async ()=>{
       const a = await navigationPage.getButton;
       // const b = a[0];
        await a.waitForClickable({ timeout: 2500 })
            await a.click()
        // console.log(b);
        const w = await a.get;
        console.log({w});
        await browser.pause(4000);
    })
})