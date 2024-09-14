// Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente definidas no arquivo .env
dotenv.config();

// Importa o módulo express para criar o servidor web
import express from 'express';

// Importa o arquivo de configuração do banco de dados
import './config/database';

// Importa as rotas específicas para cada funcionalidade
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';

// Define a classe principal do aplicativo
class App {
  // O construtor inicializa a aplicação Express e configura middlewares e rotas
  constructor() {
    this.app = express(); // Cria uma nova instância da aplicação Express
    this.middlewares(); // Configura os middlewares
    this.routes(); // Configura as rotas
  }

  // Método para configurar middlewares da aplicação
  middlewares() {
    // Configura o middleware para parsear o corpo das requisições como URL-encoded
    this.app.use(express.urlencoded({ extended: true }));
    // Configura o middleware para parsear o corpo das requisições como JSON
    this.app.use(express.json());
  }

  // Método para configurar as rotas da aplicação
  routes() {
    // Define a rota base para as rotas de home
    this.app.use('/', homeRoutes);
    // Define a rota base para as rotas de usuários
    this.app.use('/users/', userRoutes);
    // Define a rota base para as rotas de tokens
    this.app.use('/tokens/', tokenRoutes);
  }
}

export default new App().app;
