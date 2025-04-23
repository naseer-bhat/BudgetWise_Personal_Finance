# BudgetWise Personal Finance - Backend

## Overview

This is the backend service for the BudgetWise Personal Finance application. It provides APIs for managing user accounts, budgets, transactions, and financial reports.

## Features

- User authentication and authorization
- Budget creation and management
- Transaction tracking
- Financial reporting and analytics
- RESTful API design

## Technologies Used

- **Programming Language**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv

## Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/naseer-bhat/BudgetWise_Personal_Finance.git
  cd BudgetWise_Personal_Finance/backEnd
  ```

2. Install dependencies:
  ```bash
  npm install
  ```

3. Set up environment variables:
  Create a `.env` file in the root directory and configure the following:
  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

4. Start the server:
  ```bash
  npm start
  ```


  | Method | Endpoint              | Description                     |
  |--------|-----------------------|---------------------------------|
  | POST   | `/api/auth/login`     | User login                      |
  | POST   | `/api/auth/signup`    | User registration               |
  | GET    | `/api/budget`         | Get all budgets                 |
  | POST   | `/api/budget`         | Create a new budget             |
  | GET    | `/api/goal`           | Get all financial goals         |
  | POST   | `/api/goal`           | Create a new financial goal     |
  | GET    | `/api/expense`        | Get all expenses                |
  | POST   | `/api/expense`        | Add a new expense               |

## Folder Structure

```
backEnd/
src
├── controllers/    # API logic
├── models/         # Database schemas
├── routes/         # API routes
├── middleware/     # Middleware functions
├── config/         # Configuration files
├── utils/          # Utility functions
└── app.js          # Entry point

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).