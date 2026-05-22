describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  
})
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName')
    .type('Rebeca')

    cy.get('#lastName')
    .type('Sene')
    
    cy.get('#email')
    .type('rebecabsene@gmail.com')

    cy.get('#open-text-area')
    .type('Teste, teste, teste oi.')

    cy.get('.button')
    .click()

    cy.get('.success')
    .should('be.visible')
  })


  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName')
    .type('Rebeca')

    cy.get('#lastName')
    .type('Sene')
    
    cy.get('#email')
    .type('rebecarebeca.com')

    cy.get('#open-text-area')
    .type('Teste, teste, teste oi.')

    cy.get('.button')
    .click()

    cy.get('.error')
    .should('be.visible')

})

  it('testa se campo do telefone fica vazio ao digitar letras', () => {
    cy.get('#firstName')
    .type('Rebeca')

    cy.get('#lastName')
    .type('Sene')
    
    cy.get('#email')
    .type('rebecabsene@gmail.com')

    cy.get('#phone')
    .type('testetest')
    .should('have.value', '')

    cy.get('#open-text-area')
    .type('Teste, teste, teste oi.')

    cy.get('.button')
    .click()

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName')
    .type('Rebeca')

    cy.get('#lastName')
    .type('Sene')
    
    cy.get('#email')
    .type('rebecabsene@gmail.com')

    cy.get('#phone-checkbox')
    .click()

    cy.get('#phone')
    .type(' ')

    cy.get('#open-text-area')
    .type('Teste, teste, teste oi.')

    cy.get('.button')
    .click()

    cy.get('.error')
    .should('be.visible')

  })
})