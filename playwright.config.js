const { defineConfig, devices } = require('@playwright/test')
const { defineBddConfig } = require('playwright-bdd')

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.js',
  outputDir: '.features-gen',
  language: 'pt',
})

module.exports = defineConfig({
  testDir,
  fullyParallel: true,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
