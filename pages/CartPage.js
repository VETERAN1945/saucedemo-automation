class CartPage {
  constructor(page) {
    this.page = page;
    
    // Selectors
    this.cartItems = '.cart_item';
    this.checkoutButton = '[data-test="checkout"]';
    this.continueShoppingButton = '[data-test="continue-shopping"]';
    this.removeButtons = '[data-test^="remove-"]';
  }

  // Method: Get number of items in cart
  async getCartItemsCount() {
    return await this.page.locator(this.cartItems).count();
  }

  // Method: Click checkout button
  async clickCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }

  // Method: Click continue shopping button
  async clickContinueShopping() {
    await this.page.locator(this.continueShoppingButton).click();
  }
}

module.exports = CartPage;