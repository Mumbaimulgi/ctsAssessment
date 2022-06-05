import { Given, When, Then, searchPge} from '../../utilities/common/imports.js';

When(/^I search ‘(.*)’ in the search bar$/, async (searchTxt) => {
    await searchPge.search(searchTxt);
});


When(/^I should see an editorial section$/, async () => {
    await searchPge.verifySearchResultContents();
});
























// import {Given, When, Then, LoginPge, homePge, dealsPage} from '../../utilities/common/imports.js';
//
//
// Given(/^I am on the (.*) page$/, async (page) => {
//     await browser.url(`https://www.sky.com/`);
//
// });
//
//
//
// // Then(/^signin$/, async () => {
// //     await browser.maximizeWindow();
// //     console.log("*****************COokies**************************");
// //     console.log(await browser.getAllCookies());
// //     console.log(await browser.deleteAllCookies());
// //     console.log("*****************COokies**************************");
// //     await browser.pause(5000);
// //     if (await $('//*[@title="SP Consent Message"]').isDisplayed() === true) {
// //         console.log("********Entered into IF part********");
// //         const mainIframe = await $('//*[@title="SP Consent Message"]');
// //         await expect(mainIframe).toExist();
// //         await browser.switchToFrame(mainIframe);
// //         console.log("frame switched");
// //         await $("//*[@title='Agree']").click();
// //         console.log("Agree button clicked");
// //         browser.switchToParentFrame();
// //         console.log("switched to parent frame");
// //         await browser.pause(5000);
// //         let signlink = await $('//*[@data-test-id="sign-in-link"]');
// //         await signlink.click();
// //         await browser.pause(10000);
// //
// //         const mainIframe1 = await $('//*[@title="iFrame containing Sky Sign-In application"]');
// //         await expect(mainIframe1).toExist();
// //         await browser.switchToFrame(mainIframe1);
// //         console.log("frame switched");
// //         const usrName = await $('//*[@name="username"]');
// //         await expect(usrName).toExist();
// //         await usrName.setValue("check@mytest.com");
// //         // await browser.keys('tab');
// //         await browser.pause(10000);
// //
// //
// //         let continuebutton1 = await $('//button[@data-testid="AUTHN__SUBMIT_BTN"]');
// //         await continuebutton1.click();
// //         console.log("COntinue button clicked");
// //         browser.switchToParentFrame();
// //         await browser.pause(20000);
// //     }
// //
// // });
// //
// // Then(/^mmmmmm$/, async () => {
// //     await browser.maximizeWindow();
// //     await browser.pause(5000);
// //     if(await $('//*[@title="SP Consent Message"]').isDisplayed() === true) {
// //         console.log("********Entered into IF part********");
// //         const mainIframe = await $('//*[@title="SP Consent Message"]');
// //         await expect(mainIframe).toExist();
// //         await browser.switchToFrame(mainIframe);
// //         console.log("frame switched");
// //         await $("//*[@title='Agree']").click();
// //         console.log("Agree button clicked");
// //         browser.switchToParentFrame();
// //         console.log("switched to parent frame");
// //         await browser.pause(10000);
// //         await $('//*[contains(@data-tracking-label, "primary_deals_link")]').click();
// //         await browser.pause(10000);
// //         let expectedurl = 'https://www.sky.com/deals';
// //         var getcurrenturl = await browser.getUrl();
// //         console.log("Current url :0 " + getcurrenturl);
// //         await expect(expectedurl).toEqual(getcurrenturl);
// //         console.log("*****************COokies**************************");
// //         console.log(await browser.getAllCookies());
// //         console.log(await browser.deleteAllCookies());
// //         console.log("*****************COokies**************************");
// //     }
// //     else
// //     {
// //         console.log("********Entered into else part********");
// //     }
// //
// // });
//
//
//
// Then(/^mmmmmm$/, async () => {
//     await browser.maximizeWindow();
//     await browser.pause(5000);
//     if(await $('//*[@title="SP Consent Message"]').isDisplayed() === true) {
//         console.log("********Entered into IF part********");
//         const mainIframe = await $('//*[@title="SP Consent Message"]');
//         await expect(mainIframe).toExist();
//         await browser.switchToFrame(mainIframe);
//         console.log("frame switched");
//         await $("//*[@title='Agree']").click();
//         console.log("Agree button clicked");
//         browser.switchToParentFrame();
//         console.log("switched to parent frame");
//         await browser.pause(10000);
//         //Search Section
//         const searchIcon = await $('//*[@id="masthead-search-toggle"]');
//         await searchIcon.click();
//         await browser.pause(5000);
//         const searchTray = await $('//*[contains(@class, "search-desktop-active")]');
//         await expect(searchTray).toExist();
//         await browser.pause(5000);
//         const searchtext = await $('//*[contains(@class, "search-desktop-active")]//div[contains(@class, "search-input-wrapper")]//input[@type="search"]');
//         await searchtext.setValue("sky");
//         await browser.pause(10000);
//         // const searchButton = await $('//*[contains(@class, "search-desktop-active")]//div[contains(@class, "search-input-wrapper")]/button[@data-test-id="submit-button"]');
//         // await searchButton.click();
//
//         const searchResultDialogbox = await $('//*[contains(@class, "search-desktop-active")]//div[contains(@id, "search-results-wrapper")]');
//         await expect(searchResultDialogbox).toExist();
//
//         const productPackageSection = await $('//*[contains(@class, "search-desktop-active")]//*[@data-test-id="articles-section"][contains(@aria-label, "links to Products & packages")]');
//         await expect(productPackageSection).toExist();

//     }
//     else
//     {
//         console.log("********Entered into else part********");
//     }
//
// });
//
//
// Then(/^I navigate to Deals$/, async () => {
//     await LoginPage.dealsclick();
//
// });
//
// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });
//
// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });
//
