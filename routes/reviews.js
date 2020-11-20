const express = require('express');
const router = express.Router();
const Reviews = require('../models/reviews');
const { body, validationResult } = require('express-validator');


//Get Business reviews
router.get('/', async (req,res) => {
    try {
        const reviews = await Reviews.find();
        res.json(reviews)
    } 
    catch(err) {
        res.send({message: err});
    }
});

//Post Business reviews
router.post('/', [
    body('name').isLength({ min: 5, max: 20}).withMessage('Name must be between 5-30 characters'),
    body('comment').isLength({min: 12, max: 100}).withMessage('Comment must be between 12 - 100 characters'),
    body('recommendation').isLength({min: 3, max: 30}).withMessage('Recommendation must be between 3 - 20 characters'),
] , async (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
       return res.status(400).send({errors: errors.array()});
    };

    //Create comment
    const newReview = new Reviews ({
        name: req.body.name,
        comment: req.body.comment,
        recommendation: req.body.recommendation
    })
    //save comment
    try{
        const saveReview = await newReview.save();
        res.send(saveReview)
    }
    catch (err) {
        res.send({message: err})
    }
});

module.exports = router;