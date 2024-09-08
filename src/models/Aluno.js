import { Model, DataTypes } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {

    super.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Garante que a chave primária seja gerada automaticamente
        allowNull: false,
      },

      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      peso: DataTypes.FLOAT,
      altura: DataTypes.FLOAT,
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
}

