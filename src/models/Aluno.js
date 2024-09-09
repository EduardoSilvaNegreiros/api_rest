import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Aluno extends Model {}

Aluno.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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

export default Aluno;
