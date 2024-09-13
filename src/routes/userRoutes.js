import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
router.get('/', userController.index); // Lista usuários (Falha de segurança)
router.get('/:id', userController.show); // Lista usuário (Falha de segurança)

// São necessários (Não é falha de segurança)
router.post('/', userController.store);
router.put('/', loginRequired, userController.update); // Não pode usar o Id para deixar o usuário editar, mas precisa fazer login para acessar e o usuário poder atualizar suas próprias informações
router.delete('/', loginRequired, userController.delete); // Não pode usar o Id para deixar o usuário deletar

export default router;

/*
Métodos para controller
index => para listar os usuários => GET
store/create => cria um novo usuário -> POST
delete => apaga um usuário -> DELETE
show => mostra um usuário -> GET
update => atualiza um usuário -> PATCH OU PUT
*/
