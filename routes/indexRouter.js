var express = require('express'); /* PRIMERO REQUERIMOS EXPRESS */
var router = express.Router();

const indexController = require('../controllers/IndexController');

router.get('/',indexController.index);

module.exports = router;
