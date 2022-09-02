const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'test report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    html: true,
    json: true,
  },
  e2e: {
    specPattern: ["**/*.feature", "**/*.cy.{js,jsx,ts,tsx}"],
    baseUrl: 'http://172.16.10.4:8082/jw/web/login',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env: {
      google: 'https://www.google.com.pk',
      user_id: 'admin',
      user_pass: 'Tomcat@123',
      email_regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    },
    trashAssetsBeforeRuns: false,
    //experimentalSessionAndOrigin : true,
    //includeShadowDom: true,
    chromeWebSecurity: false
  },
});
