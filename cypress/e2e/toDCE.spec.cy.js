describe('RaisingNOC', () => {
    it('route_4', () => {
        cy.visit('http://172.16.10.4:8082/jw/web/login')
        cy.wait(10000)
        cy.on('uncaught:exception', (err, runnable) => {
    
          if (err.message.includes('Cannot read properties of undefined')) {
    
            console.log('Application Error Javascript')
            return false;
          }
          return true
        })
        cy.get('[id=j_username]').clear()
        cy.get('[id=j_username]').type('8081');//ca supervisor
        cy.get('[id=j_password]').clear()
        cy.get('[id=j_password]').type('Care@123');
        cy.get('[type=submit]').click()
        cy.wait(10000)
    
        cy.get('#apps')
          .contains('Quality Control')
          .click()
        cy.wait(10000)
        cy.get('.badge').click()
       
        cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
        
        cy.wait(10000)
        
        cy.get('input[value="REPAIRED"]').click()
        cy.wait(2000)
        cy.get('input[name="DceRoutTo_input"]').type("CHF TECH-ASAD A")
        cy.get('#field13_qcRemarksForm_remarks').type("remarked133")
        
        cy.get('#assignmentComplete').click()
    
    
    
      })
     
})