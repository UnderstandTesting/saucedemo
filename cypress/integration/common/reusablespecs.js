import { Given, Then, Before, When, then } from "cypress-cucumber-preprocessor/steps";

Given(`I open Saucedemo page`, () => {
  cy.visit(Cypress.env('baseURL'));
});

Given(`I login with username {string} and pasword {string}`, (username, password) => {
  cy.login(username,password)
});

Given(`Sort the products by {string}`, sortKey => {
  cy.sort(sortKey)
});

When(`I click checkout`,()=> {
  cy.checkout()
});

Then(`Click Finish on overview page`,()=> {
  cy.finish()
});

Then(`Logout of the application`,()=> {
  cy.logout()
});
