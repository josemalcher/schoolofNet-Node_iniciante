var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/parking').connection;

db.on('open', function () {
    console.log("OK OK OK ---->>>>>>  MongoDB Está Conectado! <<<< -------- OK OK OK");
});

db.on('error', function () {
    console.log("-------- >>>>>  MongoDB error <<<< ------- #*&!@¨#*&@$");
});

return db;