describe('leave', () => {
    it('t1', () => {
        cy.visit('http://10.0.0.42:8082/jw/web/login')
        cy.get('#j_username').type('8081')
        cy.get('#j_password').type('Care@123')
        cy.get('button[name="submit"]').click()
        cy.visit('http://10.0.0.42:8082/jw/web/userview/HRM_v1/hrmUserview/_/leaveAPPL')
        cy.get(':nth-child(2) > :nth-child(2) > .k-widget > .k-picker-wrap > .k-select').click()
        cy.get('.k-footer > .k-link').click()
        cy.get('#fromDate').type('16-SEP-22', { force: true })
        cy.get('#fromDate').blur()
        cy.get('#toDate').type('16-SEP-22', { force: true })
        cy.get('input[name="leaveType_input"]').type('CASUAL LEAVE', { force: true })
        cy.get('input[name="leaveType_input"]').blur()
        cy.get('input[name="leaveCategory_input"]').type('CASUAL LEAVES', { force: true })
        cy.get('input[name="leaveCategory_input"]').blur()
        cy.get('input[name="leaveReason_input"]').type('SICK', { force: true })
        cy.get('input[name="leaveReason_input"]').blur()
        cy.get('#leaveService').click()
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of null')) {
                console.log('Application Error Javascript')
                return false;
            }
            return true
        })
        cy.get('input[id="certificate"]').click()
        cy.get('input[name="forwardedTo_input"]').type('SECTION INCHARGE')
        cy.get('input[name="forwardedTo_input"]').blur()
        cy.get('#assignmentComplete').click()
    })
    cy.get('.iziToast-message').should('eq', 'Leave type and category value required')
  })
})