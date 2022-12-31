Feature: Shopping behavior
    As a user  
    I want to add or remove products from different categories to my cart
    So that I can buy them

    Background:
     Given User is on the homepage

    @blaze010 @shopping @regression
    Scenario: Laptops category shows differents products
        When User clicks on the "Laptops" category
        Then User should be able to see differents products

    @blaze011 @shopping @regression @smoke
    Scenario: add a product to the shopping cart successfully
        Given User is on the random product detail page
        When User clicks on the add to cart button
        Then User should be able to see 1 product in the shopping "Cart"

    @blaze012 @shopping @regression
    Scenario: remove a product from the shopping cart 
        Given User has a product in his shopping "Cart"
        When User clicks on delete button
        Then User should see his shopping cart empty

    @blaze013 @shopping @regression @smoke
    Scenario: product purchase successful
        Given User has a product in his shopping "Cart"
        When User clicks on Place Order
        And Fills out the form
        And Clicks on purchase button
        Then User should be able to see a successful purchase message

