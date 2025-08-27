import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: false,
    setupNodeEvents(/* on, config */) {
      // implementação dos event listeners
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    excludeSpecPattern: "cypress/e2e/**/*.test.{js,jsx,ts,tsx}",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
