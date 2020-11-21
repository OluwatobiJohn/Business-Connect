const { body, check} = require('express-validator');



const postReviewVal = [
    check('name', 'Name is required').notEmpty(),
    body('name').isLength({ min: 5, max: 20}).withMessage('Name must be between 5-30 characters'),
    check('comment', 'Comment is required').notEmpty(),
    body('comment').isLength({min: 12, max: 100}).withMessage('Comment must be between 12 - 100 characters'),
    check('recommendation', 'Recommendation is required').notEmpty(),
    body('recommendation').isLength({min: 3, max: 30}).withMessage('Recommendation must be between 3 - 20 characters'),
]


module.exports = {
    postReviewVal
};