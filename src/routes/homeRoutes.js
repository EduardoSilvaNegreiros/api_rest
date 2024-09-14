// Importa o módulo Router do Express para criar um roteador
import { Router } from 'express';

// Importa o controlador responsável pelas operações da rota inicial
import homeController from '../controllers/HomeController';

// Cria uma nova instância do roteador
const router = new Router();

// Define a rota GET para a URL base ('/'), associando-a ao método 'index' do HomeController
router.get('/', homeController.index);

// Exporta o roteador configurado para ser utilizado em outras partes da aplicação
export default router;
