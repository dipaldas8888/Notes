# Notes App

A simple full-stack notes application built with React on the frontend and Express + MongoDB on the backend.

Live app:

- Frontend: https://notes-lilac-ten.vercel.app/
- Backend API: https://notes-0vw3.onrender.com/api

## Tech Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB Atlas
- API communication: REST

## Project Structure

```bash
assignment_techsteck/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
├── README.md
└── .git/
```

## Approach

This project follows a clean MERN-style architecture:

1. The frontend is a lightweight React app for creating, listing, and deleting notes.
2. The backend exposes REST endpoints for notes operations.
3. MongoDB stores note data persistently.
4. The frontend reads from a single environment variable, `VITE_API_URL`, so it can easily switch between local and deployed backend URLs.

## Local Setup

### 1. Clone the project

```bash
git clone <your-repository-url>
cd assignment_techsteck
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure backend environment

Create a `.env` file inside the `backend` folder with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secret_key
```

Example:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notesdb
PORT=5000
JWT_SECRET=supersecretkey
```

### 4. Start the backend

```bash
npm run dev
```

The API should run on:

```bash
http://localhost:5000
```

### 5. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 6. Configure frontend environment

Create a `.env` file inside the `frontend` folder with:

```env
VITE_API_URL=http://localhost:5000/api
```

If you are using the deployed backend instead:

```env
VITE_API_URL=https://notes-0vw3.onrender.com/api
```

### 7. Start the frontend

```bash
npm run dev
```

The app will run in development mode, usually at:

```bash
http://localhost:5173
```

## Production Build

### Frontend build

```bash
cd frontend
npm run build
```

### Backend run

```bash
cd backend
npm start
```

## Environment Notes

- Keep `.env` files private and do not commit them to Git.
- Use `.gitignore` to avoid pushing `node_modules`, build output, logs, and environment files.
- When deploying, set the environment variables in the hosting provider instead of hardcoding them in the source code.

## API Endpoints

### Notes

- `GET /api/notes` — fetch all notes
- `POST /api/notes` — create a new note
- `DELETE /api/notes/:id` — delete a note

## Useful Commands

### Backend

```bash
npm install
npm run dev
npm start
```

### Frontend

```bash
npm install
npm run dev
npm run build
```

## Notes

This app is intentionally simple and focused on the core CRUD flow for notes. It can be extended with features like edit note, search, categories, authentication, or a richer UI.
