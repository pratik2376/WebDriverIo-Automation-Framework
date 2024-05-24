const HomePageServices = require('../../page-objects/services/home-page-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')

describe('Verify Home page functionality', function () {
   it('Verify whether user is able to login successfully and see the welcome message', async function () {
    await LoginPageServices.LoginToApplication()
    await HomePageServices.verifyHomePageWelcomeMessage()
   })
})