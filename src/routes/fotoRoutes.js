import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import fotoController from '../controllers/FotoController';

const router = new Router();

// Rota para upload de fotos, com autenticação obrigatória
router.post('/', loginRequired, fotoController.store);

export default router;
