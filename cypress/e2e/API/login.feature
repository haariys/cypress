#https://github.com/badeball/cypress-cucumber-preprocessor
#https://kailash-pathak.medium.com/how-to-grow-cucumber-in-cypress-in-just-10-steps-21c5a086b929

Feature: I want to login

	Scenario: Login as new signup user
	
		Given I navigate to the Website
		When I enter username and password
		When User click on signin button
		Then Validate the url after login

