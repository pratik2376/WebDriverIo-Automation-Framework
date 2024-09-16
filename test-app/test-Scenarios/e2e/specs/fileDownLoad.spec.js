const TestScenarioServices = require('../../../test-Scenarios/page-objects/services/test-scenarios-services')
const LoginPageServices = require('../../../common/login-page/page-objects/services/login-page-services')
const {FILE_NAME,FILE_PATH} = require('../../../test-Scenarios/common/test-scenarios-constants')

describe('Verify file download functionality', function () {
   it('Verify whether user is able to download a file suucessfully', async function () {
    await LoginPageServices.NavigateToApp(process.env.FILE_DOWNLOAD)
    await TestScenarioServices.validateFileDownloadFunctionality(FILE_NAME,FILE_PATH)
   })
})