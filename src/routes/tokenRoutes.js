import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();

// Rota para gerar tokens
router.post('/', tokenController.store);

export default router;
