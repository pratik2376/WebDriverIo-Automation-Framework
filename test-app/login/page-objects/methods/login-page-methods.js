const LoginPageLocator = require('../elements/login-page-locators');

class LoginPageMethods{
    async login(username, password){
        await LoginPageLocator.username.setValue(username)
        await LoginPageLocator.password.setValue(password)
        await LoginPageLocator.loginButton.click()
    }
    async checkLoginMessage(message){
        await expect(LoginPageLocator.messageBox).toHaveTextContaining(message)
    }
    
    async Navigate(url){
        await browser.url(url)
    }
}
module.exports = new LoginPageMethods();
