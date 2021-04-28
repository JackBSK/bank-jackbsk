//Importamos express y dotenv
const express = require('express');
require('dotenv').config();

//Importar un modelo de base de datos
const {AccountTypes, Clients} = require('./models');

const app = express();
app.set('view engine', 'ejs');
//CRUD -> create, read, update, delete
//Para poder leer los datos que envia el cliente con el formato urlencode
app.use(express.urlencoded({extended: false}));

app.get("/",(req, res) => {
    res.send("Servidor Academlo");
});

//Create

app.post("/account_types", async (req, res) => {
    const {name, description, created_at, uploaded_at} = req.body;
    let results = await AccountTypes.create({name, description, created_at, uploaded_at});
    try {
        //creamos un registro en la tabla account_types
        let results = await AccountTypes.create({name, description});
        console.log(results);
        //respuesta satisfactoria
        res.send("Se ha agregado un tipo de cuenta");
    }catch(error){
        console.log(error);
        res.status(400).send("No se ha podido agregar el tipo de cuenta");
    }
})
app.post("/clients", async (req, res) => {
    const {first_name, last_name, email, telephone, created_at, uploaded_at} = req.body;
    let results = await Clients.create({first_name, last_name, email, telephone});
    try {
        //creamos un registro en la tabla account_types
        let results = await Clients.create({first_name, last_name, email, telephone});
        console.log(results);
        //respuesta satisfactoria
        res.send("Se ha agregado un nuevo cliente");
    }catch(error){
        console.log(error);
        res.status(400).send("No se ha podido agregar el tipo de cuenta");
    }
})
//Read
app.get("/account_types", async (req,res) => {
    let results = await AccountTypes.findAll({raw: true});
    res.render('account_types', {accountTypes: results})
});
app.get("/clients", async (req,res) => {
    let results = await Clients.findAll({raw: true});
    res.render('clients', {clients: results})
    // console.log(results)
});

const PORT = process.env.PORT || 8080;
//Create server
app.listen(PORT, () => {
    console.log("escuchando en el puerto",PORT)
});