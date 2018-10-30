const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const cors = require ('cors');
const passport  = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const router = express.Router();


//Connect to database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected',() => {
  console.log('Connected to Database '+config.database);
});

// Check Error
mongoose.connection.on('err',(err) => {
  console.log('Database error: '+err);
});

const app = express();
// Send Message
app.use(cors());
// Body Parse Middleware
app.use(bodyParse.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const users = require('./routes/users');
const admins = require('./routes/admins'); //add
const charitys = require('./routes/charitys')(router);
const configMessage = require('./routes/configMessage');
// Port Number
//const port = 3000;

const port = process.env.PORT || 8080;




// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/configMessage', configMessage);

app.use('/users', users);
app.use('/admins', admins); //add
app.use('/charitys', charitys);

// Index Route
app.get('/',  (req, res) => {
  res.send('API  ');
});

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Send Message
app.post('/messages', (req, res) => {
  configMessage(req.body);
  res.status(200).send();
});


// Start Server
app.listen(port, () => {
  console.log('Server started on port ' +port);
});

