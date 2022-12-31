var pageLocators = {
    carouselNextButton: '.carousel-control-next-icon',
    carouselPreviousButton: '.carousel-control-prev-icon',
    carouselItems: '.carousel-item',
    categoryLinks: '.list-group-item',
    productsList: 'div.card',
   }

class HomePage {
    carouselNextButton() { return cy.get(pageLocators.carouselNextButton); }
    carouselPreviousButton() { return cy.get(pageLocators.carouselPreviousButton); }
    carouselItems() { return cy.get(pageLocators.carouselItems, { timeout: 10000 }); }
    categoryLinks(text) { return cy.contains(pageLocators.categoryLinks, text); }
    productsList() { return cy.get(pageLocators.productsList); }

    
    clickCarouselNextButton() {
        return this.carouselNextButton().click();
      }
    
    clickCarouselPrevButton() {
        return this.carouselPreviousButton().click();
      }

    clickOnCategoryLink(text) {
        return this.categoryLinks(text).click();
    }
    
    getRandomProductLink() {
      let min = Math.ceil(1);
      let max = Math.floor(9);
  
      const index = Math.floor(Math.random() * (max - min + 1) + min);
      return cy.get(`#tbodyid > div:nth-of-type(${index}) .hrefch`);
    }

    clickOnRandomProduct() {
      return this.getRandomProductLink().click();
    }

   } 
export default HomePage;
   