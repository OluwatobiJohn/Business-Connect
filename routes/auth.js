const express = require('express');
const router = express.Router();
const Validator = require('../middlewares/userValidator');
const Owner = require('../controllers/userController');

//Register Post req
router.post('/register', Validator.registerVal , Owner.createUser);


//Login Post req
router.post('/login', (req,res) => {

});

module.exports = router;