const router = require('express').Router();
const usersController = require('../../controllers/users');

router.route('/')
  .post(usersController.create)
  .get(usersController.findAll);

router.route('/:id')
  .get(usersController.findById)
  .put(usersController.updateById)
  .delete(usersController.deleteById);

module.exports = router;
