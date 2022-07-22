Feature: CRUD

	Scenario: API CRUD operations
	
		Given A list of users is available
		When I fetch a user
		Then display the response body to log
        Then name should be Janet
		When I update a user
        Then the user info is updated
        When I put a new user
        Then the response code is 200