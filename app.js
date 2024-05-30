//Mengimpor modul
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

//Membuat aplikasi express
const app = express();

//Menggunakan middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Mengimpor dan menggunakan route
var routes = require('./routes/user_route')
routes(app)


module.exports = app