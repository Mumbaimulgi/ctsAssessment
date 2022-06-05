import {assertion, commonActions} from "../../utilities/common/imports";
class searchPage {

    elements = {
        searchLink :  '//*[@id="masthead-search-toggle"]',
        searchTray : '//*[contains(@class, "search-desktop-active")]',
        searchField: '//*[contains(@class, "search-desktop-active")]//div[contains(@class, "search-input-wrapper")]//input[@type="search"]',
        searchResultdialogBox: '//*[contains(@class, "search-desktop-active")]//div[contains(@id, "search-results-wrapper")]',
        searchResultEditorialSection: '//*[contains(@class, "search-desktop-active")]//div[contains(@id, "search-results-wrapper")]//*[@data-test-id="editorial-section"]',
        searchResultProductSection: '//*[contains(@class, "search-desktop-active")]//*[@data-test-id="articles-section"][contains(@aria-label, "links to Products & packages")]',
        searchResultHelpArticleSection: '//*[contains(@class, "search-desktop-active")]//*[@data-test-id="articles-section"][contains(@aria-label, "links to Help articles & guides")]'
    };

    async search(searchText)
    {
        await commonActions.waitForElement(this.elements.searchLink);
        await commonActions.clickElement(this.elements.searchLink);
        await commonActions.waitForElement(this.elements.searchTray);
        await commonActions.fieldEntry(this.elements.searchField, searchText);
    }

    async verifySearchResultContents()
    {
        await assertion.checkElementPresence(this.elements.searchResultEditorialSection);
        await assertion.checkElementPresence(this.elements.searchResultProductSection);
        await assertion.checkElementPresence(this.elements.searchResultHelpArticleSection);
    }

}

export default new searchPage();
