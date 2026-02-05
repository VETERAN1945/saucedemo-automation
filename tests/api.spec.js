const { test, expect } = require('@playwright/test');

test.describe('API Tests', () => {

  test('GET - Get all products', async ({ request }) => {
    // Send GET request
    const response = await request.get('https://fakestoreapi.com/products');
    console.log('✅ Sent GET request');
    
    // Verify status code
    expect(response.status()).toBe(200);
    console.log('✅ Status code is 200');
    
    // Parse JSON response
    const products = await response.json();
    
    // Verify products array is not empty
    expect(products.length).toBeGreaterThan(0);
    console.log(`✅ Received ${products.length} products`);
    
    // Verify first product has required fields
    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('title');
    expect(products[0]).toHaveProperty('price');
    console.log('✅ Product structure is valid');
    
    console.log('🎉 GET test completed successfully!');
  });

  test('POST - Create new product', async ({ request }) => {
    // Prepare test data
    const newProduct = {
      title: 'Test Product',
      price: 13.5,
      description: 'Test automation product',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    };
    
    // Send POST request
    const response = await request.post('https://fakestoreapi.com/products', {
      data: newProduct
    });
    console.log('✅ Sent POST request');
    
    // Verify status code
    expect(response.status()).toBe(201);
    console.log('✅ Status code is 201');
    
    // Parse response
    const createdProduct = await response.json();
    
    // Verify response contains our data
    expect(createdProduct.title).toBe('Test Product');
    expect(createdProduct.price).toBe(13.5);
    console.log('✅ Product created:', createdProduct);
    
    console.log('🎉 POST test completed successfully!');
  });

  test('GET - Get single product by ID', async ({ request }) => {
    const productId = 1;
    
    // Send GET request for specific product
    const response = await request.get(`https://fakestoreapi.com/products/${productId}`);
    console.log(`✅ Sent GET request for product ${productId}`);
    
    // Verify status code
    expect(response.status()).toBe(200);
    console.log('✅ Status code is 200');
    
    // Parse response
    const product = await response.json();
    
    // Verify product ID matches
    expect(product.id).toBe(productId);
    console.log('✅ Product ID matches');
    
    // Verify product has all required fields
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('description');
    expect(product).toHaveProperty('category');
    console.log('✅ Product data:', product.title);
    
    console.log('🎉 Single product test completed successfully!');
  });

});