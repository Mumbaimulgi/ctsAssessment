import {commonActions } from '../../utilities/common/imports.js';
module.exports = {

    async exactTextMatch(expectedMessage, ActualMessage)
    {
        await expect(ActualMessage).toEqual(expectedMessage)
    },

    async checkElementPresence(Element)
    {
        await expect(commonActions.makeElement(Element)).toExist();
    },

    async checkElementisDisplayed(Element)
    {
        await expect(commonActions.makeElement(Element)).toBeDisplayed();
    },

    async tobeClickable(Element)
    {
        await expect(commonActions.makeElement(Element)).toBeClickable();
    },

    async notequlto(ActualMessage, expectedMessage)
    {
        await expect(ActualMessage).not.toEqual(expectedMessage);
    }


};

