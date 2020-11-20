const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');


//Connect to Mongo DataBase
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to MongoDB')
});


//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Import Routes
const reviewRoute = require('./routes/reviews');
const businessRoute = require('./routes/business');
const authRoute = require('./routes/auth');

app.use('/business/reviews', reviewRoute);
app.use('/business', businessRoute)
app.use('/auth', authRoute)



//Port Listen
app.listen(3000, () => {
    console.log('App is listening on Port 3000');
})