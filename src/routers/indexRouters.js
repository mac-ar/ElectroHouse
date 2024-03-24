const express = require('express');
const router = express.Router();
const authValidator = require('../middlewares/authValidator')

const indexControl = require('../controllers/indexController');

router.get('/', indexControl.index);


module.exports = router;