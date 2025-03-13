import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '1c35bs',
  retries: 0,
  // retries: {
  //   runMode: 4,
  //   openMode: 0,
  // },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/cyprus-junit.xml',
    toConsole: true,
  },
  e2e: {
    video: false,
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/*spec*.js',
  },
});
