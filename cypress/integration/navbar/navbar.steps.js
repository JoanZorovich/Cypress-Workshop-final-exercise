import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Navbar from "../../support/components/Navbar";

const navbar = new Navbar;


Given('User is on the homepage', () => {
    cy.visit('/');
});

When('User clicks {string} link on the navbar', (linkName) => {
    navbar.clickOnNavbarLink(linkName);
});

/////////////refactor
Then('User should be able to see different products to select', () => {
    cy.request('https://api.demoblaze.com/entries').then((response)=>{
        cy.wrap(response.body.Items).as('responseBody').should('have.length', 9)
       })
});

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

