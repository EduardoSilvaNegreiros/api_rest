import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas públicas
router.get('/', alunoController.index); // Lista todos os alunos
router.get('/:id', alunoController.show); // Exibe um aluno específico

// Rotas protegidas (requer login)
router.use(loginRequired); // Aplica o middleware para as rotas abaixo
router.post('/', alunoController.store); // Cria um novo aluno
router.put('/:id', alunoController.update); // Atualiza um aluno existente
router.delete('/:id', alunoController.delete); // Deleta um aluno

export default router;
