"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importa o Router do Express
var _express = require('express');

// Importa o controlador da Home
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

// Cria uma nova instância do Router
const router = new (0, _express.Router)();

// Define a rota GET para a página inicial
router.get('/', _HomeController2.default.index); // Executa 'index' do 'homeController'

// Exporta o router
exports. default = router;
