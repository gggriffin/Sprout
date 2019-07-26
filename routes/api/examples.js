const router = require('express').Router();
const examplesController = require('../../controllers/libraries');

router.route('/')
  .post(examplesController.create)
  .get(examplesController.findAll);

router.route('/:id')
  .get(examplesController.findById)
  .put(examplesController.updateById)
  .delete(examplesController.deleteById);

router.route('/score/:id')
  .put(examplesController.increaseScoreById);

module.exports = router;
