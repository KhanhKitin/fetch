const express = require("express");
const router = express.Router();
const passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use('facebook', new FacebookStrategy({
    clientID        : '2488495461215323',
    clientSecret    : '91c52776e02dede44f3c208c8842560b',
    callbackURL     : 'http://localhost:3000/login/facebook/callback',
    profileFields   : ["displayName", "email", "gender", "locale"]
  },
  
  function(accessToken, refreshToken, profile, done) {
    console.log(profile, accessToken);
    return done(null, profile);
  }

));

router.get('/facebook', 
  passport.authenticate('facebook', { scope : 'email' }
));
 
router.get('/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: 'http://localhost:3000/', 
    failureRedirect: '/fail'
  })
);
module.exports = router;