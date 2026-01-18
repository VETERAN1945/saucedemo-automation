const { test, expect } = require('@playwright/test');

test.describe('Sorting Tests', () => {

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

  test('Sort products by name A to Z', async ({ page }) => {
    // 1. Select "Name (A to Z)" from dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption('az');
    console.log('✅ Selected sort: Name (A to Z)');
    
    // 2. Get all product names
    const productNames = await page.locator('.inventory_item_name').allTextContents();
    console.log('✅ Product names:', productNames);
    
    // 3. Verify products are sorted A to Z
    const sortedNames = [...productNames].sort();
    expect(productNames).toEqual(sortedNames);
    console.log('✅ Products are sorted A to Z');
    
    console.log('🎉 Sort A to Z test completed successfully!');
  });

  test('Sort products by name Z to A', async ({ page }) => {
    // 1. Select "Name (Z to A)" from dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    console.log('✅ Selected sort: Name (Z to A)');
    
    // 2. Get all product names
    const productNames = await page.locator('.inventory_item_name').allTextContents();
    console.log('✅ Product names:', productNames);
    
    // 3. Verify products are sorted Z to A
    const sortedNames = [...productNames].sort().reverse();
    expect(productNames).toEqual(sortedNames);
    console.log('✅ Products are sorted Z to A');
    
    console.log('🎉 Sort Z to A test completed successfully!');
  });

  test('Sort products by price low to high', async ({ page }) => {
    // 1. Select "Price (low to high)" from dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
    console.log('✅ Selected sort: Price (low to high)');
    
    // 2. Get all product prices
    const priceTexts = await page.locator('.inventory_item_price').allTextContents();
    console.log('✅ Price texts:', priceTexts);
    
    // 3. Convert prices to numbers (remove $ sign)
    const prices = priceTexts.map(price => parseFloat(price.replace('$', '')));
    console.log('✅ Prices as numbers:', prices);
    
    // 4. Verify prices are sorted low to high
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
    console.log('✅ Prices are sorted low to high');
    
    console.log('🎉 Sort low to high test completed successfully!');
  });

  test('Sort products by price high to low', async ({ page }) => {
    // 1. Select "Price (high to low)" from dropdown
    await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
    console.log('✅ Selected sort: Price (high to low)');
    
    // 2. Get all product prices
    const priceTexts = await page.locator('.inventory_item_price').allTextContents();
    console.log('✅ Price texts:', priceTexts);
    
    // 3. Convert prices to numbers (remove $ sign)
    const prices = priceTexts.map(price => parseFloat(price.replace('$', '')));
    console.log('✅ Prices as numbers:', prices);
    
    // 4. Verify prices are sorted high to low
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
    console.log('✅ Prices are sorted high to low');
    
    console.log('🎉 Sort high to low test completed successfully!');
  });

});