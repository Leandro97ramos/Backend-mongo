'use strict'

var express = require('express');
var NoticiasController = require('../controllers/noticias');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads' });


router.post('/save-politica', NoticiasController.savePolitica);
router.post('/save-economia', NoticiasController.saveEconomia);
router.post('/save-medicina', NoticiasController.saveMedicina);
router.post('/save-tecnologia', NoticiasController.saveTecnologia);

router.get('/Politica/:id?', NoticiasController.getPolitica);
router.get('/Economia/:id?', NoticiasController.getEconomia);
router.get('/Medicina/:id?', NoticiasController.getMedicina);
router.get('/Tecnologia/:id?', NoticiasController.getTecnologia);

router.get('/Politicas', NoticiasController.getPoliticas);
router.get('/Economias', NoticiasController.getEconomias);
router.get('/Medicinas', NoticiasController.getMedicinas);
router.get('/Tecnologias' , NoticiasController.getTecnologias);


router.put('/Politica/:id', NoticiasController.updatePolitica);
router.put('/Economia/:id', NoticiasController.updateEconomia);
router.put('/Medicina/:id', NoticiasController.updateMedicina);
router.put('/Tecnologia/:id', NoticiasController.updateTecnologia);

router.delete('/Politica/:id', NoticiasController.deletePolitica);
router.delete('/Economia/:id', NoticiasController.deleteEconomia);
router.delete('/Medicina/:id', NoticiasController.deleteMedicina);
router.delete('/Tecnologia/:id', NoticiasController.deleteTecnologia);

router.post('/uploadImageMPolitica/:id', multipartMiddleware, NoticiasController.uploadImageMPolitica);
router.post('/uploadImageMEconomia/:id', multipartMiddleware, NoticiasController.uploadImageMEconomia);
router.post('/uploadImageMMedicina/:id', multipartMiddleware, NoticiasController.uploadImageMMedicina);
router.post('/uploadImageMTecnologia/:id', multipartMiddleware, NoticiasController.uploadImageMTecnologia);

router.post('/uploadImagePPolitica/:id', multipartMiddleware, NoticiasController.uploadImagePPolitica);
router.post('/uploadImagePEconomia/:id', multipartMiddleware, NoticiasController.uploadImagePEconomia);
router.post('/uploadImagePMedicina/:id', multipartMiddleware, NoticiasController.uploadImagePMedicina);
router.post('/uploadImagePTecnologia/:id', multipartMiddleware, NoticiasController.uploadImagePTecnologia);

router.post('/uploadImageSPolitica/:id', multipartMiddleware, NoticiasController.uploadImageSPolitica);
router.post('/uploadImageSEconomia/:id', multipartMiddleware, NoticiasController.uploadImageSEconomia);
router.post('/uploadImageSMedicina/:id', multipartMiddleware, NoticiasController.uploadImageSMedicina);
router.post('/uploadImageSTecnologia/:id', multipartMiddleware, NoticiasController.uploadImageSTecnologia);

router.post('/uploadImageTPolitica/:id', multipartMiddleware, NoticiasController.uploadImageTPolitica);
router.post('/uploadImageTEconomia/:id', multipartMiddleware, NoticiasController.uploadImageTEconomia);
router.post('/uploadImageTMedicina/:id', multipartMiddleware, NoticiasController.uploadImageTMedicina);
router.post('/uploadImageTTecnologia/:id', multipartMiddleware, NoticiasController.uploadImageTTecnologia);

router.post('/uploadImageCPolitica/:id', multipartMiddleware, NoticiasController.uploadImageCPolitica);
router.post('/uploadImageCEconomia/:id', multipartMiddleware, NoticiasController.uploadImageCEconomia);
router.post('/uploadImageCMedicina/:id', multipartMiddleware, NoticiasController.uploadImageCMedicina);
router.post('/uploadImageCTecnologia/:id', multipartMiddleware, NoticiasController.uploadImageCTecnologia);

router.post('/uploadImageQPolitica/:id', multipartMiddleware, NoticiasController.uploadImageQPolitica);
router.post('/uploadImageQEconomia/:id', multipartMiddleware, NoticiasController.uploadImageQEconomia);
router.post('/uploadImageQMedicina/:id', multipartMiddleware, NoticiasController.uploadImageQMedicina);
router.post('/uploadImageQTecnologia/:id', multipartMiddleware, NoticiasController.uploadImageQTecnologia);



router.get('/get-image/:image', NoticiasController.getImageMFile);


module.exports = router;
