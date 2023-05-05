/// <reference types="cypress"/>

export default class basePage{
    getPageTitle() {
        return cy.title();
    }

    pause(ms){
        cy.wait(ms);
    }

    logInfo(message){
        cy.log(message);
    }
}