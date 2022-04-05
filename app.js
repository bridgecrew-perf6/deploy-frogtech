const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//DB Config
const db = require('./config/keys').MongoURI;

//connect to Mongo
/*mongoose.connect(db, {useNewUrlParser: true,  useUnifiedTopology: true})
.then(()=> console.log('MongoDb Connected...'))
.catch(err => console.log(err));*/


//Layouts middleware EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Bodyparser
//app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));

//static files midddleware
app.use( express.static(path.join(__dirname, '/public')));


//routes
app.use('/', require('./routes/index'));
app.use('/general', require('./routes/general'));
app.use('/services', require('./routes/services'));
//app.use('/users', require('./routes/users'));


PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Application is running on port ${PORT}`));