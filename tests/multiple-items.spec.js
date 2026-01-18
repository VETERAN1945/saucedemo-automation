const { test, expect } = require('@playwright/test');

test.describe('Multiple Items Tests', () => {

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

  test('Add multiple items to cart', async ({ page }) => {
    // 1. Add first item (Backpack)
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    console.log('✅ Added Backpack to cart');
    
    // 2. Verify cart badge shows "1"
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    console.log('✅ Cart badge shows 1');
    
    // 3. Add second item (Bike Light)
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    console.log('✅ Added Bike Light to cart');
    
    // 4. Verify cart badge shows "2"
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    console.log('✅ Cart badge shows 2');
    
    // 5. Add third item (Bolt T-Shirt)
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    console.log('✅ Added Bolt T-Shirt to cart');
    
    // 6. Verify cart badge shows "3"
    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
    console.log('✅ Cart badge shows 3');
    
    // 7. Click on cart icon
    await page.locator('.shopping_cart_link').click();
    console.log('✅ Clicked on cart icon');
    
    // 8. Verify we are on cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    console.log('✅ On cart page');
    
    // 9. Verify all 3 items are in the cart
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(3);
    console.log('✅ All 3 items are in the cart');
    
    console.log('🎉 Multiple items test completed successfully!');
  });

});