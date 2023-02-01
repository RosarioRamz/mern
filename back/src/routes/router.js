//const task = require('../models/task');
//const Task = require('../models/task')
const express = require('express')
const router = express.Router()
const Usuario = require('../model/usuarioModel')
//Usuario
router.post('/agregarRegistro', async (req,res)=>{
    console.log(req.body);
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.redirect('/obtenerRegistros')

    //res.send('Petición recibida');
})

router.get('/eliminarRegistro/:id',async (req,res)=>{
   const {id}= req.params
    await Usuario.remove({_id:id})
    res.redirect('/obtenerRegistros')
})

router.get('/obtenerRegistros', async (req,res)=>{
    const usuario = await Usuario.find()
    res.json(usuario)

})

router.get('/obtenerRegistro/:id', async (req,res)=>{
    const {id} = req.params
    const usuario = await Usuario.findById(id)
    res.json(usuario)

})

/*router.get('/editarRegistro/:id', async (req, res)=>{
const {id} = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
    task
    });
 });
*/

router.post('/editarRegistro/:id', async (req, res)=>{
    const{id} = req.params
    await Usuario.update({_id:id}, req.body)
    res.redirect('/obtenerRegistros')
 });
/*
 router.get('/hecho/:id', async (req, res)=>{
    const {id} = req.params;
    const task = await Task.findById(id);
    task.estadoCivil = !task.estadoCivil;
    await task.save();
    res.redirect('/obtenerRegistros');
    });
 })*/

module.exports = router