const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    outlet:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    telephone:{
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});


const Business = mongoose.model('Businesses', businessSchema);

module.exports = Business;