const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createAThought,
  updateSingleThought,
  deleteSingleThought,
  addAReaction,
  removeAReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createAThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deleteSingleThought).put(updateSingleThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addAReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeAReaction);

module.exports = router;
