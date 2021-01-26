var express = require('express');
var router = express.Router();

let productsController = require('../controllers/productsController');

router.get('/detail/:id/:category' ,productsController.detail);

module.exports = router;