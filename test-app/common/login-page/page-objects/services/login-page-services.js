const LoginPageMethod = require('../methods/login-page-methods');
const { USERNAME, PASSWORD, URL } = require('../../../data/login-page-data');

class LoginPageServices{
    async LoginToApplication(){
        await LoginPageMethod.NavigateToApplication(URL)
        await LoginPageMethod.login(USERNAME,PASSWORD)
    }   

}
module.exports = new LoginPageServices();