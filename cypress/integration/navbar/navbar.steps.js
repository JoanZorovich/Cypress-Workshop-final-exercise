import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Navbar from "../../support/components/Navbar";

const navbar = new Navbar;

//Aqui puedo hacer un get con un request 200

Given('User is on the homepage', () => {
    cy.visit('/');
});

When('User clicks {string} link on the navbar', (linkName) => {
    navbar.clickOnNavbarLink(linkName);
});

Then('User should be able to see a Contact Email input', () => {
    cy.get('#recipient-email').should('be.visible');
});

Then('User should be able to see a video', () => {
    cy.get('.vjs-poster').should('be.visible');
});

Then('User should be able to see a table with product details', () => {
    cy.get('.table-responsive').should('be.visible');
});

Then('User should be able to see an Username input', () => {
    cy.get('#loginusername').should('be.visible');
});

Then('User should be able to see the Sign up button', () => {
    cy.get("button[onclick='register()']").should('be.visible');
});

