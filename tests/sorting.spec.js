const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

test.describe('Sorting Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    console.log('✅ Logged in and on products page');
  });

  test('Sort products by name A to Z', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Select "Name (A to Z)" sorting
    await inventoryPage.sortBy('az');
    console.log('✅ Selected sort: Name (A to Z)');
    
    // Get all product names
    const productNames = await inventoryPage.getAllProductNames();
    console.log('✅ Product names:', productNames);
    
    // Verify products are sorted A to Z
    const sortedNames = [...productNames].sort();
    expect(productNames).toEqual(sortedNames);
    console.log('✅ Products are sorted A to Z');
    
    console.log('🎉 Sort A to Z test completed successfully!');
  });

  test('Sort products by name Z to A', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Select "Name (Z to A)" sorting
    await inventoryPage.sortBy('za');
    console.log('✅ Selected sort: Name (Z to A)');
    
    // Get all product names
    const productNames = await inventoryPage.getAllProductNames();
    console.log('✅ Product names:', productNames);
    
    // Verify products are sorted Z to A
    const sortedNames = [...productNames].sort().reverse();
    expect(productNames).toEqual(sortedNames);
    console.log('✅ Products are sorted Z to A');
    
    console.log('🎉 Sort Z to A test completed successfully!');
  });

  test('Sort products by price low to high', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Select "Price (low to high)" sorting
    await inventoryPage.sortBy('lohi');
    console.log('✅ Selected sort: Price (low to high)');
    
    // Get all product prices
    const prices = await inventoryPage.getAllProductPrices();
    console.log('✅ Prices as numbers:', prices);
    
    // Verify prices are sorted low to high
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
    console.log('✅ Prices are sorted low to high');
    
    console.log('🎉 Sort low to high test completed successfully!');
  });

  test('Sort products by price high to low', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    
    // Select "Price (high to low)" sorting
    await inventoryPage.sortBy('hilo');
    console.log('✅ Selected sort: Price (high to low)');
    
    // Get all product prices
    const prices = await inventoryPage.getAllProductPrices();
    console.log('✅ Prices as numbers:', prices);
    
    // Verify prices are sorted high to low
    const sortedPrices = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sortedPrices);
    console.log('✅ Prices are sorted high to low');
    
    console.log('🎉 Sort high to low test completed successfully!');
  });

});