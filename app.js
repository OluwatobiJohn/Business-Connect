const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Import Routes
const businessRoute = require('./routes/business');
const authRoute = require('./routes/auth');

app.use('/business', businessRoute)
app.use('/auth', authRoute)


//Port Listen
app.listen(3000, () => {
    console.log('App is listening on Port 3000');
})