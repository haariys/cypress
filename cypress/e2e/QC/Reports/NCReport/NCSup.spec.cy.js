import { login } from '../../../pages/login.js';
import { NCReport } from '../../../pages/NCReport.js';
let data;
let input;
const Login = new login();
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
        Login.navigate();
        Login.login(data[0].user_name, data[0].password);
        Login.selectQC();
        report.openNCReportPage();
        report.addNewReport();
        cy.wait(5000)
        report.getSelectNCType().blur();
        report.getSelectNCType().type(input[0].selectNCType)
        cy.wait(2000)
        report.getGroup().type(input[0].group)
        report.getGroup().blur()
        cy.wait(2000)
        report.getShop().type(input[0].shop)
        report.getShop().blur()
        report.getBay().clear()
        report.getBay().type(input[0].bay)
        report.getSystemType().type(input[0].systemType)
        report.getRouteTo().type(input[0].routeTo)
        report.getBriefedTo().type(input[0].briefedTo)
        report.getSystem().type(input[0].system)
        report.getTailNumber().type(input[0].tailNumber)
        report.getPartNumber().type(input[0].partNumber)
        cy.wait(2000)
        report.getPartNumber().type('{enter}')
        report.getPartNumber().blur()
        report.getSerialNo().type(input[0].serialNo)
        cy.wait(5000)
        report.getReferenceDocuments().type(input[0].referenceDocuments)
        report.setNCStatement(input[0].NCStatement)
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('logout', () => {
        cy.wait(15000)
        Login.logout();
    })
    it('route_1', () => {
        Login.navigate();
        Login.login(data[1].user_name, data[1].password);
        Login.selectQC();
        Login.openNotification();
        cy.wait(10000)
        cy.get('#field24_qcRemarksForm_remarks').type('DDQ Remarks entered')
        cy.get('#assignmentComplete').click()
        cy.wait(2000)
        cy.get('#fac_name').click()
    })
    it('route_2', () => {
        Login.navigate();
        Login.login(data[2].user_name, data[2].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('#correctiveActionDetails').type('CA Supervisor Remarks entered @ 31/8/22 4.55')
        cy.get('input[name="workers_input"]').type('SUPV-NOMAN GHAFFAR-5556-PAINTER')
        cy.get('input[name="workers_input"]').blur()
        cy.get('#assignmentComplete').click()
        cy.wait(5000)
        cy.get('#fac_name').click()
    })
    it('route_3', () => {
        Login.navigate();
        Login.login(data[3].user_name, data[3].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('input[value="SUPERVISOR"]').click()
        cy.wait(2000)
        cy.get('#field24_qcRemarksForm_remarks').type('sept first 5 pm')
        cy.get('#assignmentComplete').click()
    })
    it('route_4', () => {
        Login.navigate();
        Login.login(data[2].user_name, data[2].password);//6936
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)

        cy.get('#assignmentComplete').click()
    })
    it('route_5', () => {
        Login.navigate();
        Login.login(data[3].user_name, data[3].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('input[value="QCI"]').click()
        cy.wait(2000)
        cy.get('input[value="AVOIDABLE"]').click()
        cy.get('#rootCauseRemarks').type('remarks')
        cy.get('#field24_qcRemarksForm_remarks').type('sept first 5 pm')
        cy.get('#assignmentComplete').click()
    })
    it('route_6', () => {
        Login.navigate();
        Login.login(data[0].user_name, data[0].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('input[value="REPAIRED"]').click()
        cy.wait(2000)
        cy.get('input[name="DceRoutTo_input"]').type('CHF TECH-ASAD A')
        cy.get('#field13_qcRemarksForm_remarks').type('remarks')
        cy.get('#assignmentComplete').click()
    })
    it('route_7', () => {
        Login.navigate();
        Login.login(data[6].user_name, data[6].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('#field24_qcRemarksForm_remarks').type('remarks')
        cy.get('#assignmentComplete').click()
    })
    it('route_8', () => {
        Login.navigate();
        Login.login(data[5].user_name, data[5].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('#field24_qcRemarksForm_remarks').type('remarks')
        cy.get('#assignmentComplete').click()
    })
    it('route_9', () => {
        Login.navigate();
        Login.login(data[0].user_name, data[0].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('#field13_qcRemarksForm_remarks').type('remarks')
        cy.get('#assignmentComplete').click()
    })
    it('route_10', () => {
        Login.navigate();
        Login.login(data[1].user_name, data[1].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('input[value="CLOSED"]').click()
        cy.get('#assignmentComplete').click()
    })
    it('route_11', () => {
        Login.navigate();
        Login.login(data[0].user_name, data[0].password);
        Login.selectQC();
        cy.wait(10000)
        Login.openNotification();
        cy.wait(10000)
        cy.get('#assignmentComplete').click()
    })
})