// Importa a configuração do banco de dados (conexão e modelos)
import './database';

// Importa o framework Express para criar o servidor e gerenciar rotas
import express from 'express';

// Importa as rotas definidas em arquivos separados
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';

class App {
  constructor() {
    // Cria uma instância da aplicação Express
    this.app = express();

    // Chama os métodos que configuram os middlewares e rotas
    this.middlewares();
    this.routes();
  }

  // Método que configura os middlewares
  middlewares() {
    // Middleware para interpretar dados de formulários (URL-encoded)
    this.app.use(express.urlencoded({ extended: true }));

    // Middleware para interpretar dados no formato JSON
    this.app.use(express.json());
  }

  // Método que define as rotas da aplicação
  routes() {
    // Rota para a página inicial ('/')
    this.app.use('/', homeRoutes);

    // Rota para operações de usuários ('/users/')
    this.app.use('/users/', userRoutes);

    // Rota para autenticação de tokens ('/tokens/')
    this.app.use('/tokens/', tokenRoutes);

    // Rota para operações relacionadas a alunos ('/alunos/')
    this.app.use('/alunos/', alunoRoutes);
  }
}

// Exporta a instância da aplicação Express para ser utilizada no servidor
export default new App().app;
