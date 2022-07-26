export class login{
    navigate()    {
        cy.visit('/');
    }

    login(user,pass)
    {
        cy.get('[id=j_username]').clear()
        cy.get('[id=j_username]').type(user);
        cy.get('[id=j_password]').clear()
        cy.get('[id=j_password]').type(pass);
    }

    submit()
    {
        cy.get('[type=submit]').click()

    }
}