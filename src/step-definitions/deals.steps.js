import { Given, When, Then, LoginPge, homePge, dealsPage} from '../../utilities/common/imports.js';
import {assertion} from "../../utilities/common/imports";

When(/^I navigate to 'Deals'$/, async () => {
    await dealsPage.dealsLink();
});


When(/^the user should be on the "(.*)" page$/, async (url) => {
    await dealsPage.verifyUrlText(url);
    });



Then(/^I see a list of deals with a "([^"]*)" to it:$/, async(rowName, dataTable) => {
    await dealsPage.dealsLink();
    await  dealsPage.skyQTabClick();
    let myArray = (await dealsPage.transformToTable(rowName, dataTable)).slice(1);
    let actualArray = await dealsPage.takeElements();
    for(let i = 0; i<3; i++)
    {
        await assertion.exactTextMatch(actualArray[i], myArray[i]);
    }
});

