var express = require('express')
var router = express.Router()

const combineServices = require('../services/combineServices.js');

router.get("/", combineServices.mainPage);

router.get("*", combineServices.errorPage)

module.exports = router