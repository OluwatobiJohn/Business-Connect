const express = require('express');
const router = express.Router();
const Business = require('../controllers/businessController');
const { body, validationResult } = require('express-validator');
const Validator = require('../middlewares/businessValidator');
const jwt = require('../utilities/jwt')


// // Get Business by location
// router.get('/locations?location', async (req,res) => {
//     try {
//         console.log('Getting business by location');
//     let location = req.query.location;

//     let business = await Business.findAll({locations: location}).exec();
//     res.send(business)
// } catch (err) {
//     res.send({message: err})
// }

//  });



//Post New Business req
router.post('/', jwt.validateToken, Validator.postBusinessVal, Business.postNewBusiness);

//Update a Business
router.patch('/:businessId', jwt.validateToken, Validator.postBusinessVal, Business.updateBusiness);

//Delete Specific Business
router.delete('/:businessId',jwt.validateToken, Business.deleteBusiness);

//Get All Business req
router.get('/', Business.getAllBusiness)


//Get Specific Business req
router.get('/:businessId', Business.getSpecificBusiness);






// //Get Business by Category
// router.get('/?category=<category>', (req,res) => {

// });






module.exports = router;