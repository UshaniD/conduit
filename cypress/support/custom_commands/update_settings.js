/// <reference types="Cypress"/>

Cypress.Commands.add('updateSettings',(urlInputField, nameInputField, bioInputField, emailInputField, newPasswordInputField,
    updateSettingButton, url, name, bio, email, password) => {
    cy.xpath(urlInputField).clear();
    cy.xpath(urlInputField).type(url);
    cy.xpath(nameInputField).clear();
    cy.xpath(nameInputField).type(name);
    cy.xpath(bioInputField).clear();
    cy.xpath(bioInputField).type(bio);
    cy.xpath(emailInputField).clear();
    cy.xpath(emailInputField).type(email);
    cy.xpath(newPasswordInputField).clear();
    cy.xpath(newPasswordInputField).type(password);
    cy.xpath(updateSettingButton).click();
});