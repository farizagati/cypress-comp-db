const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl:'http://computer-database.gatling.io/computers',
   specPattern: 'cypress/e2e/**/*.{js,ts,jsx,tsx}',
   excludeSpecPattern: [
    '**/1-getting-started',
    '**/2-advanced-examples/*'
  ]
  },
});
