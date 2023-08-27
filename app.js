// Imports
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

// Se conecta la Base de Datos
const { conectarDB } = require("./database");

conectarDB();

const app = express();
const port = process.env.PORT || 4500;

// Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//app.use(express.urlencoded({extended: true}));

// Routes
app.use(require("./routes/reserva.routes"));

// Starting the server
app.listen(port, () => console.log(`Server on port ${port}`));
