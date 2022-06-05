
import {assertion, commonActions} from "../../utilities/common/imports";
let expectedURL = null;

class homePage  {

    elements = {
            cookieDialogBox_Iframe :  '//*[@title="SP Consent Message"]',
            cookieDialogBox_Agree : '//*[@title="Agree"]'
    };



    async urls(urlEnv) {

        switch (urlEnv) {
         case "Live":   await this.urlLaunch1(`https://www.sky.com/`);
                        break;
         case "Staging": await this.urlLaunch1(`https://www.google.com/`);
                         break;
         case "Development": await this.urlLaunch1(`https://www.yahoo.com/`);
                             break;
        default : throw "Switch Value ("+urlEnv+") not found" ;

        }
    }

        async urlLaunch1 (path)
        {
            expectedURL = path;
            await browser.url(path);
        }

    async handlingCookiesDialogBox()
    {
       if(await commonActions.isDisplayed(this.elements.cookieDialogBox_Iframe) === true)
       {
           await commonActions.waitForElement(this.elements.cookieDialogBox_Iframe);
           await commonActions.switchFrame(this.elements.cookieDialogBox_Iframe);
           await commonActions.clickElement(this.elements.cookieDialogBox_Agree);
           await commonActions.switchParentFrame();
        }
       else
       {
            console.log("Allow Cookie Dialog box is not appeared");
       }
    }



    async verifyCurrentUrl()
    {
       let currentUrl =  await commonActions.getCurrentUrl();
       await assertion.exactTextMatch(expectedURL, currentUrl)
    }


    }

export default new homePage();
