import { login } from '../../../pages/login.js';
import { NCReport } from '../../../pages/NCReport.js';
let data;
let input;
const myObj = new login();
const report = new NCReport();
describe('RaisingNOC', () => {
    before(function () {
        cy.fixture('NCReport').then((testData) => {
            data = testData;
        });
        cy.fixture('NCData').then((inputData) => {
            input = inputData;
        });
    })
    it('test_1', () => {
        myObj.navigate();
        myObj.login(data[0].user_name, data[0].password);
        cy.wait(10000)
        myObj.selectQC();
        report.openNCReportPage();
        report.addNewReport();
        cy.wait(5000)
        report.getSelectNCType().blur()
        report.getSelectNCType().type(input[0].selectNCType)
        report.getGroup().type(input[0].group)
        report.getGroup().blur()
        report.getShop().type(input[0].shop)
        report.getShop().blur()
        report.getBay().clear()
        report.getBay().type(input[0].bay)
        report.getSystemType().type(input[0].systemType)
        report.getRouteTo().type(input[0].routeTo)
        report.getBriefedTo().type(input[0].briefedTo)
        report.getSystem().type(input[0].system)
        report.getSystem().blur()
        cy.wait(5000)
        report.getTailNumber().type(input[0].tailNumber)
        report.getPartNumber().type(input[0].partNumber)
        cy.wait(2000)
        report.getPartNumber().type('{enter}')
        report.getPartNumber().blur()
        report.getSerialNo().type(input[0].serialNo)
        cy.wait(2000)
        report.getReferenceDocuments().type(input[0].referenceDocuments)
        report.setNCStatement(input[0].NCStatement)
        //cy.wait(30000)
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('logout', () => {
        cy.wait(15000)
        myObj.logout();
    })
    it('route_1', () => {
        myObj.navigate();
        cy.wait(30000)
        myObj.login(data[1].user_name, data[1].password);
        cy.wait(10000)
        myObj.selectQC();
        myObj.openNotification();
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