const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  video:true,
  projectId: "c98wjn",
  retries:{
    runMode: 2,
    openMode: 1,
  },
  env: {
    url: "https://magento.softwaretestingboard.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('after:spec', (spec, results) => {
        console.log('Finished running', spec.relative)
      })
    },
    specPattern: [
      "cypress/e2e/*.js"
    ]
  },
});
