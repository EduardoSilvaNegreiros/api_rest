import { Router } from 'express';
import TokenController from '../controllers/TokenController';

const router = Router();

router.post('/', TokenController.store);

export default router;
