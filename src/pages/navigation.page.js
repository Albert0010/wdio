import {
    Page
} from "./page.js";

class NavigationPage extends Page {
     async navigatePages(path){
        await  super.open(path);
    }
    get getHomeValue(){
         return $(".short-info-section")
    }

}

export default new NavigationPage();
