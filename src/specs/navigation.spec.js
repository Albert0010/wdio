import navigationPage from "../pages/navigation.page.js";
import {config} from "../../wdio.conf.js";
import {mainTitleValues} from "../../_helper/constnats.js";

describe('Navigation functionality',()=>{

    before(async ()=>{
        await navigationPage.navigatePages(config.baseUrl);

    });

    describe('asd',async ()=>{
        const seeAllButtonsArray = await $$(".allBtn a");
        console.log({seeAllButtonsArray});
        seeAllButtonsArray.forEach(async (seeAllBtn,index)=>{
            it('asasddasds',async()=>{
                await seeAllBtn.click();
                const actualTitleMessage = await  navigationPage.getHomeValue?.getText();
                expect(actualTitleMessage.toLowerCase()).eql(mainTitleValues[index].toLowerCase());
            })
        })
    })



    // Object.values(paths).forEach(({paths,expectedTitle})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly',async () => {
    //             await navigationPage.navigatePages(`${config.baseUrl}${path}`);
    //             const actualTitleMessage = await  navigationPage.getHomeValue?.getText();
    //             expect(actualTitleMessage.toLowerCase()).eql(expectedTitle.toLowerCase());
    //             await browser.pause(2000);
    //         })
    //     })
    // });
})