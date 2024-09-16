const TestScenarioPageLocators = require('../../../test-Scenarios/page-objects/elements/test-scenario-locators');
const Utils = require('../../../utils/wdio.utils');
const {SELECTED_OPTION_TEXT} = require('../../../test-Scenarios/common/test-scenarios-constants')


class TestScenarioPageMethods{
    async validateDragAndDropFunctionality(){
        await TestScenarioPageLocators.draggableObject.dragAndDrop(await TestScenarioPageLocators.droppableObject)
    }

    async validateMsgAfterDragAndDrop(message){
        await Utils.isTextPresentInUI(TestScenarioPageLocators.droppableObject,message)
    }

    async selectValueFromDropDown(){
        await TestScenarioPageLocators.dropDown.selectByVisibleText(SELECTED_OPTION_TEXT);
        
    }

    async validateSelectedValueFromDropDown(message){
        await Utils.isTextPresentInUI(TestScenarioPageLocators.selectedDropdownText,message)
    }
    
    async downloadFile(){
        await Utils.clickElement(TestScenarioPageLocators.downloadLink)
        await browser.pause(6000);
    }

    async uploadFile(filePath){
        await TestScenarioPageLocators.fileInput.setValue(filePath)
    }

    async verifyFileUpload(fname){
        await Utils.clickElement(TestScenarioPageLocators.uploadBtn)
        await Utils.isTextPresentInUI(TestScenarioPageLocators.uploadedFileName,fname)
    }

    async switchToIframe(){
        await Utils.switchToFrame(TestScenarioPageLocators.iframe)
    }

    async validateIframe(email,msg){
        await Utils.setInputValue(TestScenarioPageLocators.emailInput,email)
        await Utils.clickElement(TestScenarioPageLocators.subscribeBtn)
        await Utils.isTextPresentInUI(TestScenarioPageLocators.invalidFeedbackMsg,msg)
        await Utils.switchToParentFrame()
    }

    async enterAkey(key){
        await Utils.setInputValue(TestScenarioPageLocators.inputToEnterKey,key)
    }

    async validateEnteredKey(msg){
        await Utils.isTextPresentInUI(TestScenarioPageLocators.keyOutput,msg)
    }

    async loginToApplication(username,password){
        await Utils.setInputValue(TestScenarioPageLocators.userNameInput,username)
        await Utils.setInputValue(TestScenarioPageLocators.passwordInput,password)
        await Utils.clickElement(TestScenarioPageLocators.submitBtn)
    }

    async validateSuccessFulLogin(msg){
        await Utils.isTextPresentInUI(TestScenarioPageLocators.welcomeMsg,msg)
    }

    async validateLoginFailure(msg){
        await Utils.isTextPresentInUI(TestScenarioPageLocators.invalidUsernameMessage,msg)
    }

    async validateLogout(msg){
        await Utils.clickElement(TestScenarioPageLocators.logoutButton)
        await Utils.isTextPresentInUI(TestScenarioPageLocators.logOutMessage,msg)
    }

    async getNewWindow(){
        await Utils.clickElement(TestScenarioPageLocators.newWindowLink)
    }

    async validateWindowHandle(msg){
        await Utils.switchToNewWindow(async () => {
            // Perform actions in the new window
            await Utils.isTextPresentInUI(TestScenarioPageLocators.newWindowMessage,msg)
        });
    }

    async clickOnRadioButton(){
        await Utils.clickElement(TestScenarioPageLocators.redRadioButton)
    }

    async validateRadioButton(){
        const isSelected=await TestScenarioPageLocators.redRadioButton.isSelected()
        expect(isSelected).toBe(true);
    }
}
module.exports = new TestScenarioPageMethods();