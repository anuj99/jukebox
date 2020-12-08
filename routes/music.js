const express = require('express');
const { getMusic, postMusic, deleteMusic, updateMusic, sortpriceMusic } = require('../controllers/musicController');

const router = express.Router();
router.route('/')
    .get(getMusic)
    .post(postMusic);

// route for get music ondatesort

router.route('/pricesort')
    .get(sortpriceMusic)

router.route('/:id')
    .put(updateMusic)
    .delete(deleteMusic);
module.exports = router;