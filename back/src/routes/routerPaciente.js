const express = require('express')
const router = express.Router()
const Paciente = require ('../model/pacienteModel')

 //Paciente
 router.post('/agregarRegistro', async (req,res)=>{
    console.log(req.body);
    const paciente = new Paciente(req.body);
    await paciente.save();
    res.redirect('/obtenerRegistros')

    //res.send('Petición recibida');
})

router.get('/eliminarRegistro/:id',async (req,res)=>{
   const {id}= req.params
    await Paciente.remove({_id:id})
    res.redirect('/obtenerRegistros')
})

router.get('/obtenerRegistros', async (req,res)=>{
    const paciente = await Paciente.find()
    res.json(paciente)

})

router.get('/obtenerRegistro/:id', async (req,res)=>{
    const {id} = req.params
    const paciente = await Paciente.findById(id)
    res.json(paciente)

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
    await Paciente.update({_id:id}, req.body)
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