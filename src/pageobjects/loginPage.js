import {assertion, commonActions} from "../../utilities/common/imports";

class LoginPage{

    elements = {
        signInLink :  '//*[@data-test-id="sign-in-link"]',
        iframeSignIn : '//*[@title="iFrame containing Sky Sign-In application"]',
        userNameField: '//*[@name="username"]',
        continueButton: '//button[@data-testid="AUTHN__SUBMIT_BTN"]',
        changeLink: '//*[@data-testid="PASSWORD__CHANGELINK"]',
        boxText: '//*[@data-testid="CREATE_PASSWORD__TITLE"]' //Create your My Sky password
    };

    async signInLink()
    {
        await commonActions.clickElement(this.elements.signInLink);
    }

    async username(userTxt)
    {
        await commonActions.waitForElement(this.elements.iframeSignIn);
        await commonActions.switchFrame(this.elements.iframeSignIn);
        await commonActions.fieldEntry(this.elements.userNameField, userTxt);
        await commonActions.clickElement(this.elements.continueButton);
    }

    async checkpoint()
    {
        
    }


}

export default new LoginPage();
