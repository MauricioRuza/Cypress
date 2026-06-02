const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  chromeWebSecurity: false,
  e2e: {
    watchForFileChanges: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  env: {
    CHOKIDAR_USEPOLLING: "1",
  },
  },
});
