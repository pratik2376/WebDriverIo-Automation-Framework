const LoginPageLocator = require('../elements/login-page-locators');
const Utils = require('../../../utils/wdio.utils');

class LoginPageMethods{
    async login(username, password){
        await Utils.setInputValue(LoginPageLocator.username,username)
        await Utils.setInputValue(LoginPageLocator.password,password)
        await Utils.clickElement(LoginPageLocator.loginButton)
    }
    async checkLoginMessage(message){
        await Utils.isTextPresentInUI(LoginPageLocator.messageBox,message)
    }
    
    async NavigateToApplication(url){
        await Utils.navigateToURL(url)
    }
}
module.exports = new LoginPageMethods();
