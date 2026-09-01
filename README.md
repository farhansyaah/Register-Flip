# Playwright Automation Assessment Flip 🚀

## Overview

This project contains an end to end UI automation framework built using **Playwright** and **TypeScript**. The framework follows the **Page Object Model (POM)** design pattern to improve code readability, maintainability, and reusability.

### Architecture 📁

The project is organized using the **Page Object Model (POM)** architecture:

- **pages/**  
  Contains page objects, including locators and page-specific actions.

- **steps/**  
  Contains reusable business flows by combining methods from page objects.

- **testsuites/**  
  Contains end-to-end test scenarios and assertions.

- **shared/common/**  
  Contains reusable utility methods that are shared across multiple test cases.

- **shared/constant/**  
  Stores application constants such as URLs, credentials, timeout values, expected messages, product names, user information, and application paths.


This structure separates UI interactions from test logic, making the framework easier to maintain and extend.

---

# Setup Instructions 🛠️

### Prerequisites

Make sure the following software is installed:

- Node.js (v18 or later)
- npm

### Install Playwright Browsers

```bash
npx playwright install
```
# How to Run Tests ▶️

Run all test cases:

```bash
npx playwright test


## Assumptions Made 📌

The automation framework was developed based on the following assumptions:

- The application under test is available and accessible.
- The test account credentials defined in `shared/constant/const.ts` are valid.
- Test data such as product information and user details remain unchanged during execution.
- Internet connectivity is available during test execution.
- No CAPTCHA or third-party authentication blocks the automation flow.
- The application UI and element locators remain consistent throughout the execution.

# Technologies Used
- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
---

# Author 👨‍💻

Muhammad Dimas Farhansyah
