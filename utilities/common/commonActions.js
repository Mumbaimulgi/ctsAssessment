module.exports = {

    async makeElement (Element)
    {
        let element = await $(Element);
        return element;
    },

    async waitForElement (Element) {
        try {
            let ele = await this.makeElement(Element);
            await browser.waitUntil(
                async () => (await ele.isDisplayed === true,
                    {
                        timeout: 15000,
                        timeoutMsg: 'expected text to be different after 10s',
                        interval: 1000
                    }));
        } catch (err) {
            console.log("waitForElement Method: " + err);
            throw "Element is not found for waitForElement Method"
        }
    },


    async fieldEntry (Element, setvalue)
    {
        await this.waitForElement(Element);
        await this.clickElement(Element);
        let textField = await this.makeElement(Element);
        await textField.clearValue();
        await textField.setValue(setvalue);
    },


    async clickElement (Element)
    {
        try {
            await this.waitForElement(Element);
            let element = await this.makeElement(Element);
            await element.click();
        } catch (err) {
            console.log("clickElement Method: " + err);
            throw "Element is not found for ClickElement Method"
        }
    },


    async isDisplayed (Element)
    {
        try {
            let elementDisplay = await this.makeElement(Element);
            if (await elementDisplay.isDisplayed()) {
                return true;
            } else {
                return false;
            }

        } catch (err) {
            console.log("Error in isDisplayed Method : " + err);
            throw err;
        }
    },


    async switchFrame (Element)
     {
        try {
            await browser.switchToFrame(await this.makeElement(Element));
        } catch (err) {
            console.log("switchFrame Method: " + err);
            throw "Element is not found for switchFrame Method"
        }
    },


    async switchParentFrame ()
     {
         await browser.switchToParentFrame();
     },

    async getCurrentUrl()
    {
        let getcurrentUrl = await browser.getUrl();
        if (getcurrentUrl != null && getcurrentUrl != undefined && getcurrentUrl != "") {
            return getcurrentUrl;
        }
        {
            return getcurrentUrl;
        }
    },

    async getAttrVal(ele, attr)
    {
        let element = await this.makeElement(ele);
        let attributeValue = element.getAttribute(attr);
        await expect(attributeValue).toHaveTextContaining("iNbTYH");
    },


    async gettext(element)
    {
        let elementText = await this.makeElement(element);
        let getTxt = await elementText.getText();
        return getTxt;
    },


};