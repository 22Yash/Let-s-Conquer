const mongoose = require('mongoose');

const bollywoodMovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true },
});

const BollywoodMovie = mongoose.model('BollywoodMovie', bollywoodMovieSchema);

module.exports = BollywoodMovie;
