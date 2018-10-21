const express = require('express');
const router  = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Admin = require('../models/admin');

// Register
router.post('/', (req, res, next) => {
  res.send('Register');
  let newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password
  });

  Admin.addAdmin(newAdmin, (err, admin) => {
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

  Admin.getAdminByUsername(username, (err, admin) => {
    if(err) throw err;
    if(!admin){
      return res.json({success: false, msg: 'User not found'});
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token1 = jwt.sign({data: admin}, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: `Bearer ${token1}`,
          admin: {

            username: admin.username,


          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

module.exports = router;
