"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importa o Router do Express para criar rotas
var _express = require('express');

// Importa o controlador responsável pela autenticação de tokens
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

// Cria uma nova instância do Router
const router = new (0, _express.Router)();

// Define uma rota POST para a raiz ('/') que chama o método store do TokenController
router.post('/', _TokenController2.default.store);

// Exporta o router para que possa ser utilizado em outras partes da aplicação
exports. default = router;
