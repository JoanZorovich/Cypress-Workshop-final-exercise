var pageLocators = {
    carouselNextButton: '.carousel-control-next-icon',
    carouselPreviousButton: '.carousel-control-prev-icon',
    carouselItems: '.carousel-item',
   }

class HomePage {
    carouselNextButton() { return cy.get(pageLocators.carouselNextButton); }
    carouselPreviousButton() { return cy.get(pageLocators.carouselPreviousButton); }
    carouselItems() { return cy.get(pageLocators.carouselItems, { timeout: 10000 }); }


    
    clickCarouselNextButton() {
        return this.carouselNextButton().click();
      }
    
    clickCarouselPrevButton() {
        return this.carouselPreviousButton().click();
      }
    

   } 
export default HomePage;
   