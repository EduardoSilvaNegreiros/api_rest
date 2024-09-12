import { DataTypes, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import sequelize from '../config/database';

class User extends Model {
  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}

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
    unique: {
      msg: 'Email já existe',
    },
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
    type: DataTypes.VIRTUAL,
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

User.addHook('beforeSave', async (user) => {
  if (user.password) {
    user.password_hash = await bcryptjs.hash(user.password, 8);
  }
});

export default User;
