import {login} from './pages/login';

const myObj = new login();

describe('POM demo', () => {
    it('test_1', () => {
        myObj.navigate();
        myObj.login('205700',Cypress.env('user_pass'));
        myObj.submit();
  })
})
