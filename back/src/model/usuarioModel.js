const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UsuarioSchema = new Schema({
    nombre: String,
    matricula: String,
    estado: String,
    pacientes: Number
})
module.exports=mongoose.model('usuario',UsuarioSchema)