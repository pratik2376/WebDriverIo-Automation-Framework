const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {SELECTED_OPTION_TEXT} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify Drag And drop functionality', function () {
   it('Verify whether user is able to select value from dropdown', async function () {
    await LoginPageServices.NavigateToApp(process.env.DROP_DOWN_URL)
    await TestScenarioServices.validateDropDownFunctionality(SELECTED_OPTION_TEXT)
   })
})