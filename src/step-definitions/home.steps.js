import { Given, When, Then, homePge} from '../../utilities/common/imports.js';

Given(/^I am on the home page in (Live|Staging|Development) Environment$/, async (Env) => {
    // await browser.deleteAllCookies();
    await homePge.urls(Env);
    await homePge.handlingCookiesDialogBox();
    await homePge.verifyCurrentUrl();
});






