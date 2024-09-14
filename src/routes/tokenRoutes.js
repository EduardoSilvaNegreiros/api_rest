// Importa o módulo Router do Express para criar um roteador
import { Router } from 'express';

// Importa o controlador responsável pelas operações relacionadas a tokens
import tokenController from '../controllers/TokenController';

// Cria uma nova instância do roteador
const router = new Router();

// Define a rota POST para a URL base ('/'), associando-a ao método 'store' do TokenController
router.post('/', tokenController.store);

// Exporta o roteador configurado para ser utilizado em outras partes da aplicação
export default router;
