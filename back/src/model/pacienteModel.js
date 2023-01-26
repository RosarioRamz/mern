const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PacienteSchema = new Schema({
    tipo: String,
    nombreP: String,
    ApellidosP: String,
    INE: String,
    Convenio: String,
    NumeroCasa: Number,
    Sexo: String,
    DiaNacimiento: Number,
    MesNacimiento: Number,
    AnioNacimiento: Number,
    Ciudad: String,
    Colonia: String,
    Dirección: String,
    Telefono: Number,
    Profesión: String
})
module.exports=mongoose.model('paciente',PacienteSchema)