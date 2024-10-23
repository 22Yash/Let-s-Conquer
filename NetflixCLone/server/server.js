const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const movieRoutes = require('./routes/bollywoodMovies'); // Import movie routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/movies', movieRoutes); // Use movie routes

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
