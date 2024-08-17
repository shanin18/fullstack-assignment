# Fullstack Assignment

## Description

This project is a fullstack application designed to manage "Help Center" cards. It consists of a backend API for handling data and a frontend user interface to interact with the API.

## Project Structure

- `backend/` - Contains the Node.js backend application.
- `frontend/` - Contains the React frontend application.

## Getting Started

### Backend

1. **Navigate to the `backend` directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   Copy code
   npm install
   ```

3. **Set up environment variables:**

- Create a .env file in the backend directory with the following content:

   ```bash
   env
   Copy code
   MONGO_URI=your_mongodb_atlas_connection_string
   Replace your_mongodb_atlas_connection_string with your actual MongoDB Atlas connection string.
   ```

4. **Run the backend server:**

   ```bash
   Copy code
   npm start
   The server will be running at http://localhost:3000.
   ```

5. **API Endpoints:**

-Create a card:
 -POST /cards
 -Request body: 
   ```bash
 { "title": "Card Title", "description": "Card Description" }
   ```

 -Creates a new card in the database.

-Get all cards:
 -GET /cards
 -Returns a list of all cards. 

-Get a specific card by title:
 -GET /cards/:title
 -Returns the details of a specific card by its title. 



### Frontend
1. **Navigate to the frontend directory:**

   ```bash
   Copy code
   cd frontend

2. **Install dependencies:**

   ```bash
   Copy code
   npm install
   ```
4. **Run the frontend application:**

   ```bash
   Copy code
   npm run dev
   The application will be running at http://localhost:5173.
   ```

5. **Features:**

-**Responsive Navbar:** Displays the project name "Abstract", the current page location, and a "Submit a Request" button.
-**Banner:** Includes a search input field and a heading.
-**Input Field:** Allows users to find the card easily.
-**Modal:** Allows users to add new cards with a title and description, and submit them to the backend API.
-**Footer:** Contains links to various sections including "Abstract", "Resources", "Community", "Company", and a copyright message.

## Folder Structure

### Backend
 -backend/
  -models/ - Contains the card model.
   -card.js
  -index.js - Entry point for the backend server.

### Frontend
 -frontend/
  -src/
   -components/ - Contains reusable components (e.g., Navbar, Footer, Modal).
   -App.jsx - Main application component.
   -main.jsx - Entry point for the frontend application.
   -index.css - Tailwind CSS styles.
  -vite.config.js - Vite configuration file.

## Usage
 *Start the backend server:

 Navigate to the backend directory and run:

   ```bash
   Copy code
   npm start
   ```
 *Start the frontend application:

Navigate to the frontend directory and run:

   ```bash
   Copy code
   npm run dev
   ```
 *Access the application:

Open your web browser and go to http://localhost:5173 to view the frontend. The frontend will interact with the backend server running at http://localhost:3000.

## Contributing
Feel free to fork the repository and submit pull requests. If you encounter any issues or have suggestions, please open an issue on GitHub.

