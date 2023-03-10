Feature: Navbar behavior
    As a user 
    I want to access the different pages through the navbar
    So that I have access to the information I want easily

    Background:
        Given User is on the homepage
    
     
    @blaze004 @navbar @regression @smoke
    Scenario: clicking on Home a page is correctly displayed
        When User clicks "Home" link on the navbar
        Then User should be able to see different products to select

    @blaze005 @navbar @regression @smoke
    Scenario: clicking on Contact a modal is displayed
        When User clicks "Contact" link on the navbar
        Then User should be able to see a Contact Email input
    
    @blaze006 @navbar @regression
    Scenario: clicking on About us a light box is displayed
        When User clicks "About us" link on the navbar
        Then User should be able to see a video

    @blaze007 @navbar @regression @smoke
    Scenario: clicking on Cart the shopping cart page is displayed
        When User clicks "Cart" link on the navbar
        Then User should be able to see a table with product details

    @blaze008 @navbar @regression
    Scenario: clicking on Log in a modal is displayed
        When User clicks "Log in" link on the navbar
        Then User should be able to see an Username input
    
    @blaze009 @navbar @regression
    Scenario: clicking on Sign up a modal is displayed
        When User clicks "Sign up" link on the navbar
        Then User should be able to see the Sign up button
