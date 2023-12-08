const express = require('express');
const router = express.Router();

//bro Oma require the goddam MODEL!!!!
const Movie= require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//GET movies page
router.get('/movies', (req, res ,next) => {
    //read the movies
    Movie.find()
    //select the properties we want
    .select({title:1, image:1})
    .then((response)=>{
        //render the movies page
        console.log(response);
        res.render('movies', {movie: response});
    })
    .catch((err)=>console.log('An error occured while rendering the movies', err))
})

//GET movies details
router.get('/movie/:id', (req, res, next)=>{
    const movieSelection=req.params.id;

    Movie.findOne({_id: movieSelection})
     .then((response)=>{
        console.log(response)
        res.render('movie-description', {selectedMovie: response})
     })
    .catch((err)=>console.log('error while rendering movies details', err))
})

module.exports = router;
