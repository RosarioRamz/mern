const mongoose = require('mongoose')
mongoose.connect('mongodb://mongodb:27017/mern')
.then(
    db => console.log('Conexión exitosa db')
).catch(
    err =>console.log(err)
)