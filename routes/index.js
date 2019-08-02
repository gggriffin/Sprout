const router = require('express').Router();
const apiRoutes = require('./api');

// FIXME: Temporary for testing since I don't have access to update redirect on Google Dashboard


// API Routes
router.use('/api/v1', apiRoutes);

// FIXME: Temporary for testing since I don't have access to update redirect on Google Dashboard


module.exports = router;
