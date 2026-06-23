// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  retries: 0,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Sobe o servidor estático antes de rodar os testes
  webServer: {
    command: 'npx serve app -p 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
