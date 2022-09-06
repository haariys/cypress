import { login } from '../../pages/login.js';
const myObj = new login();
describe('demo', () => {
  it('route_1', () => {
    myObj.navigate();
    myObj.login('18775', 'Care@123');
    cy.wait(10000)
    myObj.selectQC();
    cy.get('.inbox-notification > .btn > img').click()
    cy.get('.dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#field24_qcRemarksForm_remarks').type('DDQ Remarks entered')
    cy.get('#assignmentComplete').click()
    cy.wait(2000)
    cy.get('#fac_name').click()

  })
})