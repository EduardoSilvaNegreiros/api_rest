"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController {
  async index(req, res) {
    const novoAluno = await _Aluno2.default.create({
      nome: 'Eduardo',
      sobrenome: 'Negreiros',
      email: 'edunegreiross@gmail.com',
      idade: 18,
      peso: 85,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

exports. default = new HomeController();
