import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Navbar from "../../support/components/Navbar";
import HomePage from "../../support/pages/HomePage";
import ProductPage from "../../support/pages/ProductPage";
import CartPage from "../../support/pages/CartPage";

const navbar = new Navbar;
const home = new HomePage;
const product = new ProductPage;
const cart = new CartPage;



Given('User is on the homepage', () => {
    cy.visit('/');
});

When('User clicks on the {string} category', (linkName) => {
    home.clickOnCategoryLink(linkName);
});

Then('User should be able to see differents products', () => {
    home.productsList().should('have.length', 6);
});

Given('User is on the random product detail page', () => {
    home.clickOnRandomProduct();
});

When('User clicks on the add to cart button', () => {
    product.clickAddCartButton();
});


Then('User should be able to see 1 product in the shopping {string}', (linkName) => {
    navbar.clickOnNavbarLink(linkName)
    cart.shoppingProducts().should('have.length.at.least', 1);
});

Given('User has a product in his shopping {string}', (linkName) => {
    home.clickOnRandomProduct();
    product.clickAddCartButton();
    navbar.clickOnNavbarLink(linkName);
});

When('User clicks on delete button', () => {
    cart.clickDeleteButton();
});


Then('User should see his shopping cart empty', () => {
    cart.shoppingProducts().should('not.exist');
});


/////////////////////////////////////////////////////

When('User clicks on Place Order', () => {
    cy.get('.btn-success').click();
});

And('Fills out the form', () => {
    //this can be done with a post
});

And('Clicks on purchase button', () => {
    cy.get("[onclick='purchaseOrder()']").click();
});

Then('User should be able to see a successful purchase message', () => {
    cy.get('.sweet-alert').should('be.visible');
});


