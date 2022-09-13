const express = require('express');
const router = express.Router();
const consolaController = require('../controllers/consola') //Ya no necesita la extension
//Create, Read, Update, Delete (CRUD) ABCC (Alta, Bajas, Cambios, Consultas)

//Servicio para mostrar el formulario
router.get('/altaConsola', consolaController.getAltaConsola);
//Servicio para procesar los datos del formulario
router.post('/altaConsola', consolaController.postAltaConsola);
//Servicio para consultar todos los datos
router.get('/consultaConsola', consolaController.getConsultaConsola);
//Servicio para palindrome y F language
router.get('/PaliFlang', consolaController.getPaliFlang);
//Servicio para procesar los datos del formulario
router.post('/PaliFlang', consolaController.postPaliFlang);
module.exports = router;
