const mongoose = require('mongoose'); // necessary for creating the schema

const movieSchema= new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
});

// gotta create the model
const Movie = mongoose.model("Movie", movieSchema);

// since our formule is going to be exported, this is how we indicate it
module.exports = Movie;

