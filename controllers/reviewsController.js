const Reviews = require('../models/reviews');
const { validationResult } = require('express-validator');




//POST NEW REVIEW
const postNewReview = async (req,res) => {
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
};







//GET ALL REVIEWS
const getAllReviews = async (req,res) => {
    try {
        const reviews = await Reviews.find();
        res.json(reviews)
    } 
    catch(err) {
        res.send({message: err});
    }
}


module.exports = {
    getAllReviews,
    postNewReview
};