const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')

describe('Verify radio button functionality', function () {
   it('Verify whether user is able to click on radio button', async function () {
    await LoginPageServices.NavigateToApp(process.env.RADIO_BUTTON)
    await TestScenarioServices.validateRadioButtonFunctionality()
   })
})