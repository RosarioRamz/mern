const mongoose = require('mongoose')
mongoose.connect('mongodb://172.19.0.2:27017/mern')
.then(
    db => console.log('Conexión exitosa db')
).catch(
    err =>console.log(err)
)