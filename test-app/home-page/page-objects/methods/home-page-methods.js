const HomePageLocators = require('../elements/home-page-locators');
const Utils = require('../../../utils/wdio.utils');

class HomePageMethods{
    async checkHomePageMessage(message){
        await Utils.isTextPresentInUI(HomePageLocators.messageBox,message)
    }
    
}
module.exports = new HomePageMethods();
