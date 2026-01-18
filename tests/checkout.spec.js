const { test, expect } = require('@playwright/test');

test.describe('Checkout Tests', () => {

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

  test('Complete checkout process', async ({ page }) => {
    // 1. Add item to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    console.log('✅ Added item to cart');
    
    // 2. Go to cart
    await page.locator('.shopping_cart_link').click();
    console.log('✅ Opened cart page');
    
    // 3. Verify we are on cart page
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    console.log('✅ On cart page');
    
    // 4. Verify item is in cart
    await expect(page.locator('.cart_item')).toHaveCount(1);
    console.log('✅ Item is in cart');
    
    // 5. Click "Checkout" button
    await page.locator('[data-test="checkout"]').click();
    console.log('✅ Clicked Checkout button');
    
    // 6. Verify we are on checkout step 1 page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
    console.log('✅ On checkout step 1 page');
    
    // 7. Fill in first name
    await page.locator('[data-test="firstName"]').fill('John');
    console.log('✅ Entered first name');
    
    // 8. Fill in last name
    await page.locator('[data-test="lastName"]').fill('Doe');
    console.log('✅ Entered last name');
    
    // 9. Fill in postal code
    await page.locator('[data-test="postalCode"]').fill('12345');
    console.log('✅ Entered postal code');
    
    // 10. Click "Continue" button
    await page.locator('[data-test="continue"]').click();
    console.log('✅ Clicked Continue button');
    
    // 11. Verify we are on checkout step 2 page (overview)
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
    console.log('✅ On checkout overview page');
    
    // 12. Verify item is displayed in overview
    await expect(page.locator('.cart_item')).toHaveCount(1);
    console.log('✅ Item displayed in overview');
    
    // 13. Verify total price is visible
    await expect(page.locator('.summary_total_label')).toBeVisible();
    console.log('✅ Total price is visible');
    
    // 14. Click "Finish" button
    await page.locator('[data-test="finish"]').click();
    console.log('✅ Clicked Finish button');
    
    // 15. Verify we are on checkout complete page
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    console.log('✅ On checkout complete page');
    
    // 16. Verify success message is displayed
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    console.log('✅ Success message displayed');
    
    // 17. Verify pony express image is visible
    await expect(page.locator('.pony_express')).toBeVisible();
    console.log('✅ Pony express image visible');
    
    console.log('🎉 Checkout test completed successfully!');
  });

});