const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test.describe('Login Tests', () => {

  test('Successful login with valid credentials', async ({ page }) => {
    // Create LoginPage object
    const loginPage = new LoginPage(page);
    
    // Open login page
    await loginPage.goto();
    console.log('✅ Opened login page');
    
    // Verify login form is visible
    const formVisible = await loginPage.isLoginFormVisible();
    expect(formVisible).toBe(true);
    console.log('✅ Login form is visible');
    
    // Login with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');
    console.log('✅ Logged in successfully');
    
    // Verify successful navigation to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ On inventory page');
    
    console.log('🎉 Login test completed successfully!');
  });

  test('Login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    // Open login page
    await loginPage.goto();
    console.log('✅ Opened login page');
    
    // Attempt login with locked user
    await loginPage.login('locked_out_user', 'secret_sauce');
    console.log('✅ Attempted login with locked user');
    
    // Verify error message is displayed
    const errorMsg = loginPage.getErrorMessage();
    await expect(errorMsg).toBeVisible();
    console.log('✅ Error message displayed');
    
    // Verify stayed on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('✅ Stayed on login page');
    
    console.log('🎉 Failed login test completed successfully!');
  });

});