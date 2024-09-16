const TestScenarioPageMethods = require('../../../test-Scenarios/page-objects/methods/test-scenario-methods');
const fs = require('fs');
const path = require('path'); 



class TestScenarioServices{
    async verifyDragAndropFunctionalityAndMsg(message){
        await TestScenarioPageMethods.validateDragAndDropFunctionality()
        await TestScenarioPageMethods.validateMsgAfterDragAndDrop(message)
    }   

    async validateDropDownFunctionality(message){
        await TestScenarioPageMethods.selectValueFromDropDown()
        await TestScenarioPageMethods.validateSelectedValueFromDropDown(message);
    }

    async validateFileDownloadFunctionality(fname,fpath){
        await TestScenarioPageMethods.downloadFile()
        await this.validateFileDownload(fname,fpath)
    }

    async validateFileDownload(fname,fpath){
        const filePath = path.join(fpath, fname);
        const fileExists = fs.existsSync(filePath);
        expect(fileExists).toBe(true);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting the file:', err);
            } else {
                console.log('File deleted successfully.');
            }
        });
    }

    async validateFileUploadScenario(fpath,fname){
        const filePath = path.resolve(__dirname, '../../../'+fpath+fname);
        await TestScenarioPageMethods.uploadFile(filePath)
        await TestScenarioPageMethods.verifyFileUpload(fname)
    }

    async validateIframeFunctionality(email,msg){
        await TestScenarioPageMethods.switchToIframe()
        await TestScenarioPageMethods.validateIframe(email,msg)
    }

    async validateKeyPress(key,msg){
        await TestScenarioPageMethods.enterAkey(key)
        await TestScenarioPageMethods.validateEnteredKey(msg)
    }

    async validateLoginAndLogoutPageWithValidCredentials(username,password,msg,msg2){
        await TestScenarioPageMethods.loginToApplication(username,password)
        await TestScenarioPageMethods.validateSuccessFulLogin(msg)
        await TestScenarioPageMethods.validateLogout(msg2)
    }

    async validateLoginWithInvalidCredentials(username,password,msg){
        await TestScenarioPageMethods.loginToApplication(username,password)
        await TestScenarioPageMethods.validateLoginFailure(msg)
    }

    async validateWindowHandleScenario(msg){
        await TestScenarioPageMethods.getNewWindow()
        await TestScenarioPageMethods.validateWindowHandle(msg)
    }

    async validateRadioButtonFunctionality(){
        await TestScenarioPageMethods.clickOnRadioButton()
        await TestScenarioPageMethods.validateRadioButton()
    }

}
module.exports = new TestScenarioServices();