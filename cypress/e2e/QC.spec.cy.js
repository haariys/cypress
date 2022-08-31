describe('demo', () => {
it('route_1', () => {
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
cy.get('[id=j_username]').type('18775');
cy.get('[id=j_password]').clear()
cy.get('[id=j_password]').type('Care@123');
cy.get('[type=submit]').click()
cy.wait(10000)

cy.get('#apps')
.contains('Quality Control')
.click()

cy.get('.inbox-notification > .btn > img').click()
cy.get('.dropdown-menu > :nth-child(3) > a').click()
cy.wait(10000)
cy.get('#field24_qcRemarksForm_remarks').type('DDQ Remarks entered')
cy.get('#assignmentComplete').click()
cy.wait(2000)
cy.get('#fac_name').click()

})
})