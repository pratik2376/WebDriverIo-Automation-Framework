const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {INVALID_CREDS_MSG,WELCOME_MSG,LOGOUT_MSG} = require('../../../test-Scenarios/common/test-scenarios-constants')
const {getRandomString} = require('../../../utils/randomValues')

describe('Verify login functionality @Test', function () {
   it('Verify whether user is able to login with valid credentials and not with invalid credentials', async function () {
    await LoginPageServices.NavigateToApp(process.env.LOGIN)
    await TestScenarioServices.validateLoginWithInvalidCredentials(getRandomString(4),getRandomString(8),INVALID_CREDS_MSG)
    await TestScenarioServices.validateLoginAndLogoutPageWithValidCredentials(process.env.LOGIN_USERNAME,process.env.LOGIN_PASSWORD,WELCOME_MSG,LOGOUT_MSG)
   })
})