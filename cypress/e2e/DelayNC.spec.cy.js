import { login } from './pages/login';
let data;
const Login = new login();
describe('RaisingNOC', () => {
    before(function () {
        cy.fixture('DelayNC').then((testData) => {
            data = testData;
        });
    })
    it('initiate', () => {
        Login.navigate();
        Login.login(data[0].user_name, data[0].password);
        cy.wait(15000)
        Login.selectQC();
        cy.get('.current-category > .menu-link').click()
        cy.get('#category-container')
            .contains('Reports')
            .click()
        cy.get('#category-container')
            .contains('Delay Non Conformance')
            .click()
        cy.get('#grid > div.k-header.k-grid-toolbar > a:nth-child(1)').click()
        cy.wait(5000)
        cy.get('input[name="system_type_input"]').type(' AIRCRAFT{enter}')
        cy.wait(2000)
        cy.get('input[name="system_logfrkey_input"]').type('JF-17')
        cy.get('input[name="equip_log_frkey"]').type('14-1B7')
        cy.get('input[name="serialNo_logfrkey_input"]').type('88-965')
        cy.get('input[name="partNumber_logfrkey_input"]').type('  PJ-500AB')
        cy.get('input[name="partNumber_logfrkey_input"]').blur()
        cy.wait(4000)
        cy.get('input[name="partSerialNo_log_frkey"]').type('62021')
        cy.get('input[name="stageBar_input"]').type('FTS')
        cy.get('input[name="stage_log_frkey"]').type('initial')
        cy.get('.k-content')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                cy.wrap($body)
                    .type('qwerty@gmail.com')
            })
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_1', () => {
        Login.navigate();
        Login.login(data[1].user_name, data[1].password);
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(5000)
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_2', () => {
        Login.navigate();
        Login.login(data[2].user_name, data[2].password);
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(5000)
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_3', () => {
        Login.navigate();
        Login.login(data[3].user_name, data[3].password);
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(5000)
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_4', () => {
        Login.navigate();
        Login.login(data[4].user_name, data[4].password);//863025
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(5000)
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_5', () => {
        Login.navigate();
        Login.login(data[5].user_name, data[5].password);//12134
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(5000)
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_6', () => {
        Login.navigate();
        Login.login(data[6].user_name, data[6].password);//8082
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('input[name="recommendedStageBar_input"]').type(' DIS ASSY')
        cy.wait(5000)
        cy.get('input[name="stage1238_log_frkey"]').type('DISC')
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_7', () => {
        Login.navigate();
        Login.login(data[7].user_name, data[7].password);//601
        cy.wait(10000)
        Login.selectQC();
        cy.wait(3000)
        cy.get('.badge').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('#remarksTrail_remarksDNC_remarks').type('remarks')
        cy.get('input[name="routeTo_input"]').clear()
        cy.get('.k-animation-container')
            .then(($drop) => {
                const $body = $drop.get('#routeTo4396544_listbox')
                cy.wrap($body)
                    .contains('Supervisor')
                    .click()
            })
        cy.wait(5000)
        cy.get('input[name="routeTo_input"]').blur()
        cy.wait(3000)
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_8', () => {
        Login.navigate();
        Login.login(data[9].user_name, data[9].password);//6936
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(3000)
        cy.get('#remarksTrail_CorDispo_Correctiv1').type('remarks')
        cy.get('button[name="assignmentComplete"]').click()
    })
    it('route_9', () => {
        Login.navigate();
        Login.login(data[0].user_name, data[0].password);//8081
        cy.wait(15000)
        Login.selectQC();
        cy.get('.inbox-notification > .btn > img').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.wait(3000)
        cy.get('button[name="assignmentComplete"]').click()
    })
})