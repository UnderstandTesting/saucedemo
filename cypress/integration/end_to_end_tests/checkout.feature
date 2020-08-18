Feature: End to End test for Checkout process

  Scenario: As a standard_user I want to purchase cheapest & costliest product from the cart
    Given I open Saucedemo page
    And I login with username "standard_user" and pasword "secret_sauce"
    And Sort the products by "Price (high to low)"
    And Add the cheapest & costliest products to basket
    When I click on basket it opens cart page
    And I click checkout
    Then It should ask for information to enter Firstname "Test" Lastname "user " Zipcode "EN6 111" and click continue 
    And Click Finish on overview page 
    And It should take to finish page with message 'THANK YOU FOR YOUR ORDER'
    And Logout of the application


