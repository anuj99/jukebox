const express = require('express');
const router = express.Router();
const { getMusician, postMusician, updateMusician, sortbyname, deleteMusician } = require('../controllers/musicianController');

router.route('/')
    .get(getMusician)
    .post(postMusician);

// route to sort on the basis of name
router.route('/byname')
    .get(sortbyname)

router.route('/:id')
    .put(updateMusician)
    .delete(deleteMusician);


module.exports = router;