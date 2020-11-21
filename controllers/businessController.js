const Business = require('../models/businesses');
const { validationResult } = require('express-validator')



//POST BUSINESS
const postNewBusiness = async (req,res) => {
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

}; 




//UPDATE BUSINESS
const updateBusiness = async (req, res) => {
    try {
        const update = await Business.updateOne(
            {_id: req.params.businessId},
            {$set: {
                outlet: req.body.outlet,
                address: req.body.address,
                category: req.body.category,
                location: req.body.location,
                telephone: req.body.telephone
            }}
        );
        res.json(update)
    } 
    catch (err) {
        res.send({message: err})
    }
};




//DELETE BUSINESS
const deleteBusiness = async (req,res) => {
    
    try {
        const delBusiness = await Business.deleteOne({_id: req.params.businessId});
        res.json(delBusiness)
    }
    catch (err) {
        res.json({message: err});
    }
};




//GET SPECIFIC BUSINESS
const getSpecificBusiness = async (req,res) => {
    try {
        const business =  await Business.findById(req.params.businessId);
        res.json(business);
    }
    catch (err) {
        res.json({message: err})
    }
};





//GET BUSINESSES
const getAllBusiness = async (req,res) => {
    try {
        const businesses = await Business.find();
        res.send(businesses);
    } 
    catch(err) {
        res.send({message: err});
    }

};


module.exports = { 
    postNewBusiness,
    updateBusiness,
    deleteBusiness,
    getSpecificBusiness,
    getAllBusiness,
};