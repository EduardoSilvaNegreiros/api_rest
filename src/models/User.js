import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model { }

User.init({
  nome: {
    type: DataTypes.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [3, 255],
        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    defaultValue: '',
    validate: {
      isEmail: {
        msg: 'E-mail inválido',
      },
    },
  },
  password_hash: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: '',
    validate: {
      len: {
        args: [6, 50],
        msg: 'A senha precisa ter entre 6 e 50 caracteres',
      },
    },
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

export default User;
