const { body, check} = require('express-validator');


const postBusinessVal = [
    check('outlet', 'Outlet name is required').notEmpty(),
    body('outlet').isLength({ min: 5, max: 20}).withMessage('Outlet must be between 5-30 characters'),
    check('address', 'Address is required').notEmpty(),
    body('address').isLength({min: 12, max: 40}).withMessage('Address must be between 12 - 40 characters'),
    check('category', 'Category is required').notEmpty(),
    body('category').isLength({min: 3, max: 20}).withMessage('Category must be between 3 - 20 characters'),
    check('location', 'Location is required').notEmpty(),
    body('location').isLength({min: 4, max: 15}).withMessage('Location be between 4 - 15 characters'),
    check('telephone', 'Telephone detail is required').notEmpty(),
    body('telephone').isLength({min: 11}).withMessage('Telephone must be at least 11 characters'),
    body('telephone').isNumeric().withMessage('Telephone must contain only number')
]; 


module.exports = {
    postBusinessVal
};