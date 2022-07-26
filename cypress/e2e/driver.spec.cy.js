import {login} from './pages/login';
let data;
const myObj = new login();

describe('POM demo', () => {
    before(() => {
        cy.fixture('credentials').then((testData) => {
            data = testData;
        });
      });
    
    it('test_1', () => {
        myObj.navigate();
        myObj.login(data[0].user_name,Cypress.env('user_pass'));
        myObj.submit();
  });
});
