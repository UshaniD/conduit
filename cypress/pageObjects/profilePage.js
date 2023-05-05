/// <reference types="cypress"/>

import BasePage from "./basePage";

const basePage = new BasePage;

// Elements of the Page
const USERNAME = '//h4[contains(@ng-bind,"username")]';

export default class profilePage{
    getUsername = () => cy.xpath(USERNAME);

    displayUsername = (USERNAME) => {
        this.getUsername().should('have.text', USERNAME);
        basePage.logInfo("Username is displaying");
    }
}