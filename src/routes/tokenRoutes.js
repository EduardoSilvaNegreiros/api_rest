// Importa o Router do Express para criar rotas
import { Router } from 'express';

// Importa o controlador responsável pela autenticação de tokens
import tokenController from '../controllers/TokenController';

// Cria uma nova instância do Router
const router = new Router();

// Define uma rota POST para a raiz ('/') que chama o método store do TokenController
router.post('/', tokenController.store);

// Exporta o router para que possa ser utilizado em outras partes da aplicação
export default router;
