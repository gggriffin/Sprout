const router = require('express').Router();
const projectsController = require('../../controllers/projects');

router.route('/')
    .post(projectsController.create);

module.exports = router;