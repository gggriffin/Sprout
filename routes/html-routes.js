var db = require("../models");
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
// if env. is dev. then callbackURL = devURL,
// else the callbackURL = herokuURL

passport.use(new GoogleStrategy({
    clientID: "1013064070830-6v0qtle33qdbte5grurkvoht2n981rdv.apps.googleusercontent.com",
    clientSecret: "K4mBlQbOkJkVTuHlEHFuSI4U",
    callbackURL:  "https://sprout-heroku.herokuapp.com/auth/google/callback" || "http://sprout.com:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    var id = profile.id;
    var provider = profile.provider;
    var displayName = profile.displayName;
    var photo = profile.photos && profile.photos[0] && profile.photos[0].value;


    db.users.findOrCreate({where: {id: id}, defaults: {provider, displayName, photo}})
    .spread(function(user, created) {
      if(created) {
        return done(null, user)

      }
      return done(null, false, 'User exitsts');
    //db.users.create({id, provider, displayName, photo}, function (err, user) {
        // db.users.findOrCreate({where: {id, provider, displayName, photo}}, function (err, user) {
        // return done(err, user);
       });
  }
));



module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  app.get('/trending', function(req, res) {
    res.render('trending');
  });

  app.get('/projects', function(req, res) {
    res.render('projects');
  });

  app.get('/contact', function(req, res) {
    res.render('contact');
  });

  app.get('/collaborate', function(req, res) {
    res.render('collaborate');
  });

  app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/');
  });


  

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};

