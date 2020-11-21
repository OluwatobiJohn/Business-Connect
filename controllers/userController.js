const Owner = require('../models/owner');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const {name, email, password, password2} = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
       return res.status(400).send({errors: errors.array()});
    };
    
    const findUser = await Owner.findOne({email: email});
    if (findUser) {
        res.send({message: 'Email has already been registered'})
    } else {
        const newOwner = new Owner({
            name: name,
            email: email,
            password: password
        });
        const saltRounds = 10;
        const passwordText = newOwner.password
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(passwordText, salt, (err, hash) => {
                if (err) throw err;

                newOwner.password = hash;
                
                newOwner.save()
                .then((value) => {
                    console.log(value);
                    res.send(newOwner);
                });
            });
        });
    }

}


module.exports = {
    createUser
};