const LoginPageMethod = require('../methods/login-page-methods')

class LoginPageServices{
    async LoginToApplication(){
        await LoginPageMethod.NavigateToApplication(process.env.INTERNET_URL)
        await LoginPageMethod.login(process.env.INTERNET_USERNAME,process.env.INTERNET_PASSWORD)
    }   

    async NavigateToApp(url){
        await LoginPageMethod.NavigateToApplication(url)
    }

}
module.exports = new LoginPageServices();