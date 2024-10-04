import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();

// Rota para a página inicial
router.get('/', homeController.index);

export default router;
