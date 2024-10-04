"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  // Função auxiliar para extrair os campos id, nome e email de um usuário
  static extractUserData(user) {
    const { id, nome, email } = user;
    return { id, nome, email };
  }

  // Criação de novo usuário
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      return res.json(UserController.extractUserData(novoUser));
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Listagem de todos os usuários
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(500).json({ errors: ['Erro ao buscar usuários'] });
    }
  }

  // Exibição de um usuário específico
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }
      return res.json(UserController.extractUserData(user));
    } catch (e) {
      return res.status(500).json({ errors: ['Erro ao buscar usuário'] });
    }
  }

  // Atualização de usuário existente
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }

      const novosDados = await user.update(req.body);
      return res.json(UserController.extractUserData(novosDados));
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Exclusão de um usuário
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }

      await user.destroy();
      return res.status(204).send(); // '204 No Content' para exclusão bem-sucedida
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
