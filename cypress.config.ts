const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reporting-staging.mediavine.com',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {

    },
  }
});
