'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// archivos de rutas+
var noticias_routes = require('./routes/noticias');
// moddlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json(""));

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//  rutas
app.use('/api', noticias_routes);

// exportar
module.exports = app;
