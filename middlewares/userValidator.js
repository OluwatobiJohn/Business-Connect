const { body, check} = require('express-validator');


const registerVal = [
    check('name', 'Please enter name').notEmpty(),
    check('email', 'Email is required').notEmpty(),
    check('email').isEmail().withMessage('Please enter a valid email'),
    check('password', 'Please enter Password').notEmpty(),
    check('password').isLength({min: 6, max: 20}).withMessage('Password must be between 6 - 20 characters'),
    check('password').isAlphanumeric().withMessage('Password must contain Alphabets and Numbers'),
    check('password2', 'Please re-enter Password').notEmpty(),
    check('password2').custom( async (password2, {req}) => {
        const password = req.body.password

        if (password !== password2) {
            throw new Error('Password must be the same')
        }
    })
];

module.exports = {
    registerVal
};