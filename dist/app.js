"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importa a configuração do banco de dados (conexão e modelos)
require('./database');
var _path = require('path');

// Importa o framework Express para criar o servidor e gerenciar rotas
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

// Importa as rotas definidas em arquivos separados
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

class App {
  constructor() {
    // Cria uma instância da aplicação Express
    this.app = _express2.default.call(void 0, );

    // Configura middlewares e rotas
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  // Método que configura os middlewares
  initializeMiddlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));

    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  // Método que define as rotas da aplicação
  initializeRoutes() {
    this.app.use('/', _homeRoutes2.default);

    this.app.use('/users/', _userRoutes2.default);

    this.app.use('/tokens/', _tokenRoutes2.default);

    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }
}

// Exporta a instância da aplicação Express para ser utilizada no servidor
exports. default = new App().app;
