const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PacienteSchema = new Schema({
    Tipo: String,
    NombreP: String,
    ApellidosP: String,
    INE: String,
    Correo: String,
    NumeroCasa: Number,
    Sexo: String,
    DiaNacimiento: Number,
    MesNacimiento: Number,
    AnioNacimiento: Number,
    Ciudad: String,
    Colonia: String,
    Direccion: String,
    Telefono: Number,
    Profesion: String
})
module.exports=mongoose.model('paciente',PacienteSchema)