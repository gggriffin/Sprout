const router = require('express').Router();
const projectController = require('../../controllers/projects');

router.route('/')
  .post(projectController.create);

module.exports = router;