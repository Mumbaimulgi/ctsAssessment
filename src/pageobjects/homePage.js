
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


    async cookieForLogin()
    {
        await browser.setCookies({
            name: '_abck',
            value: '253C842E243389D10E1645F8932FC6D4~0~YAAQ3G5WaHSirDeBAQAADWZIOwg4uyqv0AeQfd00VyyjToSV3H3f9l2VzmCZ3VwfcCUx/FTUGJ2Pd4TqWKufi/bmAfNserH3Y+0LZl7D63uJs5LmLPH9HqYCmIR5Pe3DTnrb1upI/3MDUhB0QQ1S8KnLigeAR8OHzbO9T8pIgSOw1VOOt8u6ZluMtZzotP3HzHKS7Err3clh10FEziwLY0xTJzJcdqWJ57RCVTGzHneIcv7upoY+BP2h1y1z3bqgplSpkkfdZbVBtZbg/i2BTdq8BlZgOzgzJitd0EJ5ocUn6GPRERbMkOvzPwTe1OEk/udGmbFvn0fr3WObORpHAU0vsJNuw+Y7Lrh0G5rKFAsc70aBHIOCe9om6DJPMcJrOCRcuPxhZ0eWxRpxcSKBHYrxh4/G~-1~-1~-1',
            path: '/',
            domain: '.sky.com',
            secure: true,
            httpOnly: false,
        });
    }


    }

export default new homePage();
