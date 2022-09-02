import 'cypress-iframe';
import { login } from './pages/login';
let data;
const myObj = new login();
describe('RaisingNOC', () => {
  before(function () {
    cy.fixture('NCReport').then((testData) => {
      data = testData;
    });
     })
  it('test_1', () => {
    myObj.navigate();
    myObj.login(data[0].user_name, data[0].password);
    cy.wait(15000)
    myObj.selectQC();
    cy.get('.current-category > .menu-link').click()
    cy.get('#category-container')
      .contains('Reports')
      .click()
    cy.get('#category-container')
      .contains('Non Conformance Reports')
      .click()
    cy.get('#grid > div.k-header.k-grid-toolbar > a:nth-child(1)').click()
    cy.wait(5000)
    cy.get('input[name="ncType_input"]').clear()
    cy.wait(2000)
    cy.get('input[name="ncType_input"]').type(' MAJOR{enter}')
    cy.wait(2000)
    cy.get('input[name="gpDte_hrmfrkey_input"]').type('JF-17 MRO')
    cy.get('input[name="gpDte_hrmfrkey_input"]').blur()
    cy.wait(2000)
    cy.get('input[name="shopSectionWc_hrmfrkey_input"]').type('QUALITY')
    cy.get('input[name="shopSectionWc_hrmfrkey_input"]').blur()
    cy.get('input[name="bayDock_hrmfrkey_input"]').clear()
    cy.get('input[name="bayDock_hrmfrkey_input"]').type('DR CELL')
    cy.get('input[name="system_type_input"]').type('AIRCRAFT')
    cy.get('input[name="routTo_input"]').type('FLT LT-OBAID OIC')
    cy.get('input[name="briefedTo_input"]').type('FLT LT-HARIS JAVED-17192-ENGG')
    cy.get('input[name="system_logfrkey_input"]').type('JF-17')
    cy.get('input[name="serialNo_logfrkey_input"]').type('03-333')
    cy.get('input[name="partNumber_logfrkey_input"]').type('C-SPANNER SPL')
    cy.wait(2000)
    cy.get('input[name="partNumber_logfrkey_input"]').type('{enter}')
    cy.get('input[name="partNumber_logfrkey_input"]').blur()
    cy.get('input[name="partSrNo"]').type('1213')
    cy.wait(5000)
    cy.get('input[name="refDoc"]').type('1213112a')
    cy.get('.k-content')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body')
        cy.wrap($body)
          .type('fake@email.com')
      })
    cy.get('button[name="assignmentComplete"]').click()
  })
  it('logout', () => {
    cy.wait(15000)
    cy.get('.username_userlink')
      .click()
    cy.get('.user-link > .dropdown-menu > :nth-child(2) > a > :nth-child(2)')
      .click()
  })
  it('route_1', () => {
    myObj.navigate();
    cy.wait(30000)
    myObj.login(data[1].user_name, data[1].password);
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
  it('route_2', () => {
    myObj.navigate();
    myObj.login(data[2].user_name, data[2].password);
    cy.wait(10000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#correctiveActionDetails').type('CA Supervisor Remarks entered @ 31/8/22 4.55')
    cy.get('input[name="workers_input"]').type('SUPV-NOMAN GHAFFAR-5556-PAINTER')
    cy.get('input[name="workers_input"]').blur()
    cy.get('#assignmentComplete').click()
    cy.wait(5000)
    cy.get('#fac_name').click()
  })
  it('route_3', () => {
    myObj.navigate();
    myObj.login(data[3].user_name, data[3].password);
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
  it('route_4', () => {
    myObj.navigate();
    myObj.login(data[0].user_name, data[0].password);
    cy.wait(10000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('input[value="REPAIRED"]').click()
    cy.wait(2000)
    cy.get('input[name="DceRoutTo_input"]').type("CHF TECH-ASAD A")
    cy.get('#field13_qcRemarksForm_remarks').type("remarked133")
    cy.get('#assignmentComplete').click()
  })
  it('route_5', () => {
    myObj.navigate();
    myObj.login(data[6].user_name, data[6].password);
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#field24_qcRemarksForm_remarks').type("remarked133")
    cy.get('#assignmentComplete').click()
  })
  it('route_6', () => {
    myObj.navigate();
    myObj.login(data[5].user_name, data[5].password);
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#field24_qcRemarksForm_remarks').type("remarked133")
    cy.get('#assignmentComplete').click()
  })
  it('route_7', () => {
    myObj.navigate();
    myObj.login(data[0].user_name, data[0].password);
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#field13_qcRemarksForm_remarks').type("remarked133")
    cy.get('#assignmentComplete').click()
  })
  it('route_8', () => {
    myObj.navigate();
    myObj.login(data[1].user_name, data[1].password);
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('input[value="CLOSED"]').click()
    cy.get('#assignmentComplete').click()
  })
  it('route_9', () => {
    myObj.navigate();
    myObj.login(data[0].user_name, data[0].password);
    cy.wait(20000)
    myObj.selectQC();
    cy.wait(10000)
    cy.get('.badge').click()
    cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    cy.wait(10000)
    cy.get('#assignmentComplete').click()
  })
})