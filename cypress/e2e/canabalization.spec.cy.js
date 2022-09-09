describe('RaisingNOC', () => {
    it('initiate', () => {
        cy.visit('http://172.16.10.4:8082/jw/web/login')
        cy.get('#j_username').type('admin')
        cy.get('#j_password').type('Tomcat@123')
        cy.get('button[name="submit"]').click()
        cy.wait(10000)
        cy.get(':nth-child(6) > .app-link').click()
        cy.get('.current-category > .menu-link').click()
        cy.get(':nth-child(9) > .dropdown').click()
        cy.get('#9C6A14AB626341D5B505A6DE1A95C1B3').click()
        cy.get('#grid > div.k-header.k-grid-toolbar > a:nth-child(2)').click()
        cy.get('#gp_dte').type('abc')
        cy.get('#work_center').type('abc')
        cy.get(':nth-child(3) > .k-widget > .k-picker-wrap > .k-select > .k-icon').click()
        cy.get('date_dateview').type('{enter}')
    })

})


