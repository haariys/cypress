import { login } from '../../pages/login.js';
describe('RaisingNOC', () => {
  it('route_9', () => {
    myObj.navigate();
    myObj.login('8081', 'Care@123');
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#assignmentComplete').click()
  })
})