# 📝 Simple Blogging Platform Backend

This is the backend service for a minimalist blogging platform. Built using Node.js and Express, it provides essential RESTful APIs for managing blog posts, users, and comments.

## 🚀 Features

- 🖊️ Create, read, update, and delete blog posts
- 👥 User authentication & authorization
- 💬 Commenting system
- 📦 MongoDB database integration
- 📜 Clean and structured API responses

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)** for auth
- **dotenv** for config management

## 📚 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| GET    | /posts         | Fetch all blog posts     |
| POST   | /posts         | Create a new post        |
| PUT    | posts/:id      | Update a post            |
| DELETE | /posts/:id     | Delete a post            |
| POST   | /signup        | Register a new user      |
| POST   | /login         | Login user               |


## 🔧 Setup Instructions

1. Clone this repo  
   ```bash
   git clone https://github.com/YOUR_USERNAME/simple-blog-backend.git

2 Install dependencies
npm install
3 Add a .env file
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
4 Start the server
npm start

👨‍💻 Author
Created by Ekram Asrar — feedback and contributions welcome!
