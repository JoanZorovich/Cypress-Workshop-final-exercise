var pageLocators = {
    newTodoInput: '.new-todo',
   }

class HomePage {
    newTodoInput() { return cy.get(pageLocators.newTodoInput); }
   } 
export default HomePage;
   