// Importa a configuração do banco de dados (conexão e modelos)
import './database';

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
    // Middleware para interpretar dados de formulários (URL-encoded)
    this.app.use(express.urlencoded({ extended: true }));

    // Middleware para interpretar dados no formato JSON
    this.app.use(express.json());
  }

  // Método que define as rotas da aplicação
  initializeRoutes() {
    // Rota para a página inicial ('/')
    this.app.use('/', homeRoutes);

    // Rota para operações de usuários ('/users/')
    this.app.use('/users/', userRoutes);

    // Rota para autenticação de tokens ('/tokens/')
    this.app.use('/tokens/', tokenRoutes);

    // Rota para operações relacionadas a alunos ('/alunos/')
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

// Exporta a instância da aplicação Express para ser utilizada no servidor
export default new App().app;
