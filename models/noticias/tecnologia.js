'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    epigrafe:String,
    title: String,
    subtitulo:String,
    year: String,
    description:String,
    imageM: String,

    imageP: String,
    description:String,
    imageS: String,
    descriptionSc:String,
    imageT: String,
    descriptionTr:String,
    imageC: String,
    descriptionCr:String,
    imageQ: String,
    descriptionQ:String,
});


module.exports = mongoose.model('Tecnologia', ProjectSchema);
