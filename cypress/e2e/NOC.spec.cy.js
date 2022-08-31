import 'cypress-iframe';

describe('RaisingNOC', () => {
  before(function () {
    cy.visit('/')//default url
    cy.wait(10000)
    cy.on('uncaught:exception', (err, runnable) => {

      if (err.message.includes('Cannot read properties of undefined')) {

        console.log('Application Error Javascript')
        return false;
      }
      return true
    })
    cy.get('[id=j_username]').clear()
    cy.get('[id=j_username]').type(Cypress.env('user_id'));
    cy.get('[id=j_password]').clear()
    cy.get('[id=j_password]').type(Cypress.env('user_pass'));
    cy.get('[type=submit]').click()


  })
  it('test_1', () => {
    cy.get(':nth-child(6) > .app-link', { timeout: 30000 }).should('be.visible').click()// open employee module
    cy.get('.current-category > .menu-link').click()
    //
    cy.get('#category-container > li:nth-child(4) > a').click()
    cy.get('#category-container')
      .contains('Non Conformance Reports')
      .click()
    cy.get('#grid > div.k-header.k-grid-toolbar > a:nth-child(1)').click()
    cy.get('input[name="ncType_input"]').clear()
    cy.wait(5000)
    cy.get('input[name="ncType_input"]').type('MAJOR')
    
    cy.wait(2000)
    cy.get('input[name="ncType_input"]').type('{enter}')
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
    // cy.get('.guider_button').contains('OK')
    //.click()
    // cy.get(':nth-child(6) > .app-link', { timeout: 30000 }).should('be.visible').click()
    // cy.get('.username_userlink').click()
    cy.get('.username_userlink')
      .click()
    cy.get('.user-link > .dropdown-menu > :nth-child(2) > a > :nth-child(2)')
      .click()


  })
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