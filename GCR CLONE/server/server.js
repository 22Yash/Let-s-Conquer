const express = require('express');
const app = express();
const dotenv = require('dotenv');
require('dotenv').config();
const cors = require('cors');

// Connect to DB and import models
require('./db/conn');
const Student = require('./model/studentModel');

// Import routes
const assignmentRoutes = require('./routes/assignment'); // Import the routes

const PORT = process.env.PORT || 3000;  // Default to 3000 if PORT is not set

// Middleware for CORS
app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from this origin
    methods: 'GET,POST,PUT,DELETE',   // Specify allowed methods
    allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
}));

// Middleware for parsing JSON request body
app.use(express.json());



// Routes
app.use('/submit', assignmentRoutes);  // Use assignment routes

// Example GET route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Example middleware-protected route
app.get('/submit', (req, res) => {
    res.status(200).json({ message: "Assignment successfully created" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
