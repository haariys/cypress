//https://docs.cypress.io/api/commands/fixture
import { login } from '../../pages/login.js';

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
    myObj.login(data[1].user_name, data[1].password);
    myObj.submit();
  });
});
