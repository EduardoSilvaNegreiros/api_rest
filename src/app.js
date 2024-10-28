// Importa a configuração do banco de dados (conexão e modelos)
import './database';
import { resolve } from 'path';

// Importa o framework Express e bibliotecas de segurança
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Importa as rotas
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

// Define a lista de origens permitidas para CORS
const whitelist = [
  'https://react1.eduardonegreiros.com.br',
  'http://localhost:3000',
];

// Configurações de CORS
const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

// Classe principal da aplicação
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

// Exporta a instância da aplicação
export default new App().app;
