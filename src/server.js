const express  = require('express');
const  mongoose = require('mongoose');
const  routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://curso:curso@curso-dczru.mongodb.net/curso?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//req.query = acessa query params (Filtros)
//req.params = acessa router parms (Para CRUD)
//req. body =  acessa o corpo da requisição (pra criação e edição)

app.use(express.json());
app.use(routes);

app.listen(3333);

module.exports = app;   
