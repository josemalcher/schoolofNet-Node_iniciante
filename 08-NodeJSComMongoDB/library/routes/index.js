var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var arr = [];// simulando um BD
  for(var i = 0 ; i < 10 ; i++){
    arr.push({
        id: i,
        name: 'Compania ' + i
    });
  }

  res.render('index', {
    title: 'Express',
    name: 'Jose',
    data: arr
  });
});

module.exports = router;
