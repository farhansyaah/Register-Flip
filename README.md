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

# Test Cases 🧪

The following test cases cover the critical scenarios for the Flip for Business registration flow.

| TC ID | Test Case | Expected Result | Priority |
|---|---|---|---|
| REG-001 | Register Business Perseorangan with valid data | Registration is successful and Email Verification page is displayed | Critical |
| REG-002 | Register Business Badan Usaha with valid data | Registration is successful and Email Verification page is displayed | Critical |
| REG-003 | Register with invalid password | Password validation message is displayed and registration cannot proceed | Critical |
| REG-004 | Register with invalid email format | "Format email salah" is displayed and registration cannot proceed | Critical |
| REG-005 | Register Badan Usaha without Business Name | Business Name validation is displayed and registration cannot proceed | High |
| REG-006 | Register Perseorangan with registered email | Registration is rejected and duplicate email validation is displayed | Critical |

## Automation Coverage

All test cases listed above are automated using Playwright.

| TC ID | Automation Status |
|---|---|
| REG-001 | ✅ Automated |
| REG-002 | ✅ Automated |
| REG-003 | ✅ Automated |
| REG-004 | ✅ Automated |
| REG-005 | ✅ Automated |
| REG-006 | ✅ Automated |

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
