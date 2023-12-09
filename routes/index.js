const express = require('express');
const router = express.Router();

//bro Oma require the goddam MODEL!!!!
const Movie= require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;
