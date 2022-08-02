var express = require('express');
var router = express.Router();
const {vistaCelulares, crearCel, vistaUnicaCel, editarCel, borrarCel} = require('../controller/controller.js');
const {check, validationResult, body} = require('express-validator');
const {validarId} = require("../middleware/validarId")
const {consultaAxios} = require('../controller/controller')

/* GET users listing. */
router.get('/ver', vistaCelulares );
router.get('/ver/:id',validarId, vistaUnicaCel );
router.post('/crear',[
    check('marca').not().isEmpty().withMessage("el campo esta vacio").isLength({max:15, min:2}).withMessage("debe tener mas de una letra la marca del cel"),check('IMEI').not().isEmpty().withMessage("el campo esta vacio").isLength({max:15, min:8}).withMessage("debe tener mas de ocho numeros el IMEI del cel")] ,crearCel );
router.put("/editar/:id",validarId, editarCel);
router.delete("/borrar/:id",validarId, borrarCel)
router.get('/axios', consultaAxios)

module.exports = router;
