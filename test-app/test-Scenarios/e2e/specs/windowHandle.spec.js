const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {NEW_WINDOW_WELCOME_MSG} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify window handle functionality', function () {
   it('Verify whether user is able to navigate to the another window and perform actions', async function () {
    await LoginPageServices.NavigateToApp(process.env.WINDOWS)
    await TestScenarioServices.validateWindowHandleScenario(NEW_WINDOW_WELCOME_MSG)
   })
})