// const {Celular}= require("../models/celulares")
// const validarId = async (req, res, next) =>{
//     const celular = await Celular.findById(req.params.id)
//     if (celular !== null){
//         next();
//     }else{
//         res.json({msg: "el id es invalido"})
//     }
// }
const { Celular } = require("../models/celulares");
const validarId = async (req, res, next) => {
  try {
    const celular = await Celular.findById(req.params.id);
    if (celular !== null) {
      next();
    } else {
      res.json({ msg: "el id es invalido" });
    }
  } catch (error) {
    res.json({ msg: "el formato de id es invalido", error });
  }
};
// module.exports = { validarId };
module.exports = {validarId}