var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        message: 'Olá Mundo!! ;-)'
    })
});

router.get('/a?r', function (req, res) {
    res.send('router a?r'); // a é opcional || expressão regular 'a+r' ou 'a*r'
});

module.exports = router;