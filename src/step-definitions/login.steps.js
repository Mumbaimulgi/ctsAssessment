import {Given, When, Then, LoginPge, homePge, dealsPage} from '../../utilities/common/imports.js';

Then(/^I try to sign in with invalid credentials$/, async () => {

    await LoginPge.signInLink();
    await LoginPge.username("test@test.com");
});