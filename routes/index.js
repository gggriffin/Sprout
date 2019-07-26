const router = require('express').Router();
const apiRoutes = require('./api');

// FIXME: Temporary for testing since I don't have access to update redirect on Google Dashboard
const passport = require('../config/passport');
const authController = require('../controllers/auth');

// API Routes
router.use('/api/v1', apiRoutes);

// FIXME: Temporary for testing since I don't have access to update redirect on Google Dashboard
router.use('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/', session: false }))
  .route('/auth/google/callback')
  .get(authController.googleCallback);

module.exports = router;
