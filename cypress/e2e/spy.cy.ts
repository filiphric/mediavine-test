it('spies on a open method', { baseUrl: null }, () => {

  cy.visit('http://localhost:3000')

  cy.window().then((win) => {
    cy.spy(win, 'open').as('redirect');
  });

  cy
    .get('button')
    .click();

  cy
    .get('@redirect')
    .should('be.calledWith', 'https://cypress.io', '_blank');

});