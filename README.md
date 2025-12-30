# 🚀 BeyondChats Full Stack Internship Assignment

This is my submission for the **BeyondChats Full Stack Web Developer Internship** assignment.  
The project automates blog enhancement using AI and provides a complete system consisting of:

- Laravel Backend (API + Database)
- Node.js Automation Script (Scraping + AI Processing)
- Frontend UI (View Original + Updated Blogs)

---

## 🧠 Project Overview 

This project works like a smart content enhancer 👇

1️⃣ Fetches 5 oldest BeyondChats blogs  
2️⃣ Stores them safely into database  
3️⃣ Uses Node.js to
- search similar blogs online
- scrape useful content
- send everything to AI
- get improved rewritten content
- attach reference links

4️⃣ Saves final AI improved article back in DB  
5️⃣ Frontend displays:
- updated blogs
- not updated blogs
- full article with references

**So basically → I built an intelligent AI Content Upgrading System.**

---

## 🏗️ Project Folder Structure

beyondchats-assignment/
├── backend-laravel → Laravel REST API + DB
├── beyond-node → AI Automation Script
└── frontend → Blog Viewer UI

---

# ⚙️ Step-By-Step Installation Guide

Follow these steps to run everything properly 👇

---

## 1️⃣ Backend – Laravel API Setup

### 📌 Go to backend folder
cd backend-laravel

shell
Copy code

### 📦 Install dependencies
composer install

shell
Copy code

### 🔧 Create .env file
cp .env.example .env

graphql
Copy code

### 🗄️ Setup Database in `.env`
DB_DATABASE=beyondchats
DB_USERNAME=root
DB_PASSWORD=

shell
Copy code

### 🔑 Generate app key
php artisan key:generate

shell
Copy code

### 🏗️ Run migrations
php artisan migrate

shell
Copy code

### ▶️ Start Laravel Server
php artisan serve

nginx
Copy code

Laravel runs at:
👉 http://127.0.0.1:8000

### 📡 API Endpoints
GET /api/articles
GET /api/articles/{id}
PUT /api/articles/{id}

yaml
Copy code

---

## 2️⃣ Node.js AI Automation Script

### 📌 Go to node project
cd beyond-node

shell
Copy code

### 📦 Install Dependencies
npm install

shell
Copy code

### 🔐 Add AI Key in `.env`
OPENROUTER_KEY=your_key_here

shell
Copy code

### ▶️ Run Script
node index.js

yaml
Copy code

This will:
✔ Fetch Blogs  
✔ Search Internet  
✔ Scrape References  
✔ Call AI  
✔ Rewrite Content  
✔ Save Updated Article  
✔ Add Reference Sources

---

## 3️⃣ Frontend Setup

No heavy framework. Just static frontend.

### ▶️ Simply Open
frontend/index.html

yaml
Copy code

Or run using Live Server.

### ⭐ Frontend Features
✔ Blog List  
✔ Shows Updated / Not Updated  
✔ Click to open article  
✔ Full AI improved article  
✔ Reference section visible

---

# 🧩 Tech Stack

### Backend
- Laravel
- MySQL

### Automation / AI
- Node.js
- Axios
- Cheerio (Scraping)
- AI API

### Frontend
- HTML
- CSS
- JavaScript

---

# 📌 Requirements Covered

✔ Scraped 5 oldest BeyondChats blogs  
✔ Stored in database  
✔ CRUD APIs created  
✔ Node JS Phase-2 completed  
✔ Found related blogs via internet  
✔ Scraped reference data  
✔ AI rewritten content generated  
✔ Database updated  
✔ References appended at bottom  
✔ Frontend built + working  
✔ Shows updated and not updated blogs  

---

# 🧠 System Architecture & Data Flow

BeyondChats Website
↓
Laravel Backend (Store Blogs)
↓
Node Script

Searches Google

Scrapes content

Sends to AI

Gets rewritten content
↓
Updates DB (with references)
↓
Frontend UI Displays

yaml
Copy code

---

# 🖼️ Screenshots (Optional Section – Recommended)

You can add after running:

- Backend Working
- Node Script Running
- Frontend UI
- Article Page Example

---

# 🎯 Key Learning & Highlights

✔ Full Stack Implementation  
✔ Web Scraping  
✔ AI Integration  
✔ Real-world automation problem  
✔ Database + API + Frontend integration  
✔ Error handling + Logging  
✔ Clean & understandable code  

---

# 🙏 Final Note

Thank you BeyondChats team for this amazing assignment opportunity.  
This project showcases my ability in:

- Backend Development
- Node Automation
- AI Integration
- Frontend Development
- System Architecture Thinking

😊 Happy to discuss improvements and enhancements!

