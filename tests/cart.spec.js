const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

test.describe('Shopping Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Logged in and on products page');
  });

  test('Add single item to cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Add item to cart
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    console.log('✅ Added item to cart');
    
    // Verify cart badge shows 1
    const cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
    console.log('✅ Cart badge shows 1');
    
    // Verify cart badge is visible
    const badgeVisible = await inventoryPage.isCartBadgeVisible();
    expect(badgeVisible).toBe(true);
    console.log('✅ Cart badge is visible');
    
    console.log('🎉 Add to cart test completed!');
  });

  test('Remove item from cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Add item to cart
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    console.log('✅ Added item to cart');
    
    // Verify cart badge shows 1
    let cartCount = await inventoryPage.getCartCount();
    expect(cartCount).toBe('1');
    console.log('✅ Cart badge shows 1');
    
    // Remove item from cart
    await inventoryPage.removeItemFromCart('sauce-labs-backpack');
    console.log('✅ Removed item from cart');
    
    // Verify cart badge disappeared
    const badgeVisible = await inventoryPage.isCartBadgeVisible();
    expect(badgeVisible).toBe(false);
    console.log('✅ Cart badge disappeared');
    
    console.log('🎉 Remove from cart test completed!');
  });

});