const express = require('express');
const router  = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Admin = require('../models/admin')
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'Success to register user'});
    }
  });
});

// Authenticate

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 day
        });

        res.json({
          success: true,
          token: `Bearer ${token}`,
          user: {
           // id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,


          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

// public profile
router.get('/publicProfile/:username', (req, res) => {
  // Check if username was passed in the parameters
  if (!req.params.username) {
    res.json({ success: false, message: 'No username was provided' }); // Return error message
  } else {
    // Check the database for username
    User.findOne({ username: req.params.username }).select('username email').exec((err, user) => {
      // Check if error was found
      if (err) {
        res.json({ success: false, message: 'Something went wrong.' }); // Return error message
      } else {
        // Check if user was found in the database
        if (!user) {
          res.json({ success: false, message: 'Username not found.' }); // Return error message
        } else {
          res.json({ success: true, user: user }); // Return the public user's profile data
        }
      }
    });
  }
});

//Permission
router.get('/permission', passport.authenticate('jwt', {session:false}), (req, res, next) => {

  User.findOne( { _id: req.user._id }, (err, user) => {
    console.log(user._id);
    if(err) throw err;
    if(!user) {
      res.json({ success: false, message: 'No User was found'});
    } else {
      res.json({ success: true, permission: user.permission});
    }
  });
});

router.get('/allUser', (req, res) =>{
  // Search database for all user
  User.find({},(err, user) =>{
    if(err){    // Check if error was found or not
      res.json({ success: false, message: err});  // Return error message
    } else {
      // Check if users were found in database
      if (!user) {
        res.json({ success: false, message: 'No User found.'});
      } else {
        res.json({ success: true, user: user})
      }
    }
  })
});

router.put('/updatePermission', (req, res) => {
  if (!req.body._id) {
    res.json({success: false, message: 'No User ID was provided.'});
  } else {
    User.findOne({_id: req.body._id}, (err, user) => {
      if (err) {
        res.json({success: false, message: 'Not a valid user id.'});
      } else {
        if (!user) {
          res.json({success: false, message: 'user ID was not found.'});
        } else {
          user.permission = req.body.permission;
          user.save((err) => {
            if (err) {
              res.json({success: false, message: err}); // Return error message
            } else {
              res.json({success: true, message: ' User Updated !!'});    // Return success message
            }
          })
        }
      }
    })
  }

  router.get('/singleUser/:id', passport.authenticate('jwt', {session:false}), (req, res) =>{

    if (!req.params.id) {
      res.json({ success: false, message: 'No Charity ID was provided.'});
    } else {

      User.findOne({ _id: req.params.id }, (err, user) =>{
        if(err) {
          res.json({ success: false, message: 'Not a valid charity id.'});
        } else {

          if (!user) {
            res.json({ success: false, message: 'Not found.'});
          } else {

            Admin.findOne({ _id: req.admin._id }, (err, admin) => {

              if (err) {
                res.json({ success: false, message: err });
              } else {

                if (!admin) {
                  res.json({ success: false, message: 'Unable to authenticate user!'});
                } else {
                    res.json({ success: true, charity: charity });
                  }
                }
            });
          }
        }
      })
    }
  });
});


module.exports = router;


