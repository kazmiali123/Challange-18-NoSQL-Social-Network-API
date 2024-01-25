const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createAUser,
  updateSingleUser,
  deleteSingleUser,
  addAFriend,
  removeAFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getAllUsers).post(createAUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteSingleUser).put(updateSingleUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addAFriend);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeAFriend);

module.exports = router;