describe('RaisingNOC', () => {
    it('route_3', () => {
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
      cy.get('[id=j_username]').type('88881');//ca supervisor
      cy.get('[id=j_password]').clear()
      cy.get('[id=j_password]').type('Care@321');
      cy.get('[type=submit]').click()
      cy.wait(10000)
  
      cy.get('#apps')
        .contains('Quality Control')
        .click()
      cy.wait(10000)
      cy.get('.badge').click()
     
      cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
      
      cy.wait(10000)
      
      cy.get('input[value="QCI"]').click()
      cy.wait(2000)
      cy.get('input[value="AVOIDABLE"]').click()
      cy.get('#rootCauseRemarks').type('remarks')
      cy.get('#field24_qcRemarksForm_remarks').type('sept first 5 pm')
      cy.get('#assignmentComplete').click()
  })
})