var express = require('express');
var router = express.Router();
// var marketInfo = require('../market.json');
const fetch = require('node-fetch');
let url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';
let options = {method: 'GET', qs: {isDetails: 'false'}};

router.get('/', function (req, res, next) {
    // res.send(marketInfo)
    fetch(url, options)
        .then(res => res.json())
        .then(json =>  res.send(json))
        .catch(err => console.error('error:' + err));
});
module.exports = router;

