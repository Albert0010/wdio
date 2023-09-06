import {expect} from "chai";
import {config} from "../../wdio.conf.js"
import {paths, cssProperties} from '../../_helper/constnats.js'
import buttonPage from '../pages/button.page.js'

describe('Button hover check',()=>{
    // before(async ()=>{
    //     await buttonPage.navigatePages(config.baseUrl);
    // });
    // Object.values(paths).forEach(({paths})=>{
    //     paths.forEach(async (path)=>{
    //         it('should navigate all pages properly and check buttons hover',async () => {
    //             await buttonPage.navigatePages(`${config.baseUrl}${path}`);
    //             const button = await buttonPage.getButton;
    //             const isButtonExisted = await button.isExisting();
    //             console.log(isButtonExisted)
    //             if(isButtonExisted){
    //                 await button.moveTo();
    //                 const {parsed:{hex}} = await buttonPage.getCssProperty;
    //                 expect(hex).eql(cssProperties.hoverValue);
    //             }else{
    //
    //             }
    //             // await browser.pause(2000);
    //         })
    //     })
    // });
})