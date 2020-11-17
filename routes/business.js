const express = require('express');
const router = express.Router();
const business = require('../models/businesses');

//Get All Business req
router.get('/', async (req,res) => {
    try {
        const businesses = business.find();
        res.send(businesses);
    } 
    catch(err) {
        res.send({message: err});
    }
});

//Post New Business req
router.post('/', (req,res) => {

});

//Get Specific Business req
router.get('/:id', (req,res) => {
    
});

//Get Business reviews
router.get('/reviews', (req,res) => {

});

//Post Business reviews
router.post('/reviews', (req,res) => {

});

module.exports = router;