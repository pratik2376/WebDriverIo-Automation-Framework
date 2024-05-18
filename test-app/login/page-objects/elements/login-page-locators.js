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
    get messageBox(){
        return $('#flash')
    }
}
module.exports = new LoginPageLocators();