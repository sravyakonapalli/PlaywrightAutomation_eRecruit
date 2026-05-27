import { defineConfig, devices } from '@playwright/test';
import { frameworkConfig } from './config/frameworkConfig';

export default defineConfig({

  testDir: './tests',

  timeout: 60 * 1000,

  expect: {
    timeout: 10 * 1000,
  },

  fullyParallel: true,

  retries: 1,

  reporter: [
    ['html', { outputFolder: 'reports/html-report' }],
    ['list']
  ],

  use: {

    baseURL: frameworkConfig.baseURL,

    headless: frameworkConfig.headless,

    viewport: {
      width: 1440,
      height: 900,
    },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    actionTimeout: 15000,

    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,
  },

  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari'],
      },
    },

  ],
});