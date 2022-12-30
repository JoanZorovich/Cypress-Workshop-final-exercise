var pageLocators = {
    navbarLinks: '.nav-link',
    contactModal: '.modal-content',
   }

class Navbar {
    navbarLink(text) {return cy.contains(pageLocators.navbarLinks, text);}
    contactModal() {return cy.get(pageLocators.navbarLinks);}


    clickOnNavbarLink(text) {
        return this.navbarLink(text).click();
    }
    // getModalTitle(){

    // }
   }

export default Navbar;