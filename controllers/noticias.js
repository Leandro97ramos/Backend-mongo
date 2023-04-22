'use strict'
//cargo en una variable , los modelos para crear la base de datos
var Politica = require('../models/noticias/politica');
var Economia = require('../models/noticias/economia');
var Medicina = require('../models/noticias/medicina');
var Tecnologia = require('../models/noticias/tecnologia');
//cargo las librerias
var fs = require('fs');
var path = require('path');


//variable en la cual se utiliza para las funciones en el backend
var controller = {

	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de politica"
		});
	},

	savePolitica: function(req, res){
		var politica = new Politica();

		var params = req.body;
		politica.title = params.title;
		politica.description = params.description;
		politica.descriptionSc = params.descriptionSc;
		politica.descriptionTr = params.descriptionTr;
		politica.descriptionCr = params.descriptionCr;
		politica.descriptionQ = 	params.descriptionQ;

		politica.epigrafe = params.epigrafe;
		politica.subtitulo = params.subtitulo;


		politica.year = params.year;
		politica.imageM = null;

		politica.imageP = null;
		politica.imageS = null;
		politica.imageT = null;
		politica.imageC = null;
		politica.imageQ = null;


		politica.save((err, politicaStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!politicaStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({politica: politicaStored});
		});
	},

	getPolitica: function(req, res){
		var politicaId = req.params.id;

		if(politicaId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Politica.findById(politicaId, (err, politica) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!politica) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				politica
			});

		});
	},

	getPoliticas: function(req, res){

		Politica.find({}).sort('-year').exec((err, politicas) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!politicas) return res.status(404).send({message: 'No hay  que mostrar.'});

			return res.status(200).send({politicas});
		});

	},

	updatePolitica: function(req, res){
		var politicaId = req.params.id;
		var update = req.body;

		Politica.findByIdAndUpdate(politicaId, update, {new:true}, (err, politicaUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!politicaUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				politica: politicaUpdated
			});
		});

	},

	deletePolitica: function(req, res){
		var politicaId = req.params.id;

		Politica.findByIdAndRemove(politicaId, (err, politicaRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!politicaRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				politica: politicaRemoved
			});
		});
	},

	uploadImageMPolitica: function(req, res){
		var politicaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Politica.findByIdAndUpdate(politicaId, {imageM: fileName}, {new: true}, (err, politicaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!politicaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						politica: politicaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImagePPolitica: function(req, res){
		var politicaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Politica.findByIdAndUpdate(politicaId, {imageP: fileName}, {new: true}, (err, politicaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!politicaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						politica: politicaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},


	uploadImageSPolitica: function(req, res){
		var politicaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Politica.findByIdAndUpdate(politicaId, {imageS: fileName}, {new: true}, (err, politicaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!politicaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						politica: politicaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},



	uploadImageTPolitica: function(req, res){
		var politicaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Politica.findByIdAndUpdate(politicaId, {imageT: fileName}, {new: true}, (err, politicaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!politicaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						politica: politicaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},


	uploadImageCPolitica: function(req, res){
		var politicaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Politica.findByIdAndUpdate(politicaId, {imageC: fileName}, {new: true}, (err, politicaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!politicaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						politica: politicaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},



	uploadImageQPolitica: function(req, res){
		var politicaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Politica.findByIdAndUpdate(politicaId, {imageQ: fileName}, {new: true}, (err, politicaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!politicaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						politica: politicaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},






	saveEconomia: function(req, res){
		var economia = new Economia();

		var params = req.body;
		economia.title = params.title;
		economia.description = params.description;
		economia.descriptionSc = params.descriptionSc;
		economia.descriptionTr = params.descriptionTr;
		economia.descriptionCr = params.descriptionCr;
		economia.descriptionQ = 	params.descriptionQ;
		economia.epigrafe = params.epigrafe;
		economia.subtitulo = params.subtitulo


		economia.year = params.year;
		economia.imageM = null;

		economia.imageP = null;
		economia.imageS = null;
		economia.imageT = null;
		economia.imageC = null;
		economia.imageQ = null;


		economia.save((err, economiaStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!economiaStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({economia: economiaStored});
		});
	},

	getEconomia: function(req, res){
		var economiaId = req.params.id;

		if(economiaId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Economia.findById(economiaId, (err, economia) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!economia) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				economia
			});

		});
	},

	getEconomias: function(req, res){

		Economia.find({}).sort('-year').exec((err, economias) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!economias) return res.status(404).send({message: 'No hay economia que mostrar.'});

			return res.status(200).send({economias});
		});

	},

	updateEconomia: function(req, res){
		var economiaId = req.params.id;
		var update = req.body;

		Economia.findByIdAndUpdate(economiaId, update, {new:true}, (err, economiaUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!economiaUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				economia: economiaUpdated
			});
		});

	},

	deleteEconomia: function(req, res){
		var economiaId = req.params.id;

		Economia.findByIdAndRemove(economiaId, (err, economiaRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!economiaRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				economia: economiaRemoved
			});
		});
	},

	uploadImageMEconomia: function(req, res){
		var economiaId = req.params.id;
		var fileName = 'Imagen no subida...';
		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Economia.findByIdAndUpdate(economiaId, {imageM: fileName}, {new: true}, (err, economiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!economiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						economia: economiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}
},

	uploadImagePEconomia: function(req, res){
		var economiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Economia.findByIdAndUpdate(economiaId, {imageP: fileName}, {new: true}, (err, economiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!economiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						economia: economiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageSEconomia: function(req, res){
		var economiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Economia.findByIdAndUpdate(economiaId, {imageS: fileName}, {new: true}, (err, economiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!economiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						economia: economiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageTEconomia: function(req, res){
		var economiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Economia.findByIdAndUpdate(economiaId, {imageT: fileName}, {new: true}, (err, economiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!economiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						economia: economiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageCEconomia: function(req, res){
		var economiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Economia.findByIdAndUpdate(economiaId, {imageC: fileName}, {new: true}, (err, economiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!economiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						economia: economiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},



	uploadImageQEconomia: function(req, res){
		var economiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Economia.findByIdAndUpdate(economiaId, {imageQ: fileName}, {new: true}, (err, economiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!economiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						economia: economiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},



	saveMedicina: function(req, res){
		var medicina = new Medicina();

		var params = req.body;
		medicina.title = params.title;
		medicina.description = params.description;
		medicina.descriptionSc = params.descriptionSc;
		medicina.descriptionTr = params.descriptionTr;
		medicina.descriptionCr = params.descriptionCr;
		medicina.descriptionQ = 	params.descriptionQ;
		medicina.epigrafe = params.epigrafe;
		medicina.subtitulo = params.subtitulo;
		medicina.year = params.year;
		medicina.imageM = null;

		medicina.imageP = null;
		medicina.imageS = null;
		medicina.imageT = null;
		medicina.imageC = null;
		medicina.imageQ = null;

		medicina.save((err, medicinaStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!medicinaStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({medicina: medicinaStored});
		});
	},

	getMedicina: function(req, res){
		var medicinaId = req.params.id;

		if(medicinaId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Medicina.findById(medicinaId, (err, medicina) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!medicina) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				medicina
			});

		});
	},

	getMedicinas: function(req, res){

		Medicina.find({}).sort('-year').exec((err, medicinas) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!medicinas) return res.status(404).send({message: 'No hay medicinaos que mostrar.'});

			return res.status(200).send({medicinas});
		});

	},

	updateMedicina: function(req, res){
		var medicinaId = req.params.id;
		var update = req.body;

		Medicina.findByIdAndUpdate(medicinaId, update, {new:true}, (err, medicinaUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!medicinaUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				medicina: medicinaUpdated
			});
		});

	},

	deleteMedicina: function(req, res){
		var medicinaId = req.params.id;

		Medicina.findByIdAndRemove(medicinaId, (err, medicinaRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!medicinaRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				medicina: medicinaRemoved
			});
		});
	},

	uploadImageMMedicina: function(req, res){
		var medicinaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Medicina.findByIdAndUpdate(medicinaId, {imageM: fileName}, {new: true}, (err, medicinaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!medicinaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						medicina: medicinaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImagePMedicina: function(req, res){
		var medicinaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Medicina.findByIdAndUpdate(medicinaId, {imageP: fileName}, {new: true}, (err, medicinaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!medicinaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						medicina: medicinaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageSMedicina: function(req, res){
		var medicinaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Medicina.findByIdAndUpdate(medicinaId, {imageS: fileName}, {new: true}, (err, medicinaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!medicinaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						medicina: medicinaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageTMedicina: function(req, res){
		var medicinaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Medicina.findByIdAndUpdate(medicinaId, {imageT: fileName}, {new: true}, (err, medicinaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!medicinaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						medicina: medicinaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageCMedicina: function(req, res){
		var medicinaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Medicina.findByIdAndUpdate(medicinaId, {imageC: fileName}, {new: true}, (err, medicinaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!medicinaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						medicina: medicinaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageQMedicina: function(req, res){
		var medicinaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Medicina.findByIdAndUpdate(medicinaId, {imageQ: fileName}, {new: true}, (err, medicinaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!medicinaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						medicina: medicinaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	getImageMFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	},

	getImagePFile: function(req, res){
		var file = req.params.imageP;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	},

	getImageSFile: function(req, res){
		var file = req.params.imageS;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	},

	getImageTFile: function(req, res){
		var file = req.params.imageT;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	},


	getImageCFile: function(req, res){
		var file = req.params.imageC;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	},


	getImageQFile: function(req, res){
		var file = req.params.imageQ;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return res.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	},



	saveTecnologia: function(req, res){
		var tecnologia = new Tecnologia();

		var params = req.body;
		tecnologia.title = params.title;
		tecnologia.description = params.description;
		tecnologia.descriptionSc = params.descriptionSc;
		tecnologia.descriptionTr = params.descriptionTr;
		tecnologia.descriptionCr = params.descriptionCr;
		tecnologia.descriptionQ = 	params.descriptionQ;
		tecnologia.epigrafe = params.epigrafe;
		tecnologia.subtitulo = params.subtitulo;

		tecnologia.year = params.year;
		tecnologia.imageM = null;
		tecnologia.imageP = null;
		tecnologia.imageS = null;
		tecnologia.imageT = null;
		tecnologia.imageC = null;
		tecnologia.imageQ = null;

		tecnologia.save((err, tecnologiaStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el documento.'});

			if(!tecnologiaStored) return res.status(404).send({message: 'No se ha podido guardar el proyecto.'});

			return res.status(200).send({tecnologia: tecnologiaStored});
		});
	},

	getTecnologia: function(req, res){
		var tecnologiaId = req.params.id;

		if(tecnologiaId == null) return res.status(404).send({message: 'El proyecto no existe.'});

		Tecnologia.findById(tecnologiaId, (err, tecnologia) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!tecnologia) return res.status(404).send({message: 'El proyecto no existe.'});

			return res.status(200).send({
				tecnologia
			});

		});
	},

	getTecnologias: function(req, res){

		Tecnologia.find({}).sort('-year').exec((err, tecnologias) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!tecnologias) return res.status(404).send({message: 'No hay tecnologiaos que mostrar.'});

			return res.status(200).send({tecnologias});
		});

	},

	updateTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var update = req.body;

		Tecnologia.findByIdAndUpdate(tecnologiaId, update, {new:true}, (err, tecnologiaUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!tecnologiaUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

			return res.status(200).send({
				tecnologia: tecnologiaUpdated
			});
		});

	},

	deleteTecnologia: function(req, res){
		var tecnologiaId = req.params.id;

		Tecnologia.findByIdAndRemove(tecnologiaId, (err, tecnologiaRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

			if(!tecnologiaRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

			return res.status(200).send({
				tecnologia: tecnologiaRemoved
			});
		});
	},

	uploadImageMTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Tecnologia.findByIdAndUpdate(tecnologiaId, {imageM: fileName}, {new: true}, (err, tecnologiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!tecnologiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						tecnologia: tecnologiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImagePTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Tecnologia.findByIdAndUpdate(tecnologiaId, {imageP: fileName}, {new: true}, (err, tecnologiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!tecnologiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						tecnologia: tecnologiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageSTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Tecnologia.findByIdAndUpdate(tecnologiaId, {imageS: fileName}, {new: true}, (err, tecnologiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!tecnologiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						tecnologia: tecnologiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageTTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Tecnologia.findByIdAndUpdate(tecnologiaId, {imageT: fileName}, {new: true}, (err, tecnologiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!tecnologiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						tecnologia: tecnologiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageCTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Tecnologia.findByIdAndUpdate(tecnologiaId, {imageC: fileName}, {new: true}, (err, tecnologiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!tecnologiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						tecnologia: tecnologiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	uploadImageQTecnologia: function(req, res){
		var tecnologiaId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Tecnologia.findByIdAndUpdate(tecnologiaId, {imageQ: fileName}, {new: true}, (err, tecnologiaUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!tecnologiaUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						tecnologia: tecnologiaUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},





};




module.exports = controller;
