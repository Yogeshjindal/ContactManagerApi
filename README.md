# Contact Manager API

A **Node.js** and **Express.js** RESTful API for managing contacts. Users can register, log in, and create their own contacts, with authentication and authorization handled via JWT tokens. Passwords are securely hashed, and users can only access their own data.

## Features
- User Authentication (Register/Login with hashed passwords)
- JWT-based Authorization
- Create, Read, Update, and Delete (CRUD) operations for contacts
- Users can only access their own contacts
- Error handling middleware for API consistency
- MongoDB database integration using Mongoose

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT Authentication**
- **Bcrypt for Password Hashing**

---

## Installation
### Prerequisites
- Node.js installed
- MongoDB setup (local or cloud)

### Steps
1. Clone this repository:
   ```sh
   git clone https://github.com/Yogeshjindal/ContactManagerApi.git
   cd ContactManagerApi
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_secret_key_for_jwt
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The API will be running at `http://localhost:5000`

---


## Folder Structure
```
ContactManagerApi/
│-- controllers/       # Business logic for users & contacts
│-- middleware/        # Authentication & error handling
│-- models/            # Mongoose models (User, Contact)
│-- routes/            # Express route handlers
│-- config/            # Database connection
│-- server.js          # Main server file
│-- .env               # Environment variables
│-- package.json       # Project metadata & dependencies
```

---

## Author
**Yogesh Jindal**
- GitHub: [Yogeshjindal](https://github.com/Yogeshjindal)
