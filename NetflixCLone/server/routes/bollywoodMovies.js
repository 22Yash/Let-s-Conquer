const express = require('express');
const fs = require('fs');
const router = express.Router();

// Route to get all movies
const path = require('path');

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../data/movies.json'); // Adjust path as necessary
    fs.readFile(filePath, (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading movie data' });
        }
        const movies = JSON.parse(data);
        res.json(movies);
    });
});



module.exports = router;
