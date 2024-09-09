"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: _sequelize.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: _sequelize.Sequelize.STRING,
      sobrenome: _sequelize.Sequelize.STRING,
      email: _sequelize.Sequelize.STRING,
      idade: _sequelize.Sequelize.INTEGER,
      peso: _sequelize.Sequelize.FLOAT,
      altura: _sequelize.Sequelize.FLOAT,
    }, {
      sequelize,
      modelName: 'Aluno',
      tableName: 'alunos',
      underscored: true,
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    });

    return this;
  }
} exports.default = Aluno;
