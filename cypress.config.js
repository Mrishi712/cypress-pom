const cypress = require("cypress");
const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');



module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/orange-hrm-ui-test-report',
    charts: true,
    reportPageTitle: 'UI Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    overwrite: false,
    autoOpen: false,
    code: true,
    html: false,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
    showPassed: true,
    saveAllAttempts: false,
    ignoreVideos: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
