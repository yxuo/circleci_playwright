// tests/hello-world.spec.ts
import { test, expect } from '@playwright/test';

test('basic test - check title of example.com', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});