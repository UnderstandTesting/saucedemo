import { Given, Then, Before, When, then } from "cypress-cucumber-preprocessor/steps";

Given(`Add the cheapest & costliest products to basket`,() => {
  let cheapestProduct = ':nth-child(1) > .pricebar > .btn_primary'
  let costliestProduct = ':nth-child(6) > .pricebar > .btn_primary'

  cy.addTocart(cheapestProduct)
  cy.addTocart(costliestProduct)
});

When(`I click on basket it opens cart page`,()=> {
  cy.clickBasketToCheckout()
});


Then(`It should ask for information to enter Firstname {string} Lastname {string} Zipcode {string} and click continue`, (Firstname,Lastname,Zipcode)=> {
  
  cy.get('[data-test=firstName]').type(Firstname)
  cy.get('[data-test=lastName]').type(Lastname)
  cy.get('[data-test=postalCode]').type(Zipcode)
  cy.continue()
  cy.log(cy.title())
});


Then(`It should take to finish page with message {string}`,(message)=> {
  cy.get('.complete-header').contains(message)
});
