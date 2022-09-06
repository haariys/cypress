import { login } from '../../pages/login.js';
const myObj = new login();
describe('RaisingNOC', () => {
  it('route_3', () => {
    myObj.navigate();
    myObj.login('88881', 'Care@321')
    cy.wait(10000)
    myObj.selectQC();
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