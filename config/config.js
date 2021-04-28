//importamos "dotenv" y mostramos el usuario y contraseña con "console.log(process.env.DB_USER, process.env.DB_PASSWORD)"

const dotenv = require('dotenv').config();

// ponemos module.exports ya que cambiamos la extencion a .js

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": "127.0.0.1",
    //cambiar el dailecto a postgres
    "dialect": "postgres"
    //tambien puedes definir el puerto en esta zona
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
