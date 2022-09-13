Cypress.Commands.add('login', () => {

  cy.session('login', () => {

    cy.visit('/')

    cy.get('[placeholder="email"]').type('filip@filiphric.sk')
    cy.get('[placeholder="password"]').type('99-7ue2V.KUf*EcsA-!g')
    cy.get('[type=submit]').click()

    cy.get('.sc-fvNpTx').should('be.visible')
    cy.get('.sc-fvNpTx', { timeout: 20000 }).should('not.exist')

  })

})

it('test', () => {

  cy.login()

  cy.visit('/sites')

  cy.get('.sc-fvNpTx').should('be.visible')
  cy.get('.sc-fvNpTx', { timeout: 20000 }).should('not.exist')

});
