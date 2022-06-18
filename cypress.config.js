const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: 'https://www.myshop4.com/',
     
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
