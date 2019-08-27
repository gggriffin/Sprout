const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
// if env. is dev. then callbackURL = devURL,
// else the callbackURL = herokuURL
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
     callbackURL: 'http://localhost:3001/auth/google/callback',
    // callbackURL: "https://sprout-heroku.herokuapp.com/auth/google/callback" //"http://sprout.com:8080/auth/google/callback" || "http://localhost:3001/auth/google/callback"

  },
  (accessToken, refreshToken, profile, done) => {
    const user = {
      email: profile.emails[0].value,
      name: profile.displayName,
      token: accessToken,
    };

    done(null, user);
  },
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
