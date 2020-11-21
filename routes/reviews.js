const express = require('express');
const router = express.Router();
const Reviews = require('../controllers/reviewsController');
const Validator = require('../middlewares/reviewsValidator');




//Get Business reviews
router.get('/', Reviews.getAllReviews);

//Post Business reviews
router.post('/', Validator.postReviewVal , Reviews.postNewReview);

module.exports = router;