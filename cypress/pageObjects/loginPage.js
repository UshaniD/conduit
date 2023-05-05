/// <reference types="cypress"/>

import BasePage from './basePage';

const basePage = new BasePage;

// Elements of the Page
const EMAIL_INPUT = '//input[@placeholder="Email"]';
const PASSWORD_INPUT = '//input[@placeholder="Password"]';
const SIGNIN_BUTTON = '//button[text()="Sign in"]';
const ERROR_MESSAGES = 'div.ng-scope > .ng-binding';

export default class loginPage{
    getEmailInputField = () => cy.xpath(EMAIL_INPUT);
    getPasswordInputField = () => cy.xpath(PASSWORD_INPUT);
    getSigninButton = () => cy.xpath(SIGNIN_BUTTON);
    getErrorMessages = () => cy.get(ERROR_MESSAGES);

    inputEmail = (EMAIL) => {
        this.getEmailInputField().should('be.visible');
        this.getEmailInputField().clear();
        this.getEmailInputField().type(EMAIL);
    };

    inputPassword = (PASSWORD) => {
        this.getPasswordInputField().should('be.visible');
        this.getPasswordInputField().clear();
        this.getPasswordInputField().type(PASSWORD);
    };

    clickLogin = () => {
        this.getSigninButton().should('be.visible');
        this.getSigninButton().click();
    };

    displayError = (MESSAGE) => {
        this.getErrorMessages().should('contain.text', MESSAGE);
        basePage.logInfo("Validation error message is displaying");
    }

    login = () => {
        cy.fixture('login').then((loginData) => {
            let email = loginData.credentials.email;
            let password = loginData.credentials.password;
            cy.login(EMAIL_INPUT, PASSWORD_INPUT, SIGNIN_BUTTON, email, password);
        });
      };

}