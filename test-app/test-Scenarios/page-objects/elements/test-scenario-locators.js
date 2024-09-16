class TestScenarioPageLocators {
    get draggableObject(){
        return $("//div[@id='column-a']")
    }
    get droppableObject(){
        return $("//div[@id='column-b']")
    }
    get dropDown(){
        return $('#dropdown')
    }
    get selectedDropdownText(){
        return $("//select[@id='dropdown']//option[@selected='selected']")
    }
     get downloadLink(){
        return $("//a[@data-testid='cdct.jpg']")
     }

     get fileInput(){
        return $('input[type="file"]')
     }

     get uploadBtn(){
        return $("#fileSubmit")
     }

     get uploadedFileName(){
        return $("//div[@id='uploaded-files']//p")
     }

     get iframe(){
        return ("//iframe[@id='email-subscribe']")
     }

     get emailInput(){
        return $("#email")
     }

     get subscribeBtn(){
        return $("#btn-subscribe")
     }

     get invalidFeedbackMsg(){
        return $(".invalid-feedback")
     }

     get inputToEnterKey(){
        return $("#target")
     }

     get keyOutput(){
        return $("#result")
     }

     get loginPageMessage(){
        return $("//div[@class='container']//h1")
     }

     get userNameInput(){
        return $('input[name="username"]')
     }

     get passwordInput(){
        return $('input[name="password"]')
     }

     get submitBtn(){
        return $('button[type="submit"]')
     }
    
     get welcomeMsg(){
        return $("//div[@class='container']//h1")
     }

     get logoutButton(){
        return $("//a[@class='button secondary radius']//i")
     }

     get logOutMessage(){
        return $("//div[@class='alert alert-info alert-dismissible fade show']//b")
     }

     get invalidUsernameMessage(){
        return $("//div[@class='alert alert-danger alert-dismissible fade show']//b")
     }

     get newWindowMessage(){
        return $("h1")
     }

     get newWindowLink(){
        return $("//a[contains(text(),'Click Here')]")
     }

     get redRadioButton(){
        return $("input[type='radio'][value='red']")
     }
}
module.exports = new TestScenarioPageLocators();