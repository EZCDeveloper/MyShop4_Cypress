const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.myshop4.com/",
    projectId: "3zu4x9",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
