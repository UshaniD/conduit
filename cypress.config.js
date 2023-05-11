const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://angularjs.realworld.io/#/",
    //viewportWidth: 375,
    //viewportHeight: 667,
    //viewportWidth: 1280,
    //viewportHeight: 800,
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    projectId: "tpxd11"
  },
});
