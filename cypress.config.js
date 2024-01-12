const { defineConfig } = require("cypress");
require("dotenv").config();
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "MAINGAMES",
    embeddedScreenshots: true,
    inlineAssets: false,
    saveAllAttempts: true,
    autoOpen: true,
    overwrite: true,
    html: true,
    json: true,
  },
  video: false,
  screenshotsFolder: "cypress/images",
  env: {
    ...process.env,
  },
  e2e: {
    viewportWidth: 1536,
    viewportHeight: 960,
    specPattern: "./cypress/tests/**.{js,jsx,ts,tsx}",
    projectId: "Main Games",
    baseUrl: "https://eklipse.gg/",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on,config);
    },
  },
});
