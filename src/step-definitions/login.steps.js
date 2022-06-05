import {Given, When, Then, LoginPge} from '../../utilities/common/imports.js';

Then(/^I try to sign in with invalid credentials - "(.*)"$/, async (email) => {

    await LoginPge.signInLink();
    await LoginPge.username(email);
    await LoginPge.verifyMessageBox();
});