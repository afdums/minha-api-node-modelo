const express = require('express');

const app = express();

const calculadoraRoutes = require('./routes/calculadora-routes.js');
app.use('/', calculadoraRoutes);

module.exports = app;