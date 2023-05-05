/// <reference types="cypress"/>

import BasePage from "./basePage";

const basePage = new BasePage;

// Elements of the Page
const SETTINGS_LINK = '//a[contains(@href, "settings")]';
const APP_NAME_HEADING = '//h1[contains(@ng-bind,"appName")]';

export default class homePage{
    getSettingsLink = () => cy.xpath(SETTINGS_LINK);
    getAppNameHeading = () => cy.xpath(APP_NAME_HEADING);

    displayPageTitle = (TITLE) => {
        basePage.getPageTitle().should('include', TITLE);
        basePage.logInfo("Home page title is displaying");
    }

    displayAppNameHeading = () => {
        this.getAppNameHeading().should('be.visible');
        basePage.logInfo("App name heading is displaying");
    }

    clickSettingsLink = () => {
        this.getSettingsLink().should('be.visible');
        this.getSettingsLink().click();
    };
}