describe('logout', () => {
    before(function () {
        cy.visit('/')
        cy.wait(10000)
        cy.on('uncaught:exception', (err, runnable) => {
    
          if (err.message.includes('Cannot read properties of undefined')) {
    
            console.log('Application Error Javascript')
            return false;
          }
          return true
        })
        cy.get('[id=j_username]').clear()
        cy.get('[id=j_username]').type(Cypress.env('user_id'));
        cy.get('[id=j_password]').clear()
        cy.get('[id=j_password]').type(Cypress.env('user_pass'));
        cy.get('[type=submit]').click()
      

    })
    it('test_1', () => {
        cy.wait(15000)
        cy.get('.guider_button').contains('OK')
        .click()
        cy.get(':nth-child(6) > .app-link', { timeout: 30000 }).should('be.visible').click()
       // cy.get('.username_userlink').click()
        cy.get('.username_userlink')//select employee list option
        .click()
        cy.get('.user-link > .dropdown-menu > :nth-child(2) > a > :nth-child(2)')
        .click()
        

    })
})
