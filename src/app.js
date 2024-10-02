// Importa a configuração do banco de dados (conexão e modelos)
import './database';
import { resolve } from 'path';

// Importa o framework Express para criar o servidor e gerenciar rotas
import express from 'express';

// Importa as rotas definidas em arquivos separados
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    // Cria uma instância da aplicação Express
    this.app = express();

    // Configura middlewares e rotas
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  // Método que configura os middlewares
  initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  // Método que define as rotas da aplicação
  initializeRoutes() {
    this.app.use('/', homeRoutes);

    this.app.use('/users/', userRoutes);

    this.app.use('/tokens/', tokenRoutes);

    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

// Exporta a instância da aplicação Express para ser utilizada no servidor
export default new App().app;
