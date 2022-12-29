Feature: Shopping behavior
    As a user  
    I want to add or remove products from different categories to my cart
    So that I can buy them

    Background:
        Given User is on the homepage

    Scenario: Laptops category shows differents products
        When User clicks on the "Laptops" category
        Then User should be able to see differents products
        

