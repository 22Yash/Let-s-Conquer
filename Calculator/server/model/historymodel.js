const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    operation: { type: String, required: true },
    result: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
