const router = require('express').Router();
const librariesController = require('../../controllers/libraries');

router.route('/')
  .post(librariesController.create)
  .get(librariesController.findAll);

router.route('/:id')
  .get(librariesController.findById)
  .put(librariesController.updateById)
  .delete(librariesController.deleteById);

router.route('/score/:id')
  .put(librariesController.increaseScoreById);

module.exports = router;
