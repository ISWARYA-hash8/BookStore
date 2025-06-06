# 📚 Bookstore MERN App

A full-stack **Bookstore Web Application** built using the **MERN stack (MongoDB, Express, React, Node.js)** that allows users to perform full **CRUD operations** (Create, Read, Update, Delete) on books in the store.

---

## 🧰 Tech Stack

- **Frontend:** React.js, Axios, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)

---

## ⚙️ Features

- 📖 View all books (Read)
- ➕ Add a new book (Create)
- ✏️ Edit book details (Update)
- ❌ Delete a book (Delete)
- 🔎 Simple and clean UI

---

## 🛠️ CRUD Operations Overview

### ✅ Create

- **Endpoint:** `POST /api/books`
- **Functionality:** Adds a new book to the database.
- **Required Fields:** `title`, `author`, `genre`, `price`, `description`

### 📖 Read

- **Endpoint:** `GET /api/books`
- **Functionality:** Fetch and display all books.

- **Endpoint:** `GET /api/books/:id`
- **Functionality:** Fetch and display a specific book by ID.

### 📝 Update

- **Endpoint:** `PUT /api/books/:id`
- **Functionality:** Update book details using the ID.

### 🗑️ Delete

- **Endpoint:** `DELETE /api/books/:id`
- **Functionality:** Delete a specific book from the database.

---

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bookstore-mern.git
cd bookstore-mern
