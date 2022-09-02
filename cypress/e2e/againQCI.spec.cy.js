import 'cypress-iframe';
import { login } from './pages/login';
const myObj = new login();
describe('RaisingNOC', () => {
  it('route_7', () => {
    myObj.navigate();
    myObj.login('8081', 'Care@123');
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#field13_qcRemarksForm_remarks').type("remarked133")
    cy.get('#assignmentComplete').click()
  })
})