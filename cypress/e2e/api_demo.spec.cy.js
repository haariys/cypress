//https://docs.cypress.io/api/commands/request
describe('demo', () => {
	  it('GET', () => {

	  	cy.request({
			method: 'GET', 
  			url: 'https://reqres.in/api/users?page=2', 
  			
				}).then( (result) => {
 				
 				expect(result.status).to.eq(200)
 				expect(result.body.data[0].first_name).to.eq('Michael')
				
				})
  })
	  it('POST', () => {

	  	cy.request({
			method: 'POST', 
  			url: 'https://reqres.in/api/users', 
  			 body: {
  			      "name": "haris",
  			      "job" : "QA",
    			
 			 }
  			
				}).then( (result) => {
 				
 				expect(result.status).to.eq(201)
				
				})
  })
  it('PUT', () => {

	  	cy.request({
			method: 'PUT', 
  			url: 'https://reqres.in/api/users/2', 
  			 body: {
 				   "name": "morpheus",
 				   "job": "zion resident"
				}
				}).then( (result) => {
 				
 				expect(result.status).to.eq(200)
				
				})

  })

  it("PATCH", () => {
    cy.request({
      method: "PATCH",
      url: "https://reqres.in/api/users/2",
      body: {
     
   
    "job": "new job",

      },
    }).then( (result) => {
 				
		expect(result.status).to.eq(200);
		cy.log(result.body);
		expect(result.body.job).to.eq('new job');
	   
	   })
  });
  it("DELETE", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/3",
  
    }).then( (result) => {
 				
		expect(result.status).to.eq(204);
			   
	   })
  });




})

