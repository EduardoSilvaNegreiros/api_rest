// Importa o Router do Express
import { Router } from 'express';

// Importa o controlador da Home
import homeController from '../controllers/HomeController';

// Cria uma nova instância do Router
const router = new Router();

// Define a rota GET para a página inicial
router.get('/', homeController.index); // Executa 'index' do 'homeController'

// Exporta o router
export default router;
