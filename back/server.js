
const express=require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
require('./src/db/database')
const usuarioRouter=require('./src/routes/router')
const pacienteRouter=require('./src/routes/routerPaciente')

app.use(
    bodyParser.urlencoded({
    extended:true

})
)
app.use(cors())
app.use(bodyParser.json())
app.use('/',usuarioRouter)
app.use('/paciente',pacienteRouter)

app.get('/',(req,res) =>{
    res.send('Hello world personas...')
})

app.listen(3002,function(){
    console.log('Servidor activo')
})