const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

function generateToken(findUser) {
    const token = jwt.sign({email: findUser.email, id: findUser._id}, secret.JWT_SECRET, {expiresIn: '1d'})
    return token;
};

function validateToken(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, secret.JWT_SECRET)
        req.userData = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({message: 'Authorisation failed'})
    }
};


module.exports = {
    generateToken,
    validateToken
};