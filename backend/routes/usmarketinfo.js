var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
let usmarket_url = 'https://api.bittrex.com/api/v1.1/public/getticker?market=USD-BTC';

let options = {method: 'GET', qs: {isDetails: 'false'}};

router.get('/', function (req, res, next) {
    fetch(usmarket_url, options)
        .then(res => res.json())
        .then(json =>  {
            res.send(json);
            console.log(json.result.Last);
        })
        .catch(err => console.error('error:' + err));


});
module.exports = router;