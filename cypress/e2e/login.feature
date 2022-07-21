Feature: I want to login

	Scenario: Login as new signup user
	
		Given I navigate to the Website
		When I enter username and password
		When User click on signin button
		Then Validate the url after login

