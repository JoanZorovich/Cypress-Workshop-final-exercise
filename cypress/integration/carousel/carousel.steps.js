import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";

const home = new HomePage;

//Aqui puedo hacer un get con un request 200

Given('User is on the homepage', () => {
    cy.visit('/');
});

When('User clicks on the next button', () => {
    home.clickCarouselNextButton();
});

Then('User should be able to see the following image', () => {
    home.carouselItems().eq(1).should('be.visible');
});

When('User clicks on the previous button', () => {
    home.clickCarouselPrevButton();
});

Then('User should be able to see the previous image', () => {
    home.carouselItems().last().should('be.visible');
});

When('User sees the different carousel items', () => {
    //cambiar click por otra accion
    home.clickCarouselPrevButton();
});

Then('User should be able to see {int} items', (items) => {
    home.carouselItems().should('have.length', items);
});

