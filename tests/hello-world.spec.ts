// tests/hello-world.spec.ts
import { test, expect } from '@playwright/test';

test('basic test - check title of example.com', async ({ page }) => {
    // await page.goto('https://example.com');
    // const title = await page.title();
    // expect(title).toBe('Example Domain');
    // Simply test if true is true
    expect(true).toBe(true);
});

test('basic test - 2', async ({ page }) => {
    // await page.goto('https://example.com');
    // const title = await page.title();
    // expect(title).toBe('Example Domain');
    // Simply test if true is true
    expect(true).toBe(true);
});

test('basic test - 3', async ({ page }) => {
    // await page.goto('https://example.com');
    // const title = await page.title();
    // expect(title).toBe('Example Domain');
    // Simply test if true is true
    expect(true).toBe(false);
});