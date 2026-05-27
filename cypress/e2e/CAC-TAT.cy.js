describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  
})
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const TextLongo = Cypress._.repeat('Teste', 20)

    cy.get('#firstName')
    .should('be.visible')
    .type('Rebeca')

    cy.get('#lastName')
    .should('be.visible')
    .type('Sene')
    
    cy.get('#email')
    .should('be.visible')
    .type('rebecabsene@gmail.com')

    cy.get('#open-text-area')
    .should('be.visible')
    .type(TextLongo, {delay: 0})

    cy.contains('.button', 'Enviar')
    .should('be.visible')
    .click()

    cy.get('.success')
    .should('be.visible')
  })


  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName')
    .should('be.visible')
    .type('Rebeca')

    cy.get('#lastName')
    .should('be.visible')
    .type('Sene')
    
    cy.get('#email')
    .should('be.visible')
    .type('rebecarebeca.com')

    cy.get('#open-text-area')
    .should('be.visible')
    .type('Teste, teste, teste oi.')

    cy.contains('.button', 'Enviar')
    .should('be.visible')
    .click()

    cy.get('.error')
    .should('be.visible')

})

  it('testa se campo do telefone fica vazio ao digitar letras', () => {
    cy.get('#firstName')
    .should('be.visible')
    .type('Rebeca')

    cy.get('#lastName')
    .should('be.visible')
    .type('Sene')
    
    cy.get('#email')
    .should('be.visible')
    .type('rebecabsene@gmail.com')

    cy.get('#phone')
    .should('be.visible')
    .type('testetest')
    .should('have.value', '')

    cy.get('#open-text-area')
    .should('be.visible')
    .type('Teste, teste, teste oi.')

    cy.contains('.button', 'Enviar')
    .should('be.visible')
    .click()

  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName')
    .should('be.visible')
    .type('Rebeca')

    cy.get('#lastName')
    .should('be.visible')
    .type('Sene')
    
    cy.get('#email')
    .should('be.visible')
    .type('rebecabsene@gmail.com')

    cy.get('#phone-checkbox')
    .should('be.visible')
    .click()

    cy.get('#phone')
    .should('be.visible')
    .type(' ')

    cy.get('#open-text-area')
    .should('be.visible')
    .type('Teste, teste, teste oi.')

    cy.contains('.button', 'Enviar')
    .should('be.visible')
    .click()

    cy.get('.error')
    .should('be.visible')

  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
    .should('be.visible')
    .type('Rebeca')
    .should('have.value', 'Rebeca')
    .clear()
    .should('have.value', '')

    cy.get('#lastName')
    .should('be.visible')
    .type('Sene')
    .should('have.value', 'Sene')
    .clear()
    .should('have.value', '')

    cy.get('#email')
    .should('be.visible')
    .type('rebecabsene@gmail.com')
    .should('have.value', 'rebecabsene@gmail.com')
    .clear()
    .should('have.value', '')

    cy.get('#phone')
    .should('be.visible')
    .type('15998380123')
    .should('have.value', '15998380123')
    .clear()
    .should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('.button', 'Enviar')
    .should('be.visible')
    .click()

    cy.get('.error')
    .should('be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success')
    .should('be.visible')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')

  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product')
    .select(1)
    .should('have.value', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[value="feedback"]')
    .check()
    .should('be.checked')
  })

  it.only('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
    .each(typeOfService => {
      cy.wrap(typeOfService)
        .check()
        .should('be.checked')

    })
  })
})