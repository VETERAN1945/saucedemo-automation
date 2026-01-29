class InventoryPage {
  constructor(page) {
    this.page = page;
    
    // Selectors
    this.inventoryList = '.inventory_list';
    this.inventoryItems = '.inventory_item';
    this.shoppingCartBadge = '.shopping_cart_badge';
    this.shoppingCartLink = '.shopping_cart_link';
    this.sortDropdown = '[data-test="product-sort-container"]';
    this.productNames = '.inventory_item_name';
    this.productPrices = '.inventory_item_price';
  }

  // Method: Add item to cart by item name
  async addItemToCart(itemName) {
    const selector = `[data-test="add-to-cart-${itemName}"]`;
    await this.page.locator(selector).click();
  }

  // Method: Remove item from cart by item name
  async removeItemFromCart(itemName) {
    const selector = `[data-test="remove-${itemName}"]`;
    await this.page.locator(selector).click();
  }

  // Method: Get cart count
  async getCartCount() {
    const badge = this.page.locator(this.shoppingCartBadge);
    if (await badge.isVisible()) {
      return await badge.textContent();
    }
    return '0';
  }

  // Method: Check if cart badge is visible
  async isCartBadgeVisible() {
    return await this.page.locator(this.shoppingCartBadge).isVisible();
  }

  // Method: Open cart
  async openCart() {
    await this.page.locator(this.shoppingCartLink).click();
  }

  // Method: Sort products
  async sortBy(option) {
    await this.page.locator(this.sortDropdown).selectOption(option);
  }

  // Method: Get all product names
  async getAllProductNames() {
    return await this.page.locator(this.productNames).allTextContents();
  }

  // Method: Get all product prices
  async getAllProductPrices() {
    const priceTexts = await this.page.locator(this.productPrices).allTextContents();
    return priceTexts.map(price => parseFloat(price.replace('$', '')));
  }
}

module.exports = InventoryPage;