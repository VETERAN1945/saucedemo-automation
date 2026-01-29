# 🧪 SauceDemo Test Automation

Comprehensive test automation project for the SauceDemo e-commerce website using Playwright, JavaScript, and **Page Object Model** design pattern.

## 📋 Project Overview

This project demonstrates professional test automation skills through a complete test suite for [SauceDemo](https://www.saucedemo.com/), covering critical user workflows including authentication, shopping cart operations, checkout process, and product sorting. The project implements **Page Object Model (POM)** pattern for maintainable and scalable test code.

## 🛠️ Technologies Used

- **Playwright** - Modern end-to-end testing framework
- **JavaScript** - Programming language
- **Node.js** - Runtime environment
- **Page Object Model** - Design pattern for test automation
- **Git & GitHub** - Version control

## ✨ Features

- ✅ **12 Comprehensive Tests** covering key functionality
- ✅ **Page Object Model (POM)** implementation with 4 page classes
- ✅ **Object-Oriented Architecture** for maintainable code
- ✅ **Detailed Console Logging** for debugging
- ✅ **Professional Code Comments** in English
- ✅ **Positive & Negative Test Scenarios**
- ✅ **Multiple Assertion Types**
- ✅ **Reusable Page Classes** for code efficiency

## 📂 Project Structure
```
saucedemo-automation/
├── pages/                      # Page Object Model classes
│   ├── LoginPage.js           # Login page object
│   ├── InventoryPage.js       # Products page object
│   ├── CartPage.js            # Shopping cart page object
│   └── CheckoutPage.js        # Checkout page object
├── tests/                      # Test files
│   ├── login.spec.js          # Login tests (positive & negative)
│   ├── cart.spec.js           # Add/Remove cart operations
│   ├── multiple-items.spec.js # Multiple items handling
│   ├── checkout.spec.js       # Complete checkout flow
│   ├── sorting.spec.js        # Product sorting tests
│   └── logout.spec.js         # Logout functionality
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
```

## 🏗️ Page Object Model Implementation

The project uses **Page Object Model (POM)** design pattern for better code organization and maintainability:

### **LoginPage.js**
- Handles login page interactions
- Methods: `goto()`, `login()`, `isLoginFormVisible()`, `getErrorMessage()`

### **InventoryPage.js**
- Manages product page operations
- Methods: `addItemToCart()`, `removeItemFromCart()`, `getCartCount()`, `sortBy()`, `getAllProductNames()`, `getAllProductPrices()`

### **CartPage.js**
- Controls shopping cart functionality
- Methods: `getCartItemsCount()`, `clickCheckout()`

### **CheckoutPage.js**
- Handles checkout process
- Methods: `fillCheckoutInfo()`, `clickContinue()`, `clickFinish()`, `getCompleteHeaderText()`

## 🧪 Test Coverage

### 1. **Login Tests** (`login.spec.js`)
- ✅ Successful login with valid credentials
- ✅ Failed login with invalid credentials
- ✅ Error message validation

### 2. **Shopping Cart Tests** (`cart.spec.js`)
- ✅ Add single item to cart
- ✅ Remove item from cart
- ✅ Cart badge validation

### 3. **Multiple Items** (`multiple-items.spec.js`)
- ✅ Add multiple items (3+)
- ✅ Cart count validation
- ✅ Cart page verification

### 4. **Checkout Flow** (`checkout.spec.js`)
- ✅ Complete end-to-end checkout
- ✅ Form validation
- ✅ Order confirmation

### 5. **Sorting Tests** (`sorting.spec.js`)
- ✅ Sort by name (A-Z)
- ✅ Sort by name (Z-A)
- ✅ Sort by price (low to high)
- ✅ Sort by price (high to low)

### 6. **Logout Tests** (`logout.spec.js`)
- ✅ Successful logout
- ✅ Re-login after logout

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation Steps

1. **Clone the repository:**
```bash
git clone https://github.com/VETERAN1945/saucedemo-automation.git
cd saucedemo-automation
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

## ▶️ Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run specific test file:
```bash
npx playwright test login.spec.js
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

### View test report:
```bash
npx playwright show-report
```

## 📊 Test Results

All 12 tests pass successfully:
```
✓ 12 tests passed
  ├── Login Tests (2)
  ├── Cart Tests (2)
  ├── Multiple Items (1)
  ├── Checkout Flow (1)
  ├── Sorting Tests (4)
  └── Logout Tests (2)
```

## 🎯 Skills Demonstrated

- End-to-end test automation
- **Page Object Model (POM) design pattern**
- **Object-Oriented Programming (OOP) in test automation**
- JavaScript/Node.js proficiency
- Playwright framework expertise
- Test case design (positive/negative scenarios)
- Element selection strategies (ID, class, data-test attributes)
- Assertions and validations
- Form interactions
- Navigation testing
- **Code maintainability and scalability**
- **Reusable component architecture**
- Professional code documentation
- Git version control

## 📈 Future Enhancements

- [ ] Implement API testing
- [ ] Add visual regression testing
- [ ] Create CI/CD pipeline (GitHub Actions)
- [ ] Add detailed HTML reports with Allure
- [ ] Implement data-driven testing
- [ ] Add performance testing capabilities
- [ ] Expand test coverage to additional user flows

## 👤 Author

**Max Badyula** - Junior QA Automation Engineer

## 📞 Contact

- GitHub: [@VETERAN1945](https://github.com/VETERAN1945)
- LinkedIn: [Maximum Badula](https://www.linkedin.com/in/maximum-badula-0a60b7271/)

## 📄 License

This project is for educational and portfolio purposes.

---

⭐ **Star this repository** if you found it helpful!
