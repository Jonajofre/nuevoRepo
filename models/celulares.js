const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({

marca:{
    type: String, 
    required: true,
},
modelo: {
    type: String, 
    required: true,
},
IMEI:{
    type: Number,
    required: true,
    unique: true,
},
so:{
    type: String,
},
unidadAlmacenamiento:{
    type: String, 
    required: true,
},
ram:{
    type: String,
    required: true,
}
});

const Celular = mongoose.model('Celular', storeSchema);

module.exports = {Celular}