const router = require('express').Router();
const apisController = require('../../controllers/apis');

router.route('/')
  .post(apisController.create)
  .get(apisController.findAll);

router.route('/:id')
  .get(apisController.findById)
  .put(apisController.updateById)
  .delete(apisController.deleteById);

router.route('/score/:id')
  .put(apisController.increaseScoreById);

module.exports = router;
