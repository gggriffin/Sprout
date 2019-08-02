const router = require('express').Router();
const apis = require('./apis');
const auth = require('./auth');
const examples = require('./examples');
const libraries = require('./libraries');
const users = require('./users');
const projects = require('./projects')
const userProfile = require('./userProfile');

router.use('/apis', apis);
router.use('/auth', auth);
router.use('/examples', examples);
router.use('/libraries', libraries);
router.use('/users', users);
router.use('/projects', projects);
router.use('/userProfile', userProfile);

module.exports = router;
