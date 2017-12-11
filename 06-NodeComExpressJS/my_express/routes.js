var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    //console.log(req);
    res.json({
        message: 'Olá Mundo!! ;-)'
    })
});

router.get('/a*r', function (req, res) {
    res.send('router a?r'); // a é opcional || expressão regular 'a+r' ou 'a*r'
});

router.get('/params/:name', function (req, res) {
    res.json({
        params: req.params,
        host: req.host,
        headers: req.header,
        port : req.port
    })
});

router.post('/body',function (req, res) {
    res.json(req.body)
})

module.exports = router;