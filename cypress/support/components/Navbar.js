var pageLocators = {
    navbarLinks: '.nav-link', 
    emailInput: '#recipient-email',
    aboutUsVideo: '.vjs-poster',
    productDetailsTable: '.table-responsive',
    usenameInput: '#loginusername',
    signUpButton: "button[onclick='register()']"
   }

class Navbar {
    navbarLink(text) {return cy.contains(pageLocators.navbarLinks, text);}
    emailInput() {return  cy.get(pageLocators.emailInput);}
    aboutUsVideo() {return  cy.get(pageLocators.aboutUsVideo);}
    productDetailsTable() {return  cy.get(pageLocators.productDetailsTable);}
    usenameInput() {return  cy.get(pageLocators.usenameInput);}
    signUpButton() {return  cy.get(pageLocators.signUpButton);}


    clickOnNavbarLink(text) {
        return this.navbarLink(text).click();
    }
   }

export default Navbar;