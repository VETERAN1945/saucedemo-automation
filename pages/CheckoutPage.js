class CheckoutPage {
  constructor(page) {
    this.page = page;
    
    // Selectors - Step 1 (Your Information)
    this.firstNameInput = '[data-test="firstName"]';
    this.lastNameInput = '[data-test="lastName"]';
    this.postalCodeInput = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    
    // Selectors - Step 2 (Overview)
    this.finishButton = '[data-test="finish"]';
    this.totalLabel = '.summary_total_label';
    
    // Selectors - Complete
    this.completeHeader = '.complete-header';
    this.ponyExpressImage = '.pony_express';
  }

  // Method: Fill checkout information (Step 1)
  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
  }

  // Method: Click continue button (Step 1)
  async clickContinue() {
    await this.page.locator(this.continueButton).click();
  }

  // Method: Click finish button (Step 2)
  async clickFinish() {
    await this.page.locator(this.finishButton).click();
  }

  // Method: Get complete header text
  async getCompleteHeaderText() {
    return await this.page.locator(this.completeHeader).textContent();
  }

  // Method: Check if pony express image is visible
  async isPonyExpressVisible() {
    return await this.page.locator(this.ponyExpressImage).isVisible();
  }
}

module.exports = CheckoutPage;