const HomePageMethods = require('../methods/home-page-methods');
const { MESSAGE } = require('../../common/login-page-locale-constants')

class HomePageServices{
    async verifyHomePageWelcomeMessage(){
        await HomePageMethods.checkHomePageMessage(MESSAGE)
    }   

}
module.exports = new HomePageServices();