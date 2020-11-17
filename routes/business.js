const express = require('express');
const router = express.Router();
const Business = require('../models/businesses');
const { body, validationResult } = require('express-validator');


//Get All Business req
router.get('/', async (req,res) => {
    try {
        const businesses = await Business.find();
        res.send(businesses);
    } 
    catch(err) {
        res.send({message: err});
    }
});

//Post New Business req
router.post('/', [
    body('outlet').isLength({ min: 5, max: 20}).withMessage('Outlet must be between 5-30 characters'),
    body('address').isLength({min: 12, max: 40}).withMessage('Adress must be between 12 - 40 characters'),
    body('category').isLength({min: 3, max: 20}).withMessage('Category must be between 3 - 20 characters'),
    body('location').isLength({min: 4, max: 15}).withMessage('Location be between 4 - 15 characters'),
    body('telephone').isLength({min: 11}).withMessage('Telephone must be at least 11 characters').isNumeric().withMessage('Telephone must contain only number')
] , async (req,res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
       return res.status(400).send({errors: errors.array()});
    };

    //Create Business
    const business = new Business ({
        outlet: req.body.outlet,
        address: req.body.address,
        category: req.body.category,
        location: req.body.location,
        telephone: req.body.telephone
    });

    //Save Business
    try {
        const savedBusiness = await business.save();
        res.send(savedBusiness);
    } 
    catch (err) {
        res.send({message: err});
    }

});

//Get Specific Business req
router.get('/:businessId', async (req,res) => {
    try {
        const business =  await Business.findById(req.params.businessId);
        res.json(business);
    }
    catch (err) {
        res.json({message: err})
    }
});

//Delete Specific Business
router.delete('/:businessId', async (req,res) => {
    
    try {
        const deleteBusiness = await Business.deleteOne({_id: req.params.businessId});
        res.json(deleteBusiness)
    }
    catch (err) {
        res.json({message: err});
    }
});

//Update a Business
router.patch('/:businessId', async (req, res) => {
    try {
        const updateBusiness = await Business.updateOne(
            {_id: req.params.businessId},
            {$set: {
                outlet: req.body.outlet,
                address: req.body.address,
                category: req.body.category,
                location: req.body.location,
                telephone: req.body.telephone
            }}
        );
        res.json(updateBusiness)
    } 
    catch (err) {
        res.send({message: err})
    }
});



//Get Business reviews
router.get('/reviews', (req,res) => {

});

//Post Business reviews
router.post('/reviews', (req,res) => {

});

module.exports = router;