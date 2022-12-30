Feature: Homepage carousel behavior
    As a user 
    I want to see the different images of the carousel in motion and be able to manipulate it
    In order to see information relevant to me.

    Background:
        Given User is on the homepage

    Scenario: change the carousel image by clicking on the next button
        When User clicks on the next button
        Then User should be able to see the following image
    
    Scenario: change the carousel image by clicking on the previous button
        When User clicks on the previous button
        Then User should be able to see the previous image

    Scenario: number of items in the carousel
        When User sees the different carousel items
        Then User should be able to see 3 items

    # Scenario: stop the carousel by hovering the mouse over an image
    #     When User hovers the mouse over  a carousel image
    #     Then User should be able to see one image in carousel

    # Scenario: carousel images change automatically
    #     When User sees the carousel displayed
    #     Then User should be able to see different images moving automatically
