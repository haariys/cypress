import { login } from '../../pages/login.js';
const myObj = new login();
describe('RaisingNOC', () => {
  it('route_8', () => {
    myObj.navigate();
    myObj.login('8082', 'Care@321');
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('input[value="CLOSED"]').click()
    cy.get('#assignmentComplete').click()
  })
})