const express = require('express');

const router = express.Router();

const calculadoraController = require('../controllers/calculadora-controller');

const bodyParser = require('body-parser').json();

router.get('/', bodyParser, calculadoraController.welcome);
router.get('/pi', bodyParser, calculadoraController.returnPi);
router.post('/soma', bodyParser, calculadoraController.soma);

module.exports = router;