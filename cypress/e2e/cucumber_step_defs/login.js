//https://docs.cypress.io/guides/guides/environment-variables
//https://docs.cypress.io/api/cypress-api/env
//import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to the Website', () => {
	cy.visit('/')
});

When('I enter username and password', () => {

	cy.on('uncaught:exception', (err, runnable) => {

		if (err.message.includes('Cannot read properties of undefined')) {

			console.log('Application Error Javascript')
			return false;
		}
		return true
	})
	cy.wait(15000)
	cy.get('[id=j_username]').clear()
	cy.get('[id=j_username]').type(Cypress.env('user_id'));
	cy.get('[id=j_password]').clear()
	cy.get('[id=j_password]').type(Cypress.env('user_pass'));
});
When('User click on signin button', () => {
	cy.get('[type=submit]').click()
});
Then('Validate the url after login', () => {
	cy.url().should('eq', 'http://172.16.10.4:8082/jw/web/userview/appcenter/v/_/home') // => true
});