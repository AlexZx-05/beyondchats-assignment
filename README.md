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
2️⃣ Stores them safely in database  
3️⃣ Uses Node.js to:
- Search similar blogs online  
- Scrape useful content  
- Send everything to AI  
- Receive improved rewritten content  
- Automatically add reference links  

4️⃣ Saves final AI improved article back in DB  
5️⃣ Frontend displays:
- Updated blogs
- Not updated blogs
- Full rewritten article with references

👉 **In short: This is an AI-Powered Content Upgrading System.**

---

## 🏗️ Project Folder Structure

beyondchats-assignment/
├── backend-laravel → Laravel REST API + MySQL Database
├── beyond-node → AI Automation Script
└── frontend → Blog Viewer UI

yaml
Copy code

---

# ⚙️ Step-By-Step Installation Guide

Follow these steps to run everything properly 👇

---

## 1️⃣ Backend – Laravel API Setup

### Go to backend folder
cd backend-laravel

shell
Copy code

### Install dependencies
composer install

shell
Copy code

### Create .env file
cp .env.example .env

graphql
Copy code

### Setup Database in `.env`
DB_DATABASE=beyondchats
DB_USERNAME=root
DB_PASSWORD=

shell
Copy code

### Generate app key
php artisan key:generate

shell
Copy code

### Run migrations
php artisan migrate

shell
Copy code

### Start Laravel Server
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

### Go to node project
cd beyond-node

shell
Copy code

### Install Dependencies
npm install

shell
Copy code

### Add AI Key in `.env`
OPENROUTER_KEY=your_key_here

shell
Copy code

### Run Script
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

### Open
frontend/index.html

yaml
Copy code

(or open using Live Server)

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
✔ Phase-2 fully completed  
✔ Found similar blogs online  
✔ Scraped reference blogs  
✔ AI rewritten content generated  
✔ Database updated  
✔ Reference sources appended  
✔ Frontend built & working  
✔ Shows updated vs not updated blogs  

---

# 🧠 System Architecture & Data Flow

BeyondChats Website
↓
Laravel Backend (Stores Blogs)
↓
Node Script
→ Searches Google
→ Scrapes Reference Sites
→ Sends to AI
→ Gets Improved Content
↓
Updates Database (With References)
↓
Frontend UI Displays Everything

yaml
Copy code

---

# 🎯 What Recruiters Can Test

1️⃣ Run Laravel backend  
2️⃣ Run migrations  
3️⃣ Run Node AI Script  
4️⃣ Open Frontend  
5️⃣ Verify Updated + Not Updated Blogs  
6️⃣ Open any blog → See rewritten article + references  

Everything works 🎉

---

# 🖼️ Screenshots
(You can add later — backend, script, UI, article preview)

---

# 🙏 Final Note

Thank you BeyondChats team for this amazing assignment opportunity.  
This project demonstrates:

- Backend Development
- Node Automation
- AI Integration
- Database + API Skills
- Frontend Development
- System Architecture Understanding

😊 Happy to discuss improvements & optimizations!
