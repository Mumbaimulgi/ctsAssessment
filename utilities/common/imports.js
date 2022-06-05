import { Given, When, Then } from '@wdio/cucumber-framework';
import homePge from '../../src/pageobjects/homePage';
import LoginPge from '../../src/pageobjects/loginPage';
import dealsPage from '../../src/pageobjects/dealsPage';
import searchPge from '../../src/pageobjects/searchPage';
import commonActions from '../../utilities/common/commonActions';
import assertion from '../../utilities/common/assertions';

export { Given, When, Then, LoginPge, homePge, dealsPage, searchPge, commonActions, assertion};
