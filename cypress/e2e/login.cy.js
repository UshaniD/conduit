/// <reference types="cypress"/>

import LoginPage from "../pageObjects/loginPage";
import HomePage from "../pageObjects/homePage";

const loginPage = new LoginPage;
const homePage = new HomePage;

describe('Login Feature', () => {
  let url = Cypress.config().baseUrl;
  let loginData;
  let homeData;

  before(() => {
    cy.fixture('login').then((fData) => {
      loginData = fData;
    });
    cy.fixture('home').then((fData) => {
      homeData = fData;
    });
  })

  beforeEach(() => {
    cy.visit(url+'login')
  })

  it('Verify successfull login', () => {
    let email = loginData.credentials.email;
    let password = loginData.credentials.password;
    let title = homeData.title;
    
    loginPage.inputEmail(email);
    loginPage.inputPassword(password);
    loginPage.clickLogin();
    homePage.displayPageTitle(title);  
  })

  it('Verify validation error when invalid email', () => {
    let email = loginData.credentials.invalidEmail;
    let password = loginData.credentials.password;
    let message = loginData.validationMessages.invalidValue;

    loginPage.inputEmail(email);
    loginPage.inputPassword(password);
    loginPage.clickLogin();
    loginPage.displayError(message);
  })

  it('Verify validation error when invalid password', () => {
    let email = loginData.credentials.email;
    let password = loginData.credentials.invalidPassword;
    let message = loginData.validationMessages.invalidValue;

    loginPage.inputEmail(email);
    loginPage.inputPassword(password);
    loginPage.clickLogin();
    loginPage.displayError(message);
  })

  it('Verify validation error when empty email', () => {
    let password = loginData.credentials.password;
    let message = loginData.validationMessages.emptyEmail;
    
    loginPage.inputPassword(password);
    loginPage.clickLogin(); 
    loginPage.displayError(message); 
  })

  it('Verify validation error when empty password', () => {
    let email = loginData.credentials.email;
    let message = loginData.validationMessages.emptyPassword;
    
    loginPage.inputEmail(email);
    loginPage.clickLogin(); 
    loginPage.displayError(message);
  })
})