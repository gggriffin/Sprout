const router = require('express').Router();
const apis = require('./apis');
const auth = require('./auth');
const examples = require('./examples');
const libraries = require('./libraries');
const users = require('./users');

router.use('/apis', apis);
router.use('/auth', auth);
router.use('/examples', examples);
router.use('/libraries', libraries);
router.use('/users', users);

module.exports = router;
