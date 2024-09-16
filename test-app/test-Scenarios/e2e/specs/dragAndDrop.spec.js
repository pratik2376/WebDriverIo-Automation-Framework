const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {DROPPPABLE_MESSAGE} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify Drag And drop functionality', function () {
   it('Verify whether user is able to drag and drop and validate the msg', async function () {
    await LoginPageServices.NavigateToApp(process.env.DRAG_AND_DROP_URL)
    await TestScenarioServices.verifyDragAndropFunctionalityAndMsg(DROPPPABLE_MESSAGE)
   })
})