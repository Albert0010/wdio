import loginPage from "../pages/login.page.js"

const {openLoginPage} = loginPage;
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
//
//         const actualErrorMessage = await loginPage.expectedValue.getText();
//         expect(actualErrorMessage).eql('Home');
//         await browser.pause(9000);
//     })
// });

