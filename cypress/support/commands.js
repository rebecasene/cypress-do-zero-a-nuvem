Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName')
    .type('Rebeca')

    cy.get('#lastName')
    .type('Sene')
    
    cy.get('#email')
    .type('rebecabsene@gmail.com')

    cy.get('#open-text-area')
    .type('Teste, teste, teste oi.')

    cy.contains('.button', 'Enviar')
    .click()
})
