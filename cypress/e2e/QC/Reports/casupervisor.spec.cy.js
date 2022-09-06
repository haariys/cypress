import { login } from '../../pages/login.js';
const myObj = new login(); describe('demo', () => {
  it('route_2', () => {
    myObj.navigate();
    myObj.login('1797', 'Care@123');
    cy.wait(10000)
    myObj.selectQC();
    cy.get('.inbox-notification > .btn > img').click()
    cy.get('.dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#correctiveActionDetails').type('CA Supervisor Remarks entered @ 31/8/22 4.55')
    cy.get('input[name="workers_input"]').type('SUPV-NOMAN GHAFFAR-5556-PAINTER')
    cy.wait(2000)
    cy.get('#fac_name').click()
  })
})