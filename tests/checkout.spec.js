const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test.describe('Checkout Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Logged in and on products page');
  });

  test('Complete checkout process', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    
    // Add item to cart
    await inventoryPage.addItemToCart('sauce-labs-backpack');
    console.log('✅ Added item to cart');
    
    // Go to cart
    await inventoryPage.openCart();
    console.log('✅ Opened cart page');
    
    // Verify we are on cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    console.log('✅ On cart page');
    
    // Verify item is in cart
    const itemCount = await cartPage.getCartItemsCount();
    expect(itemCount).toBe(1);
    console.log('✅ Item is in cart');
    
    // Click Checkout button
    await cartPage.clickCheckout();
    console.log('✅ Clicked Checkout button');
    
    // Verify we are on checkout step 1 page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    console.log('✅ On checkout step 1 page');
    
    // Fill in checkout information
    await checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    console.log('✅ Filled checkout information');
    
    // Click Continue button
    await checkoutPage.clickContinue();
    console.log('✅ Clicked Continue button');
    
    // Verify we are on checkout step 2 page (overview)
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    console.log('✅ On checkout overview page');
    
    // Verify total price is visible
    await expect(page.locator('.summary_total_label')).toBeVisible();
    console.log('✅ Total price is visible');
    
    // Click Finish button
    await checkoutPage.clickFinish();
    console.log('✅ Clicked Finish button');
    
    // Verify we are on checkout complete page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    console.log('✅ On checkout complete page');
    
    // Verify success message
    const headerText = await checkoutPage.getCompleteHeaderText();
    expect(headerText).toBe('Thank you for your order!');
    console.log('✅ Success message displayed');
    
    // Verify pony express image is visible
    const ponyVisible = await checkoutPage.isPonyExpressVisible();
    expect(ponyVisible).toBe(true);
    console.log('✅ Pony express image visible');
    
    console.log('🎉 Checkout test completed successfully!');
  });

});