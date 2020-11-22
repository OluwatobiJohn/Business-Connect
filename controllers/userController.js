const Owner = require('../models/owner');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('../utilities/jwt');



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

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    const findUser = await Owner.findOne({email: email});

    if (!findUser) {
        res.send({message: 'Email is not registered'})
    };
    if (findUser) {
        bcrypt.compare(password, findUser.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
        const token = jwt.generateToken(findUser);
                return res.json({findUser, token});
            } else {
                return res.send({message: 'Password is incorrect'})
            }
        });
    }
};


module.exports = {
    createUser,
    loginUser
};