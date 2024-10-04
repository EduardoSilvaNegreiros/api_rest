"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// Rotas públicas
router.get('/', _AlunoController2.default.index); // Lista alunos
router.get('/:id', _AlunoController2.default.show); // Exibe aluno específico

// Rotas protegidas
router.use(_loginRequired2.default); // Middleware de autenticação
router.post('/', _AlunoController2.default.store); // Cria aluno
router.put('/', _AlunoController2.default.update); // Atualiza aluno
router.delete('/', _AlunoController2.default.delete); // Deleta aluno

exports. default = router; // Exporta o roteador
