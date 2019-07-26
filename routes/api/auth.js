const router = require('express').Router();
const passport = require('../../config/passport');
const authController = require('../../controllers/auth');

// Matches with '/api/auth/google'
router.use('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router
  .use('/google/callback', passport.authenticate('google', { failureRedirect: '/', session: false }))
  .route('/google/callback')
  .get(authController.googleCallback);

module.exports = router;
