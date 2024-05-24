class LoginPageLocators {
    get username(){
        return $('#username')
    }
    get password(){
        return $('#password')
    }
    get loginButton(){
        return  $('button[type="submit"]')
    }
}
module.exports = new LoginPageLocators();