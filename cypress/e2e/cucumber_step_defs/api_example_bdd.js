//https://docs.cypress.io/guides/guides/network-requests
//https://docs.cypress.io/api/commands/request
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//https://docs.cypress.io/api/commands/contains#Regular-Expression
//https://docs.cypress.io/api/commands/wrap
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('A list of users is available', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',

    }).then((result) => {
        // Fetching reponse 200
        expect(result.status).to.eq(200)
        //Response body enumeration to find size and assert equal to 6
        let count = Object.keys(result.body.data).length;
        cy.log(count);
        assert.equal(count, 6, 'page size = 6')
        // Response body checking avatar attribute contains .jpg file type
        cy.wrap(result.body.data[0]).its('avatar').should('contain', '.jpg')
        // validating id attribute to be a number
        expect(result.body.data[0].id).to.be.a('number')
        // validating first_name attribute to be a string
        expect(result.body.data[0].first_name).to.be.a('string')
        // let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        // for email format validation using regex 
        let regex = new RegExp(Cypress.env('email_regex'), 'g')
        cy.wrap(result.body.data[0]).its('email').should('match', regex)


    })
});

When('I fetch a user', () => {

    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/2',

    })
});

Then('display the response body to log', () => {
    cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users/2',

    }).then((result) => {
        //printing to log the attribute first_name 
        cy.log(result.body.data.first_name)
        let name = result.body.data.first_name;
        //wrapping name attribute to pass and use in next step
        cy.wrap(name).as('name')
    })

});


Then('name should be Janet', () => {
    //catching name attribute valueand asserting
    cy.get('@name').then(name => {
        expect(name).to.contain("Janet")
        assert.isString(name, 'type is string')
    });

});
When('I update a user', () => {
    cy.request({
        method: "PATCH",
        url: "https://reqres.in/api/users/2",
        body: {

            "name": "morpheus",
            "job": "zion resident"

        },
    }).then((result) => {
        //wrapped result attribute
        cy.wrap(result).as('result')
    });

});

Then('the user info is updated', () => {
    //asserting response to be correct provided oracle
    cy.get('@result').then(result => {
        expect(result.body.name).to.contain("morpheus")
        expect(result.body.job).to.contain("zion resident")
    });

});
When('I put a new user', () => {
    cy.request({
        method: "PUT",
        url: "https://reqres.in/api/users/2",
        body: {
            "name": "morpheus",
            "job": "zion resident"
        }
    }).then((result) => {

        cy.wrap(result).as('result_put')

    })

});


Then('the response code is 200', () => {
    cy.get('@result_put').then(result => {
        expect(result.status).to.eq(200);
    });


});
