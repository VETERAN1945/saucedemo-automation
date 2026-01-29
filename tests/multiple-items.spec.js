const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

test.describe('Multiple Items Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Logged in and on products page');
  });

  test('Add multiple items to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Add first item (Backpack)
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    console.log('✅ Added Backpack to cart');
    
    // Verify cart badge shows "1"
    let cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
    console.log('✅ Cart badge shows 1');
    
    // Add second item (Bike Light)
    await inventoryPage.addItemToCart('sauce-labs-bike-light');
    console.log('✅ Added Bike Light to cart');
    
    // Verify cart badge shows "2"
    cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('2');
    console.log('✅ Cart badge shows 2');
    
    // Add third item (Bolt T-Shirt)
    await inventoryPage.addItemToCart('sauce-labs-bolt-t-shirt');
    console.log('✅ Added Bolt T-Shirt to cart');
    
    // Verify cart badge shows "3"
    cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('3');
    console.log('✅ Cart badge shows 3');
    
    // Click on cart icon
    await inventoryPage.openCart();
    console.log('✅ Clicked on cart icon');
    
    // Verify we are on cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    console.log('✅ On cart page');
    
    // Verify all 3 items are in the cart
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(3);
    console.log('✅ All 3 items are in the cart');
    
    console.log('🎉 Multiple items test completed successfully!');
  });

});