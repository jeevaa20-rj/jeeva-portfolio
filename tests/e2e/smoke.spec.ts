import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {
  test('home page loads, displays hero content and semantic structure', async ({ page }) => {
    await page.goto('/');

    // Check title contains owner name
    await expect(page).toHaveTitle(/Roopavaran Jeevaananth|Jeevaa/);

    // Hero headline is visible
    const heroHeading = page.locator('#hero h1');
    await expect(heroHeading).toBeVisible();
    await expect(heroHeading).toContainText('Roopavaran Jeevaananth');

    // Tagline is present
    const tagline = page.locator('#hero h2');
    await expect(tagline).toContainText('Full-Stack Developer and ML Engineer');
  });

  test('navigation links scroll to designated sections', async ({ page }) => {
    await page.goto('/');

    // Click on About nav link
    const aboutLink = page.locator('header nav a[href="#about"]');
    await aboutLink.click();
    await expect(page.locator('#about')).toBeInViewport({ ratio: 0.2 });

    // Click on Projects nav link
    const projectsLink = page.locator('header nav a[href="#projects"]');
    await projectsLink.click();
    await expect(page.locator('#projects')).toBeInViewport({ ratio: 0.2 });

    // Click on Contact nav link
    const contactLink = page.locator('header nav a[href="#contact"]');
    await contactLink.click();
    await expect(page.locator('#contact')).toBeInViewport({ ratio: 0.2 });
  });

  test('CV link returns HTTP 200 status', async ({ request, baseURL }) => {
    const cvUrl = `${baseURL || 'http://localhost:3000'}/cv/Jeevaa_CV.pdf`;
    const response = await request.get(cvUrl);

    expect(response.status()).toBe(200);
    const contentType = response.headers()['content-type'];
    expect(contentType).toMatch(/pdf|octet-stream/);
  });

  test('projects category filter switches view between Web and ML', async ({ page }) => {
    await page.goto('/');

    // Scroll to projects
    await page.locator('#projects').scrollIntoViewIfNeeded();

    // Verify initial All projects view has UniCore and AgriCure
    await expect(page.locator('text=UniCore - Campus Management Platform')).toBeVisible();
    await expect(page.locator('text=AgriCure - Tea & Paddy Disease Classifier')).toBeVisible();

    // Switch to ML filter
    await page.locator('button[role="tab"]:has-text("Machine Learning")').click();
    await expect(page.locator('text=AgriCure - Tea & Paddy Disease Classifier')).toBeVisible();
    await expect(page.locator('text=UniCore - Campus Management Platform')).not.toBeVisible();

    // Switch to Web filter
    await page.locator('button[role="tab"]:has-text("Web Development")').click();
    await expect(page.locator('text=UniCore - Campus Management Platform')).toBeVisible();
    await expect(page.locator('text=AgriCure - Tea & Paddy Disease Classifier')).not.toBeVisible();
  });
});
