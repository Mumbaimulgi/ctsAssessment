import { Given, When, Then, homePge} from '../../utilities/common/imports.js';

Given(/^I am on the home page in (Live|Staging|Development) Environment$/, async (Env) => {
    // await browser.deleteCookies("sky.com");
    // await browser.deleteCookies();
    await homePge.urls(Env);
    await homePge.handlingCookiesDialogBox();
});






