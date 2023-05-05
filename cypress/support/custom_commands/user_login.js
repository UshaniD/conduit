/// <reference types="Cypress"/>

Cypress.Commands.add('login',(userInputField, passwordInputField, loginButton, username, password) => {
    cy.xpath(userInputField).clear();
    cy.xpath(userInputField).type(username);
    cy.xpath(passwordInputField).clear();
    cy.xpath(passwordInputField).type(password);
    cy.xpath(loginButton).click();
});