import navigationPage from "src/pages/navigation.page.js";
import {config} from "wdio.conf.js";

describe('Navigation functionality',()=>{
    before(async ()=>{
        await navigationPage.navigatePages(config.baseUrl);
    });

    // Object.values(paths).forEach(({paths,expectedTitle})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly',async () => {
    //             await navigationPage.navigatePages(`${config.baseUrl}${path}`);
    //             const actualErrorMessage = await  navigationPage.getHomeValue?.getText();
    //             expect(actualErrorMessage.toLowerCase()).eql(expectedTitle.toLowerCase());
    //             await browser.pause(2000);
    //         })
    //     })
    // });
})