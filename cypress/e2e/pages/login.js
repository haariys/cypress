//https://lambdageeks.com/page-object-model-cypress-example/
export class login {
    getEmailField() {
        return cy.get('[id=j_username]')
    }
    getPasswordField() {
        return cy.get('[id=j_password]')
    }
    navigate() {
        cy.visit('/');
        cy.wait(10000)
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of undefined')) {
                console.log('Application Error Javascript')
                return false;
            }
            return true
        })
    }
    login(user, pass) {
        this.getEmailField().clear()
        this.getEmailField().type(user);
        this.getPasswordField().clear()
        this.getPasswordField().type(pass, { log: false });
        this.submit();
    }
    submit() {
        cy.get('[type=submit]').click()
    }
    selectQC() {
        cy.wait(12000)
        cy.get('#apps')
            .contains('Quality Control')
            .click()
    }
    logout() {
        cy.get('.username_userlink')
            .click()
        cy.get('.user-link > .dropdown-menu > :nth-child(2) > a > :nth-child(2)')
            .click()
    }
    openNotification() {
        cy.get('.badge').click()
        cy.get('.inbox-notification > .dropdown-menu > :nth-child(3) > a').click()
    }
}