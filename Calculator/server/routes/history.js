const express = require('express');
const router = express.Router();
const History = require('../model/historymodel');

// POST route to save calculation history
router.post('/', async (req, res) => {
    const { operation, result } = req.body;
    const newEntry = new History({ operation, result });
    await newEntry.save();
    res.json(newEntry);
});

// GET route to retrieve calculation history
router.get('/', async (req, res) => {
    const history = await History.find().sort({ timestamp: -1 });
    res.json(history);
});

module.exports = router;
