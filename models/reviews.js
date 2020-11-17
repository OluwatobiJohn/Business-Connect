const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    recommendation: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }

});


const Review = mongoose.model('Reviews', reviewsSchema);

module.exports = Review