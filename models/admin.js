const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const AdminSchema = mongoose.Schema({
  username:{
    type: String,
    unique: true,
    required: true
  },
  password:{
    type: String,
    required: true
  }

});

const Admin = module.exports = mongoose.model('Admin',AdminSchema);

// Function  outside file
module.exports.getAdminById = function(id, callback) {
  Admin.findById(id, callback);
}

module.exports.getAdminByUsername = function(username, callback) {
  const query = {username: username};
  Admin.findOne(query, callback);
}

module.exports.addAdmin = function(newAdmin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if(err) throw err;
      newAdmin.password = hash;
      newAdmin.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {

    callback(null, isMatch);
  });
}
