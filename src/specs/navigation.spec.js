import navigationPage from "../pages/navigation.page.js";
import {config} from "../../wdio.conf.js";
import {mainTitleValues, paths} from "../../_helper/constnats.js";
import {expect} from "chai";

describe('Navigation functionality',()=>{

    before(async ()=>{
        await navigationPage.navigatePages(config.baseUrl);

    });
    //
    // it('should click see all buttons and  navigate properly', async () => {
    //     const seeAllButtonsArray = await navigationPage.getSeeAllButtons;
    //     let expectedValue = false;
    //     for (let index = 0; index < seeAllButtonsArray.length; index++) {
    //
    //         const seeAllBtn = seeAllButtonsArray[index];
    //         await seeAllBtn.click();
    //         const actualTitleMessage = await navigationPage.getHomeValue?.getText();
    //         expectedValue = actualTitleMessage.toLowerCase() === mainTitleValues[index].toLowerCase();
    //         if(!expectedValue){
    //             break;
    //         }
    //         await navigationPage.navigatePages(config.baseUrl);
    //     }
    //     expect(expectedValue).to.equal(true);
    // });



    // Object.values(paths).forEach(({paths,expectedTitle})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly',async () => {
    //             await navigationPage.navigatePages(`${config.baseUrl}${path}`);
    //             const actualTitleMessage = await  navigationPage.getHomeValue?.getText();
    //             expect(actualTitleMessage.toLowerCase()).eql(expectedTitle.toLowerCase());
    //         })
    //     })
    // });
})