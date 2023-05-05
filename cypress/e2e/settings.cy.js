/// <reference types="cypress"/>

import LoginPage from '../pageObjects/loginPage';
import SettingsPage from '../pageObjects/settingsPage';
import ProfilePage from '../pageObjects/profilePage';
import HomePage  from '../pageObjects/homePage';

const loginPage = new LoginPage();
const settingsPage = new SettingsPage();
const profilePage = new ProfilePage();
const homePage = new HomePage();

describe('Settings Feature', () => {
  let url = Cypress.config().baseUrl;
  let settingsData;

  before(() => {
    cy.fixture('settings').then((fData) => {
      settingsData = fData;
    });
  })

  beforeEach(() => {
    cy.visit(url+'login');
    loginPage.login();
    homePage.clickSettingsLink();
  })

  it('Verify successfully update settings', () => {
    let username = settingsData.username;
    settingsPage.updateSettings();
    profilePage.displayUsername(username);
  })

  it('Verify successfully logout', () => {
    settingsPage.clickLogout();
    homePage.displayAppNameHeading();
  })
})