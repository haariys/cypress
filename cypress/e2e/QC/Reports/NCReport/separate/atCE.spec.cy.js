import { login } from '../../../../pages/login.js';
const myObj = new login();
describe('RaisingNOC', () => {
  it('route_6', () => {
    myObj.navigate();
    myObj.login();
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#field24_qcRemarksForm_remarks').type("remarked133")
    cy.get('#assignmentComplete').click()
  })
})