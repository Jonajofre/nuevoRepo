const {Celular}= require("../models/celulares")
const validarId = async (req, res, next) =>{
    const celular = await Celular.findById(req.params.id)
    if (celular !== null){
        next();
    }else{
        res.json({msg: "el id es invalido"})
    }
}
module.exports = {validarId}