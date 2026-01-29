const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Logout Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Logged in and on products page');
  });

  test('Logout from application', async ({ page }) => {
    // Click on burger menu button
    await page.locator('#react-burger-menu-btn').click();
    console.log('✅ Clicked burger menu');
    
    // Wait for menu to be visible
    await expect(page.locator('.bm-menu')).toBeVisible();
    console.log('✅ Menu is visible');
    
    // Click Logout link
    await page.locator('#logout_sidebar_link').click();
    console.log('✅ Clicked Logout');
    
    // Verify we are back on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('✅ Redirected to login page');
    
    // Verify login form is visible
    const loginPage = new LoginPage(page);
    const formVisible = await loginPage.isLoginFormVisible();
    expect(formVisible).toBe(true);
    console.log('✅ Login form is visible');
    
    console.log('🎉 Logout test completed successfully!');
  });

  test('Logout and login again', async ({ page }) => {
    // Click on burger menu button
    await page.locator('#react-burger-menu-btn').click();
    console.log('✅ Clicked burger menu');
    
    // Wait for menu to be visible
    await expect(page.locator('.bm-menu')).toBeVisible();
    console.log('✅ Menu is visible');
    
    // Click Logout link
    await page.locator('#logout_sidebar_link').click();
    console.log('✅ Clicked Logout');
    
    // Verify we are back on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('✅ Back on login page');
    
    // Login again
    const loginPage = new LoginPage(page);
    await loginPage.login('standard_user', 'secret_sauce');
    console.log('✅ Logged in again');
    
    // Verify we are on products page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Successfully logged in again');
    
    console.log('🎉 Logout and login again test completed successfully!');
  });

});