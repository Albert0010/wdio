import {
    Page
} from "./page.js";

class NavigationPage extends Page {
     async navigatePages(path){
        await  super.open(path);
    }
    get getHomeValue(){
         return $(".mainTitle")
    }

    get getButton(){
         return $(".book-btn")
    }

    get expectedValue(){
         return $(".carInf");
    }

}

export default new NavigationPage();
