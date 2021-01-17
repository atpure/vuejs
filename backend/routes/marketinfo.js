var express = require('express');
var router = express.Router();
var marketInfo = require('../market.json');
router.get('/', function (req, res, next) {
 res.send(marketInfo)
});
module.exports = router;