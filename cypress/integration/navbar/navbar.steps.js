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

// Then('User should be able to see the Categories section', () => {
//     navbar.emailInput().should('be.visible');
// });

Then('User should be able to see a Contact Email input', () => {
    navbar.emailInput().should('be.visible');
});

Then('User should be able to see a video', () => {
    navbar.aboutUsVideo().should('be.visible');
});

Then('User should be able to see a table with product details', () => {
    navbar.productDetailsTable().should('be.visible');
});

Then('User should be able to see an Username input', () => {
    navbar.usenameInput().should('be.visible');
});

Then('User should be able to see the Sign up button', () => {
    navbar.signUpButton().should('be.visible');
});

