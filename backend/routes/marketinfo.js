var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
let upbit_url = 'https://api.upbit.com/v1/ticker?markets=KRW-BTC';

let options = {method: 'GET', qs: {isDetails: 'false'}};

router.get('/', function (req, res, next) {
    fetch(upbit_url, options)
        .then(res => res.json())
        .then(json =>  {
            res.send(json);
            console.log(json[0].trade_price);
        })
        .catch(err => console.error('error:' + err));


});
module.exports = router;