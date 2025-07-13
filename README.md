# Customer Loyalty App

A simple command-line application for managing a customer loyalty program.  
You can earn and redeem loyalty points for your customers.

## Features

- Earn points for a customer
- Redeem points for a customer (with balance check and warning)
- View current points balance

## Requirements

- Node.js (recommended: version 18, see [.nvmrc](.nvmrc))
- npm

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/customer-loyalty-app.git
   cd customer-loyalty-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

Run the app using:

```sh
npm start -- <earn|redeem> <customerId> <points>
```

**Examples:**

- Earn points:
  ```sh
  npm start -- earn alice 50
  ```

- Redeem points:
  ```sh
  npm start -- redeem alice 20
  ```

## Running Tests

To run unit tests:

```sh
npm test
```

## Project Structure

```
src/
  index.ts                # Main CLI entry point
  services/
    LoyaltyService.ts     # Core loyalty logic
    LoyaltyService.test.ts# Unit tests
dist/                     # Compiled output (after build)
```

## Development

- Build the project:
  ```sh
  npm run build
  ```

- Use [nvm](https://github.com/nvm-sh/nvm) to set the correct Node.js version:
  ```sh
  nvm
