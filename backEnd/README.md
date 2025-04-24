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

  ## API Endpoints

  | Method   | Endpoint                        | Description                              |
  |----------|---------------------------------|------------------------------------------|
  | POST     | `/api/auth/login`               | Authenticate user and return a token     |
  | POST     | `/api/auth/signup`              | Register a new user                      |
  | GET      | `/api/budget/getbudget`         | Retrieve all budgets                     |
  | GET      | `/api/budget/getbudget/:id`     | Retrieve a specific budget by ID         |
  | PUT      | `/api/budget/updatebudget/:id`  | Update an existing budget by ID          |
  | DELETE   | `/api/budget/deletebudget/:id`  | Delete a specific budget by ID           |
  | POST     | `/api/budget/create`            | Create a new budget                      |
  | GET      | `/api/goal/:userId`             | Retrieve all financial goals for a user  |
  | GET      | `/api/goal/user/:userId`        | Retrieve financial goals for a user      |
  | PATCH    | `/api/goal/:goalId`             | Partially update a financial goal by ID  |
  | PUT      | `/api/goal/:goalId`             | Update a financial goal by ID            |
  | DELETE   | `/api/goal/:goalId`             | Delete a financial goal by ID            |
  | DELETE   | `/api/goal/delete:goalId`       | Remove a financial goal by ID            |
  | POST     | `/api/goal/create`              | Create a new financial goal              |
  | GET      | `/api/expense/getall`           | Retrieve all expenses                    |
  | GET      | `/api/expense/:id`              | Retrieve a specific expense by ID        |
  | POST     | `/api/expense/create`           | Add a new expense                        |
  | PUT      | `/api/expense/update/:id`       | Update an existing expense by ID         |
  | DELETE   | `/api/expense/delete/:id`       | Delete a specific expense by ID          |
  |----------|---------------------------------|

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