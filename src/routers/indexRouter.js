const express = require('express');

const router = express.Router();

const index = require('../controllers/indexControl');

router.get('/', index.index);


module.exports = router;