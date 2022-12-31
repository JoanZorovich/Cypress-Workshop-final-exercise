var pageLocators = {
    addCartButton: '.btn-success',
   }

class ProductPage {
    addCartButton() { return cy.get(pageLocators.addCartButton); }

    
    clickAddCartButton() {
        return this.addCartButton().click();
      }

   } 
export default ProductPage;