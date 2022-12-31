var pageLocators = {
    shoppingProducts: '.success',
    deleteButton: "td:nth-of-type(4) > [href='#']",
   }

class CartPage {
    shoppingProducts() { return cy.get(pageLocators.shoppingProducts); }
    deleteButton() { return cy.get(pageLocators.deleteButton); }

    clickDeleteButton() {
        return this.deleteButton().click();
      }
   } 
export default CartPage;