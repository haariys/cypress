describe('leave', () => {
  it('T-1', () => {
    cy.visit('http://10.0.0.42:8082/jw/web/login')
    cy.get('#j_username').type('8081')
    cy.get('#j_password').type('Care@123')
    cy.get('button[name="submit"]').click()
    cy.visit('http://10.0.0.42:8082/jw/web/userview/HRM_v1/hrmUserview/_/leaveAPPL')
    cy.get('#fromDate').type('16-SEP-22', { force: true })
    cy.get('#fromDate').blur()
    cy.wait(5000)
    cy.get('#toDate').type('16-SEP-22', { force: true })
    cy.wait(10000)
    cy.get('#leaveService').click()
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Cannot read properties of null')) {
        console.log('Application Error Javascript')
        return false;
      }
      return true
    })
    cy.get('.iziToast-message').should('eq', 'Leave type and category value required')
  })
})