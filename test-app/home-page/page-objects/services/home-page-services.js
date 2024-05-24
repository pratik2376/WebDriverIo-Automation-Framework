const HomePageMethods = require('../methods/home-page-methods');
const { MESSAGE } = require('../../common/home-page-locale-constants')

class HomePageServices{
    async verifyHomePageWelcomeMessage(){
        await HomePageMethods.checkHomePageMessage(MESSAGE)
    }   

}
module.exports = new HomePageServices();