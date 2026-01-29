class LoginPage {
  constructor(page) {
    this.page = page;
    
    // Selectors
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  // Method: Open login page
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Method: Login with credentials
  async login(username, password) {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  // Method: Check if login form is visible
  async isLoginFormVisible() {
    const usernameVisible = await this.page.locator(this.usernameInput).isVisible();
    const passwordVisible = await this.page.locator(this.passwordInput).isVisible();
    const buttonVisible = await this.page.locator(this.loginButton).isVisible();
    return usernameVisible && passwordVisible && buttonVisible;
  }

  // Method: Get error message element
  getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }
}

module.exports = LoginPage;