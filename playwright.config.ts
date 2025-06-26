import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  use: {
    headless: true,
    browserName: 'chromium',
  },
  projects: [
    {
      name: 'test-project',
      testDir: "./tests",
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});