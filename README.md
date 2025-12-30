# BeyondChats — Assignment (Monorepo)

This repository contains the project I built for the BeyondChats assignment. It is organized as a monorepo containing three separate parts.

I checked the repository at commit `bd207c87c8f033d22e09c45798dfc578cd8ad85d` and wrote this README so anyone can understand what is inside and how to run it.

---

## 🚀 Project Overview
This is a full-stack system consisting of three components working together:

1.  **Laravel Backend (`beyond-backend`):** The core API logic, database management, and authentication built with PHP Laravel.
2.  **Node Service (`beyond-node`):** A Node.js based service that acts as a supporting server for automation or additional logic.
3.  **Frontend (`beyond-frontend`):** A simple UI made with HTML pages that connects to the Backend and Node services.

### Key Features Demonstrated:
* Backend API handling and routing.
* Node.js service integration.
* Simple frontend-to-backend interaction.

---

## 📁 Project Structure
```text
beyondchats-assignment/
├─ beyond-backend/      # Laravel core files (API, DB, Routes)
├─ beyond-node/         # Node.js service logic
├─ beyond-frontend/     # Static HTML pages
└─ README.md            # Project documentation
