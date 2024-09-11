import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.store);

export default router;

/*
Métodos para controller
index => para listar os usuários => GET
store/create => cria um novo usuário -> POST
delete => apaga um usuário -> DELETE
show => mostra um usuário -> GET
update => atualiza um usuário -> PATCH OU PUT
*/