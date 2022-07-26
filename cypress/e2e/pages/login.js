export class login{
    getEmailField() {
        return cy.get('[id=j_username]')
    }

    getPasswordField() {
        return cy.get('[id=j_password]')
    }

    navigate()    {
        cy.visit('/');
    }

    login(user,pass)
    {
        this.getEmailField().clear()
        this.getEmailField().type(user);
        this.getPasswordField().clear()
        this.getPasswordField().type(pass);
    }

    submit()
    {
        cy.get('[type=submit]').click()

    }
}