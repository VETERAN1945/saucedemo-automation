const { test, expect } = require('@playwright/test');

test.describe('Shopping Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Open login page
    await page.goto('https://www.saucedemo.com/');
    console.log('✅ Opened login page');
    
    // 2. Login with valid credentials
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    console.log('✅ Logged in successfully');
    
    // 3. Verify we are on products page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ On products page');
  });

  test('Add single item to cart', async ({ page }) => {
    // 1. Click "Add to cart" button for first product (Backpack)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    console.log('✅ Clicked Add to cart button');
    
    // 2. Verify button changed to "Remove"
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
    console.log('✅ Button changed to Remove');
    
    // 3. Verify shopping cart badge shows "1"
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    console.log('✅ Shopping cart badge shows 1');
    
    // 4. Verify cart badge is visible
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();
    console.log('✅ Cart badge is visible');
    
    console.log('🎉 Add to cart test completed successfully!');
  });

  test('Remove item from cart', async ({ page }) => {
    // 1. Add item to cart first
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    console.log('✅ Added item to cart');
    
    // 2. Verify item was added (badge shows 1)
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    console.log('✅ Cart badge shows 1');
    
    // 3. Click "Remove" button
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    console.log('✅ Clicked Remove button');
    
    // 4. Verify button changed back to "Add to cart"
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
    console.log('✅ Button changed back to Add to cart');
    
    // 5. Verify cart badge is not visible (no items in cart)
    await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
    console.log('✅ Cart badge disappeared');
    
    console.log('🎉 Remove from cart test completed successfully!');
  });

});