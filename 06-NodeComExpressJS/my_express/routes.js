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
        host: req.hostname,
        headers: req.header,
        port : req.port
    })
});

router.post('/body',function (req, res) {
    res.json(req.body)
});

/*router.get('/res', function (req, res) {
    res.status(201).send('test');
});*/
router.get('/res', function (req, res) {
    res.status(201).json({
        name: 'Jose ',
        lastname: 'Malcher'
    });
});
router.get('/res', function (req, res) { // template engine
    res.render('index',{
        // js
    })
});

module.exports = router;