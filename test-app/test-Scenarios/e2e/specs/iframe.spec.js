const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {INVALID_EMAIL_MSG,SAMPLE_EMAIL} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify iframe functionality', function () {
   it('Verify whether user is able to access elements present inside iframe', async function () {
    await LoginPageServices.NavigateToApp(process.env.IFRAME)
    await TestScenarioServices.validateIframeFunctionality(SAMPLE_EMAIL,INVALID_EMAIL_MSG)
   })
})