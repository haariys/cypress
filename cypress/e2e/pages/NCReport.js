//https://lambdageeks.com/page-object-model-cypress-example/
export class NCReport {
    openNCReportPage() {
        cy.get('.current-category > .menu-link').click()
        cy.get('#category-container')
            .contains('Reports')
            .click()
        cy.get('#category-container')
            .contains('Non Conformance Reports')
            .click()
    }
    addNewReport() {
        cy.get('#grid > div.k-header.k-grid-toolbar > a:nth-child(1)').click()
    }
    getSelectNCType() {
        return cy.get('input[name="ncType_input"]')
    }
    getGroup() {
        return cy.get('input[name="gpDte_hrmfrkey_input"]')
    }
    getShop() {
        return cy.get('input[name="shopSectionWc_hrmfrkey_input"]')
    }
    getBay() {
        return cy.get('input[name="bayDock_hrmfrkey_input"]')
    }
    getSystemType() {
        return cy.get('input[name="system_type_input"]')
    }
    getRouteTo() {
        return cy.get('input[name="routTo_input"]')
    }
    getBriefedTo() {
        return cy.get('input[name="briefedTo_input"]')
    }
    getSystem() {
        return cy.get('input[name="system_logfrkey_input"]')
    }
    getTailNumber() {
        return cy.get('input[name="serialNo_logfrkey_input"]')
    }
    getPartNumber() {
        return cy.get('input[name="partNumber_logfrkey_input"]')
    }
    getSerialNo() {
        return cy.get('input[name="partSrNo"]')
    }
    getReferenceDocuments() {
        return cy.get('input[name="refDoc"]')
    }
    setNCStatement(x) {
        cy.get('.k-content')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .type(x)
            })
    }
}