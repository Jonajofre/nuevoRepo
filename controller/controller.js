
const { Celular } = require("../models/celulares");
const {check, validationResult, body } = require("express-validator");
const axios = require('axios');

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaCelulares = async (req,res) =>{
    const celulares = await Celular.find()
    res.json({celulares})
}

const vistaUnicaCel = async (req, res) =>{
    try{
    const celular = await Celular.findById(req.params.id)
    res.json({celular})
} catch(error){
    res.status(400).json({msg: "error con el id",error})
}
}

const crearCel= async (req, res) => {
    try {
        const error = validationResult(req)
    if(error.isEmpty()) {
        const celular = new Celular(req.body);
        await celular.save();
        res.status(201).json({celular, msg: 'guardado'});
    } else{
        res.status(501).json(error)
    }
}catch (err) {
        res.status(501).json({ msg: "No se puede guardar el celular por favor intenta mas tarde", err })
    }
}
const editarCel = async(req, res) =>{
    try {
        const error = validationResult(req)
    if(error.isEmpty()) {
        const {id} = req.params
        const update = await Celular.findByIdAndUpdate(id, req.body)
        res.status(202).json({cel: req.body.computadora, update})
    } else{
        res.status(501).json(error)
    }
    } catch (error) {
        
    }   
}

const borrarCel = async (req, res) =>{
    try {
        const celular = await Celular.findByIdAndDelete(req.params.id)
        res.json({msg: "borrado", computadora})
    } catch (error) {
        res.status(400).json({msg: "problemas al borrar la informacion"})
    }
    }

    const consultaAxios = async (req, res) =>{
        try {
            const respuesta = await axios.get('https://swapi.dev/api/films/1/',{timeout: 10000})
            res.json({status: respuesta.status, data: respuesta.data})
        } catch (error) {
            res.json({status: error.response.status, data: error.response.data})
        }
    
    }



module.exports = {crearCel, vistaCelulares, vistaUno, vistaUnicaCel, editarCel, borrarCel, consultaAxios}