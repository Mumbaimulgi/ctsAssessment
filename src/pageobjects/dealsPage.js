import {assertion, commonActions} from "../../utilities/common/imports";

class dealsPage {

    elements = {

        dealsLink: '//*[contains(@data-tracking-label, "primary_deals_link")]',
        skyQTabLink: '//*[@class="mast-u-height-main"]//div[contains(@class, "Toggle__ToggleContainer")]//*[text()="Sky Q"]/parent::button',
        skyQDealsElements: '//*[contains(@class, "box__Box")]/div[contains(@data-content-id, "offer")]/div[contains(@class, "Background")]',
        skyQtabSelected: '//*[@class="mast-u-height-main"]//div[contains(@class, "Toggle__ToggleContainer")]//*[text()="Sky"]/parent::button[contains(@class, "iNbTYH")]',
        skyQdealHeading: '//div[contains(@data-content-id, "offer")]/div[contains(@class, "Background")]//*[starts-with(@id, "heading.offer.")]',
        skyQdealPrice: '//div[contains(@data-content-id, "offer")]/div[contains(@class, "Background")]//*[starts-with(@id, "price.offer.")]'
    };


    async dealsLink() {
        await commonActions.clickElement(this.elements.dealsLink);
    }

    async verifyUrlText(expectedUrl) {
        let currentURL = await commonActions.getCurrentUrl();
        await assertion.exactTextMatch(expectedUrl, currentURL);
    }


    async skyQTabClick() {
        await commonActions.clickElement(this.elements.skyQTabLink);
        await commonActions.waitForElement(this.elements.skyQtabSelected);
    }


    async transformToTable(rowName, table) {
        let dealsArray = [];
        let testArray = [];
        let data = await table.raw();
        await data.forEach(function (element) {
            let i = 0;
            dealsArray = element[i];
            testArray.push(dealsArray);
            i++;
        }, this);
        await assertion.notequlto(testArray.length, 0);
        return testArray;
    }


    async takeElements() {
            let headingElements = [];
            let priceElements = [];
            headingElements = await $$(this.elements.skyQdealHeading);
            priceElements = await $$(this.elements.skyQdealPrice);
            let headingElementsLength = headingElements.length;
            let priceElementsLength = priceElements.length;
            await assertion.notequlto(headingElementsLength,0 );
            await assertion.notequlto(priceElementsLength,0 );
            await assertion.exactTextMatch(headingElementsLength, priceElementsLength);
            let resultArray = [];
            for (let i = 0; i <headingElementsLength; i++) {
                let headingText = await $(headingElements[i]).getText();
                let priceText = await $(priceElements[i]).getText();
                let modifiedPriceText = await priceText.match(/[£]\S+\d[\d,\.]*?\b/g);
                let updatedText = headingText+" - "+modifiedPriceText;
                await resultArray.push(updatedText);
            }
        return resultArray;
    }
}

export default new dealsPage();
