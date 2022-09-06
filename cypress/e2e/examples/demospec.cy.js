describe('empty spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('google'))
    cy.fixture('example.json').then((data) => {
      for (var index in data) {
        cy.get('.gLFyf').type(data[index].color)
        cy.get('.gLFyf').clear()


      }
    })
    //cy.get('.gLFyf').type("hello brother")
  })
})