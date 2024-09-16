const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {UNICODE_BACK_SPACE,KEY_OUTPUT} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify key press functionality', function () {
   it('Verify whether user is able to press keys', async function () {
    await LoginPageServices.NavigateToApp(process.env.KEY_PRESS)
    await TestScenarioServices.validateKeyPress(UNICODE_BACK_SPACE,KEY_OUTPUT)
   })
})