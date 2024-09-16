const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {UPLOAD_FILE_NAME,UPLOAD_FILE_PATH} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify file upload functionality', function () {
   it('Verify whether user is able to upload a file suucessfully', async function () {
    await LoginPageServices.NavigateToApp(process.env.FILE_UPLOAD)
    await TestScenarioServices.validateFileUploadScenario(UPLOAD_FILE_PATH,UPLOAD_FILE_NAME)
   })
})