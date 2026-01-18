const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {
  
  test('Successful login with valid credentials', async ({ page }) => {
    // 1. Open login page
    await page.goto('https://www.saucedemo.com/');
    
    // 2. Verify we are on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('✅ Opened login page');
    
    // 3. Verify login form elements are visible
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
    console.log('✅ Login form is visible');
    
    // 4. Fill in username
    await page.fill('#user-name', 'standard_user');
    console.log('✅ Entered username');
    
    // 5. Fill in password
    await page.fill('#password', 'secret_sauce');
    console.log('✅ Entered password');
    
    // 6. Click login button
    await page.click('#login-button');
    console.log('✅ Clicked login button');
    
    // 7. Verify successful login - check URL
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Successfully navigated to inventory page');
    
    // 8. Verify products page loaded
    await expect(page.locator('.inventory_list')).toBeVisible();
    console.log('✅ Products page loaded');
    
    // 9. Verify shopping cart is visible
    await expect(page.locator('.shopping_cart_link')).toBeVisible();
    console.log('✅ Shopping cart is visible');
    
    console.log('✅ Login test completed successfully!');
  });
  
  test('Login fails with invalid credentials', async ({ page }) => {
    // 1. Open login page
    await page.goto('https://www.saucedemo.com/');
    
    // 2. Fill in wrong username
    await page.fill('#user-name', 'wrong_user');
    
    // 3. Fill in wrong password
    await page.fill('#password', 'wrong_password');
    
    // 4. Click login button
    await page.click('#login-button');
    
    // 5. Verify error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface');
    console.log('✅ Error message displayed correctly');
    
    // 6. Verify still on login page
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    console.log('✅ Stayed on login page as expected');
  });

});