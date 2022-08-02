var express = require('express');
var router = express.Router();
const {vistaUno} = require('../controller/controller.js')

/* GET home page. */
router.get('/', vistaUno);

module.exports = router;
