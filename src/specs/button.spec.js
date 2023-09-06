import {expect} from "chai";
import {config} from "../../wdio.conf.js"
import {paths, cssProperties, mainTitleValues} from '../../_helper/constnats.js'
import buttonPage from '../pages/button.page.js'

describe('Button hover check',()=>{
    before(async ()=>{
        await buttonPage.navigatePages(config.baseUrl);
    });

    // Object.values(paths).forEach(({paths})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly and check buttons hover',async () => {
    //             await buttonPage.navigatePages(`${config.baseUrl}${path}`);
    //             const button = await buttonPage.getButton;
    //             const isButtonExisted = await button.isExisting();
    //             if(isButtonExisted){
    //                 await button.moveTo();
    //                 const {parsed:{hex}} = await buttonPage.getCssPropertyBgColor;
    //                 expect(hex).eql(cssProperties.hoverValueLight);
    //             }else{
    //
    //             }
    //             // await browser.pause(2000);
    //         })
    //     })
    // });

    it('should hover see all buttons', async () => {
        const seeAllButtonsArray = await buttonPage.getSeeAllButtons;
        let expectedValue = false;
        for (let index = 0; index < seeAllButtonsArray.length; index++) {
            debugger

            const seeAllBtn = seeAllButtonsArray[index];
            await seeAllBtn.scrollIntoView({ block: 'center', inline: 'center' });
            await seeAllBtn.moveTo();
            const {parsed:{hex}} = await seeAllBtn.getCSSProperty(cssProperties.bgColor);
            expectedValue = (hex === cssProperties.hoverValueOpacity)

            if(!expectedValue){
                break
            }
        }
        expect(expectedValue).to.equal(true);
    });
})