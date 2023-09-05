import {cssProperties} from "../../_helper/constnats.js";
import {
    Page
} from "./page.js";

class ButtonPage extends Page {
    async navigatePages(path){
        await  super.open(path);
    }
    get getButton(){
        return $(".book-btn");
    }

    get getCssProperty(){
        return this.getButton.getCSSProperty(cssProperties.bgColor);
    }



}

export default new ButtonPage();
