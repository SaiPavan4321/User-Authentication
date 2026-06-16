# 🔐 User Authentication System

A full-stack User Authentication System built using **Node.js**, **Express.js**, **MongoDB Atlas**, **JWT**, and **bcrypt.js**.

This project allows users to:

- Register a new account
- Login securely
- Access a protected dashboard
- View profile information
- Logout securely

The application demonstrates complete authentication flow from frontend to backend with MongoDB database integration.

---

# 🚀 Features

## User Registration

- Create a new account
- Email uniqueness validation
- Password length validation
- Confirm password validation
- Simple captcha verification

## User Login

- Secure login using email and password
- Password verification using bcrypt
- JWT token generation

## Dashboard

- Protected dashboard page
- Displays user information
- Accessible only to authenticated users

## Logout

- Removes JWT token from browser storage
- Redirects user to login page

## Security

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Environment variables for sensitive data

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- JWT (JSON Web Token)
- bcrypt.js

## Tools

- Postman
- VS Code
- Git & GitHub

---

# 📁 Project Structure

```
user-authentication
│
├── backend
│   │
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │   └── authController.js
│   │   │
│   │   ├── middleware
│   │   │   └── authMiddleware.js
│   │   │
│   │   ├── models
│   │   │   └── User.js
│   │   │
│   │   ├── routes
│   │   │   └── authRoutes.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
└── frontend
    │
    ├── index.html
    ├── dashboard.html
    ├── style.css
    ├── dashboard.css
    ├── script.js
    └── dashboard.js
```

---

# 🗄️ Database Schema

## User Collection

```javascript
{
  name: String,
  email: String,
  password: String
}
```

Example:

```json
{
  "_id": "64f8d12...",
  "name": "Eswar",
  "email": "eswar@gmail.com",
  "password": "$2b$10$..."
}
```

---

# 🔐 Authentication Flow

## Registration Flow

```text
User
 ↓
Signup Form
 ↓
Backend API
 ↓
Check Existing User
 ↓
Hash Password
 ↓
Save User
 ↓
MongoDB
```

---

## Login Flow

```text
User
 ↓
Login Form
 ↓
Backend API
 ↓
Verify User
 ↓
Compare Password
 ↓
Generate JWT
 ↓
Send Token
```

---

## Dashboard Flow

```text
Dashboard
 ↓
Read JWT Token
 ↓
Protected Route
 ↓
Verify Token
 ↓
Fetch User Data
 ↓
Display User Information
```
---

# 🔒 Security Implementation

## Password Hashing

Passwords are encrypted using:

```javascript
bcrypt.hash()
```

Example:

```text
12345678
```

Stored as:

```text
$2b$10$V9...
```

---

## JWT Authentication

JWT tokens are generated using:

```javascript
jwt.sign()
```

and verified using:

```javascript
jwt.verify()
```

---

## Protected Routes

Middleware checks:

```text
Token Available?
      ↓
Verify Token
      ↓
Allow Access
```

---

# 🎯 Learning Outcomes

Through this project, I learned:

- Node.js fundamentals
- Express.js routing
- MongoDB Atlas integration
- Mongoose models
- REST API development
- Password hashing using bcrypt
- JWT authentication
- Middleware implementation
- Frontend and backend integration
- Protected routes
- Debugging authentication workflows

---

# 🔮 Future Improvements

- Password Reset
- Email Verification
- Profile Picture Upload
- Role-Based Authentication
- Refresh Tokens
- Deployment using Render/Vercel
- User Profile Editing

---

# 👨‍💻 Author

**SaiPavan**

Built as a learning project to understand:

- Backend Development
- Authentication Systems
- MongoDB Integration
- MERN Stack Fundamentals

---

# ⭐ Support

If you found this project useful:

- Star the repository ⭐
- Fork the project 🍴
- Contribute improvements 🚀
