'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 27017;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://leandro:prueba123@cluster0-shard-00-00.mpgr7.mongodb.net:27017,cluster0-shard-00-01.mpgr7.mongodb.net:27017,cluster0-shard-00-02.mpgr7.mongodb.net:27017/noticias?ssl=true&replicaSet=atlas-i31fjg-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => {

    // Creacion del servidor
    app.listen(port, () => {
    });
}).catch(err => console.log(err));






//   'use strict'
//
//   var mongoose = require('mongoose');
//   var app = require('./app');
//   var port =  "mongodb://leandro:prueba123@cluster0-shard-00-00.mpgr7.mongodb.net:27017,cluster0-shard-00-01.mpgr7.mongodb.net:27017,cluster0-shard-00-02.mpgr7.mongodb.net:27017/noticias?ssl=true&replicaSet=atlas-i31fjg-shard-0&authSource=admin&retryWrites=true&w=majority";
//   mongoose.Promise = global.Promise;
//   mongoose.connect('mongodb://leandro:prueba123@cluster0-shard-00-00.mpgr7.mongodb.net:27017,cluster0-shard-00-01.mpgr7.mongodb.net:27017,cluster0-shard-00-02.mpgr7.mongodb.net:27017/noticias?ssl=true&replicaSet=atlas-i31fjg-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => {
//
//     console.log("Conexion exitosa xd");
//       // Creacion del servidor
//       app.listen(port, () => {
//         console.log("Servidor corriendo correctamente en la url: localhost:3700");
//       });
// }).catch(err => console.log(err));
