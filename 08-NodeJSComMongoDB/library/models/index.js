var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/library').connection;

db.on('open', function () {
    console.log('MogoDB Está CONECTADO!');
});
db.on('error', function () {
    console.log('HOVE UM ERRO!!!.... <<<------------------------');
});

return db;