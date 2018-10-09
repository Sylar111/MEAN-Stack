const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Charity = require('../models/charity');
const passport = require('passport');


module.exports = (router) => {
  /* ===============================================================
     CREATE NEW CHARITY
  =============================================================== */
  router.post('/newCharity', (req, res) => {
    // Check if charity title was provided
    if (!req.body.title) {
      res.json({ success: false, message: 'Charity title is required.' }); // Return error message
    } else {
      // Check if Charity body was provided
      if (!req.body.body) {
        res.json({ success: false, message: 'Charity body is required.' }); // Return error message
      } else {
        // Check if Charity's creator was provided
        if (!req.body.createdBy) {
          res.json({ success: false, message: 'Charity creator is required.' }); // Return error
        } else {
          // Create the Charity object for insertion into database
          const newCharity = new Charity({
            title: req.body.title, // Title field
            body: req.body.body, // Body field
            bitCoin: req.body.bitCoin,  // Bitcoin Wallet field
            ether: req.body.ether,      // Ether Wallet field
            createdBy: req.body.createdBy // CreatedBy field
          });
          // Save charity into database
          newCharity.save(newCharity, (err) => {
            // Check if error
            if (err) {
              // Check if error is a validation error
              if (err.errors) {
                // Check if validation error is in the title field
                if (err.errors.title) {
                  res.json({ success: false, message: err.errors.title.message }); // Return error message
                } else {
                  // Check if validation error is in the body field
                  if (err.errors.body) {
                    res.json({ success: false, message: err.errors.body.message }); // Return error message
                  } else {
                    res.json({ success: false, message: err }); // Return general error message
                  }
                }
              } else {
                res.json({ success: false, message: err }); // Return general error message
              }
            } else {
              res.json({ success: true, message: 'Charity saved!' }); // Return success message
            }
          });
        }
      }
    }
  });

  /* ===============================================================
    GET ALL CHARITIES
 =============================================================== */
  router.get('/allCharity', (req, res) =>{
    // Search database for all charity
    Charity.find({},(err, charity) =>{
      if(err){    // Check if error was found or not
        res.json({ success: false, message: err});  // Return error message
      } else {
        // Check if charity were found in database
        if (!charity) {
          res.json({ success: false, message: 'No Charity found.'});
        } else {
          res.json({ success: true, charity: charity})
        }
      }
    }).sort({'_id': -1});  // Sort charity from newest to oldest
  });


  /* ===============================================================
      GET SINGLE CHARITY
   =============================================================== */
  router.get('/singleCharity/:id', passport.authenticate('jwt', {session:false}), (req, res) =>{
    // Check if id is present in parameters
    if (!req.params.id) {
      res.json({ success: false, message: 'No Charity ID was provided.'}); // Return error message
    } else {
      // Check if the charity id is found in database
      Charity.findOne({ _id: req.params.id }, (err, charity) =>{
        if(err) {
          res.json({ success: false, message: 'Not a valid charity id.'});
        } else {
          // Check if charity was found by id
          if (!charity) {
            res.json({ success: false, message: 'Not found.'});
          } else {
            // Find the current user that is logged in
           User.findOne({ _id: req.user._id }, (err, user) => {
             // Check if error was found
              if (err) {
                res.json({ success: false, message: err });
              } else {
                // Check if username was found in database
               if (!user) {
                 res.json({ success: false, message: 'Unable to authenticate user!'});
               } else {
                 // Check if the user who requested single charity is the one who created it
                  if (charity.createdBy !== user.username) {

                    res.json({ success: false, message: 'You are not authorized to edit this Charity !'});
                  } else {
                    res.json({ success: true, charity: charity });
                  }
                }
              }
            });

          }
        }
      })
    }
  });

  /* ===============================================================
     UPDATE CHARITY POST
  =============================================================== */
  router.put('/updateCharity', passport.authenticate('jwt', {session:false}), (req, res) =>{
    if (!req.body._id) {     // Check if id was provided
      res.json({ success: false, message: 'No Charity ID was provided.'}); // Return error message
    } else {
      // Check if id exists in database
      Charity.findOne({ _id: req.body._id }, (err, charity) =>{
        // Check if id is a valid ID
        if(err) {
          res.json({ success: false, message: 'Not a valid charity id.'}); // Return error message
        } else {
          // Check if id was found in the database
          if (!charity) {
            res.json({ success: false, message: 'Charity ID was not found.'});
          } else {
            // Check who user is that is requesting charity update
            User.findOne({ _id: req.user._id }, (err, user) => {
              // Check if error was found
              if (err) {
                res.json({ success: false, message: err });    // Return error message
              } else {
                // Check if user was found in the database
                if (!user) {
                  res.json({ success: false, message: 'Unable to authenticate user!'});
                } else {
                  // Check if user logged in the the one requesting to update charity post
                  if (charity.createdBy !== user.username) {

                    res.json({ success: false, message: 'You are not authorized to edit this Charity !'});
                  } else {
                    // Save latest charity detail
                    charity.title = req.body.title;
                    charity.body = req.body.body;
                    charity.bitCoin = req.body.bitCoin;
                    charity.ether = req.body.ether;
                    charity.save((err) => {
                      if (err) {
                        res.json({success: false, message: err}); // Return error message
                      } else {
                        res.json({success: true, message: ' Charity Updated !!'});    // Return success message
                      }
                    })
                  }
                }
              }
            })
          }
        }
      })
    }
  });

  router.delete('/deleteCharity/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
    if (!req.params.id) {
      res.json({ success: false, message: 'No Id provided'});
    } else {
      Charity.findOne({ _id: req.params.id }, (err, charity) =>{
        if(err) {
          res.json({ success: false, message: 'Invalid id'})
        } else {
          if (!charity) {
            res.json({ success: false, message: 'Charity ID was not found.'});
          } else {
            User.findOne( { _id: req.user._id }, (err, user) => {

              if (err) {
                res.json({ success: false, message: err});
              } else {
                if (!user) {
                  res.json({ success: false, message: 'Unable to authenticate user!'});
                } else {
                  if (charity.createdBy !== user.username) {
                    res.json({ success: false, message: 'You are not authorized to edit this Charity !'});
                  } else {
                    charity.remove((err) => {
                      if (err) {
                        res.json({ success: false, message: err });
                      } else {
                        res.json({ success: true, message: 'Charity deleted!'});
                      }
                    });
                  }
                }
              }
            });

          }
        }
      });
    }
  });

  router.put('/likeCharity', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Check if id was passed provided in request body
    if (!req.body.id) {     // Check if id was provided
      res.json({ success: false, message: 'No Charity ID was provided.'}); // Return error message
    } else {
      // Check if id exists in database
      Charity.findOne({ _id: req.body.id }, (err, charity) =>{
        // Check if id is a valid ID
        if(err) {
          res.json({ success: false, message: 'Not a valid charity id.'}); // Return error message
        } else {
          // Check if id was found in the database
          if (!charity) {
            res.json({success: false, message: 'That charity was not found.'}); // Return error message
          } else {
            // Get data from user that is signed in
            User.findOne({ _id: req.user._id }, (err, user) => {

              if (err) {
                res.json({ success: false, message: 'Something went wrong.' }); // Return error message
              } else {
                // Check if id of user in session was found in the database
                if (!user) {
                  res.json({success: false, message: 'Could not authenticate user.'}); // Return error message
                } else {
                  // Check if user who liked post is the same user that originally created the charity post
                  if (user.username === charity.createdBy) {
                    res.json({success: false, messagse: 'Cannot like your own post.'}); // Return error message
                  } else {
                    // Check if the user who liked the post has already liked the charity post before
                    if (charity.likedBy.includes(user.username)) {
                      res.json({success: false, message: 'You already liked this post.'}); // Return error message
                    } else {
                      // Check if user who liked post has previously disliked a post
                      if (charity.dislikedBy.includes(user.username)) {
                        charity.dislikes--; // Reduce the total number of dislikes
                        const arrayIndex = charity.dislikedBy.indexOf(user.username); // Get the index of the username in the array for removal
                        charity.dislikedBy.splice(arrayIndex, 1); // Remove user from array
                        charity.likes++; // Increment likes
                        charity.likedBy.push(user.username); // Add username to the array of likedBy array
                        // Save charity post data
                        charity.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({success: false, message: 'Something went wrong.'}); // Return error message
                          } else {
                            res.json({success: true, message: 'charity liked!'}); // Return success message
                          }
                        });
                      } else {
                        charity.likes++; // Incriment likes
                        charity.likedBy.push(user.username); // Add liker's username into array of likedBy
                        // Save charity post
                        charity.save((err) => {
                          if (err) {
                            res.json({success: false, message: 'Something went wrong.'}); // Return error message
                          } else {
                            res.json({success: true, message: 'charity liked!'}); // Return success message
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });


  router.put('/dislikeCharity', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Check if id was passed provided in request body
    if (!req.body.id) {
      res.json({ success: false, message: 'No id was provided.' }); // Return error message
    } else {
      // Search the database with id
      Charity.findOne({ _id: req.body.id }, (err, charity) => {
        // Check if error was encountered
        if (err) {
          res.json({success: false, message: 'Invalid Charity id'}); // Return error message
        } else {
          // Check if id matched the id of a charity post in the database
          if (!charity) {
            res.json({success: false, message: 'That charity was not found.'}); // Return error message
          } else {
            // Get data from user that is signed in
            User.findOne({ _id: req.user._id }, (err, user) => {

              if (err) {
                res.json({ success: false, message: 'Something went wrong.' }); // Return error message
              } else {
                // Check if id of user in session was found in the database
                if (!user) {
                  res.json({success: false, message: 'Could not authenticate user.'}); // Return error message
                } else {
                  // Check if user who liked post is the same user that originally created the charity post
                  if (user.username === charity.createdBy) {
                    res.json({success: false, messagse: 'Cannot dislike your own post.'}); // Return error message
                  } else {
                    // Check if the user who liked the post has already liked the charity post before
                    if (charity.dislikedBy.includes(user.username)) {
                      res.json({success: false, message: 'You already disliked this post.'}); // Return error message
                    } else {
                      // Check if user who liked post has previously disliked a post
                      if (charity.likedBy.includes(user.username)) {
                        charity.likes--; // Reduce the total number of dislikes
                        const arrayIndex = charity.likedBy.indexOf(user.username); // Get the index of the username in the array for removal
                        charity.likedBy.splice(arrayIndex, 1); // Remove user from array
                        charity.dislikes++; // Increment likes
                        charity.dislikedBy.push(user.username); // Add username to the array of likedBy array
                        // Save charity post data
                        charity.save((err) => {
                          // Check if error was found
                          if (err) {
                            res.json({success: false, message: 'Something went wrong.'}); // Return error message
                          } else {
                            res.json({success: true, message: 'charity disliked!'}); // Return success message
                          }
                        });
                      } else {
                        charity.dislikes++; // Incriment likes
                        charity.dislikedBy.push(user.username); // Add liker's username into array of likedBy
                        // Save charity post
                        charity.save((err) => {
                          if (err) {
                            res.json({success: false, message: 'Something went wrong.'}); // Return error message
                          } else {
                            res.json({success: true, message: 'charity disliked!'}); // Return success message
                          }
                        });
                      }
                    }
                  }
                }
              }
            });
          }
        }
      });
    }
  });

  /* ===============================================================
     COMMENT ON Charity POST
  =============================================================== */
  router.post('/comment', passport.authenticate('jwt', {session:false}), (req, res) => {
    // Check if comment was provided in request body
    if (!req.body.comment) {
      res.json({ success: false, message: 'No comment provided' }); // Return error message
    } else {
      // Check if id was provided in request body
      if (!req.body.id) {
        res.json({ success: false, message: 'No id was provided' }); // Return error message
      } else {
        // Use id to search for charity post in database
        Charity.findOne({ _id: req.body.id }, (err, charity) => {
          // Check if error was found
          if (err) {
            res.json({ success: false, message: 'Invalid charity id' }); // Return error message
          } else {
            // Check if id matched the id of any charity post in the database
            if (!charity) {
              res.json({ success: false, message: 'charity not found.' }); // Return error message
            } else {
              // Grab data of user that is logged in
              User.findOne({ _id: req.user._id }, (err, user) => {
                // Check if error was found
                if (err) {
                  res.json({ success: false, message: 'Something went wrong' }); // Return error message
                } else {
                  // Check if user was found in the database
                  if (!user) {
                    res.json({ success: false, message: 'User not found.' }); // Return error message
                  } else {
                    // Add the new comment to the charity post's array
                    charity.comments.push({
                      comment: req.body.comment, // Comment field
                      commentator: user.username // Person who commented
                    });
                    // Save charity post
                    charity.save((err) => {
                      // Check if error was found
                      if (err) {
                        res.json({ success: false, message: 'Something went wrong.' }); // Return error message
                      } else {
                        res.json({ success: true, message: 'Comment saved' }); // Return success message
                      }
                    });
                  }
                }
              });
            }
          }
        });
      }
    }
  });

  return router;
};
