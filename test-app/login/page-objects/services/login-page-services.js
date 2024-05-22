const LoginPageMethod = require('../methods/login-page-methods');
const { USERNAME, PASSWORD, URL } = require('../../e2e/data/login-page-data');
const { MESSAGE } = require('../../common/login-page-locale-constants')

class LoginPageServices{
    async verifyLoginFunctionality(){
        await LoginPageMethod.NavigateToApplication(URL)
        await LoginPageMethod.login(USERNAME,PASSWORD)
        await LoginPageMethod.checkLoginMessage(MESSAGE)
    }   

}
module.exports = new LoginPageServices();