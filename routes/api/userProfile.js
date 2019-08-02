const router = require('express').Router();
const userProfileController = require('../../controllers/userProfile');

router.route('/')
  .post(userProfileController.create)
  .get(userProfileController.findAll);

router.route('/:id')
  .get(userProfileController.findById)
  .put(userProfileController.updateById)
  .delete(userProfileController.deleteById);

module.exports = router;