/// <reference types='cypress'/>

import BasePage from './basePage';

const basePage = new BasePage();

// Elements of the Page
const PROFILE_PICTURE_URL_INPUT = '//input[contains(@ng-model,"image")]';
const USERNAME_INPUT = '//input[contains(@ng-model,"username")]';
const BIO_INPUT = '//textarea[contains(@ng-model,"bio")]';
const EMAIL_INPUT = '//input[contains(@ng-model,"email")]';
const NEW_PASSWORD_INPUT = '//input[contains(@ng-model,"password")]';
const UPDATE_SETTINGS_BUTTON = '//button[contains(text(),"Update Settings")]';
const LOGOUT_BUTTON = '//button[contains(text(),"logout")]';

export default class settingsPage{
    getLogoutButton = () => cy.xpath(LOGOUT_BUTTON);

    updateSettings = () => {
        cy.fixture('settings').then((settingsData) => {
            let url = settingsData.profilePictureUrl;
            let username = settingsData.username;
            let bio = settingsData.bio;
            let email = settingsData.email;
            let password = settingsData.newPassword;
            cy.updateSettings(PROFILE_PICTURE_URL_INPUT, USERNAME_INPUT, BIO_INPUT, EMAIL_INPUT, NEW_PASSWORD_INPUT,
                UPDATE_SETTINGS_BUTTON, url, username, bio, email, password);
        });
    };

    clickLogout = () => {
        this.getLogoutButton().should('be.visible');
        this.getLogoutButton().click();
    };
}