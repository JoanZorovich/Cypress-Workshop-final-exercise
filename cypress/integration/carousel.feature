Feature: Homepage carousel behavior
    As a user 
    I want to see the different images of the carousel in motion and be able to manipulate it
    In order to see information relevant to me.

    Background:
        Given User is on the homepage

    @blaze001 @carousel @regression
    Scenario: change the carousel image by clicking on the next button
        When User clicks on the next button
        Then User should be able to see the following image
    
    @blaze002 @carousel @regression
    Scenario: change the carousel image by clicking on the previous button
        When User clicks on the previous button
        Then User should be able to see the previous image

    @blaze003 @carousel @regression @sanity
    Scenario: number of items in the carousel
        When User sees the different carousel items
        Then User should be able to see 3 items
