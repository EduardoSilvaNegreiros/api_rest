import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Rotas públicas
router.get('/', alunoController.index); // Lista alunos
router.get('/:id', alunoController.show); // Exibe aluno específico

// Rotas protegidas
router.use(loginRequired); // Middleware de autenticação
router.post('/', alunoController.store); // Cria aluno
router.put('/', alunoController.update); // Atualiza aluno
router.delete('/', alunoController.delete); // Deleta aluno

export default router; // Exporta o roteador
