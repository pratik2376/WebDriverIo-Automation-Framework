const LoginPageServices = require('../../../../test-app/login/page-objects/services/login-page-services')

describe('Verify Login functionality', function () {
   it('Verify whether user is able to login successfully and see the login message', async function () {
       await LoginPageServices.verifyLoginFunctionality()
   })
})