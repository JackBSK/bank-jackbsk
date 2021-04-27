// creamos un archivo con las credenciales para acceder a la base de datos
// (archivo.env), para esto instalamos una dependencia "dotenv -> npm i dotenv"
// const dotenv = require('dotenv').config(); console.log(process.env.DB_USER,
// process.env.DB_PASSWORD, process.env.DB_NAME)

require('dotenv').config();
const express = require('express');
//Importar un modelo de base de datos
const {AccountTypes, Clients, Accounts} = require('./models');
const accounts = require('./models/accounts');


const app = express();

//Agregamos el motor de plantillas ejs

app.set('view engine', 'ejs');

// CRUD => create,read, update, delete Para poder leer los datos que envia el
// cliente con el formato URL encoded
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("servidor academlo");
});

//Read

app.get("/account_types", async(req, res) => {
    let results = await AccountTypes.findAll({raw: true, nest: true, include: [{model:accounts}]});
    console.log(results)
    res.render('account_types', {accountTypes: results});
});
app.get("/accounts", async(req, res) => {
    let results = await Clients.findAll({raw: true, nest: true, include: [{model: AccountTypes}]});
    console.log(results)
});

app.get("/clients", async(req, res) => {
    let results = await Clients.findAll({raw: true, include:[ {model: Accounts} ], nest: true});
    console.log(results)
    res.render('clients', {clients: results});
});

//Create

app.post("/account_types", async(req, res) => {
    //sacar los datos que nos esta enviando el cliente
    const {name, description, created_at, update_at} = req.body; // desestructuracion
    try {
        //Creamos un registro en la table account_types
        let results = await AccountTypes.create({name, description, created_at, update_at});
        //enviamos una respuesta satisfactoria
        res.send("Se ha agregado un tipo de cuenta");
    } catch (error) {
        console.log(error);
        res.send("No se ha podido agregar el tipo de cuenta")
    }
});

app.post("/clients", async(req,res) => {
    const{first_name, last_name, email, telephone, created_at, update_at} = req.body;
    try{
        let results = await Clients.create({first_name, last_name, email, telephone, created_at, update_at});
        res.send("Se ha agregado un nuevlo cliente");
    }catch (error) {
        console.log("ha ocurrido un error en el envio de datos", error)
    }
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto: ", PORT)
});
