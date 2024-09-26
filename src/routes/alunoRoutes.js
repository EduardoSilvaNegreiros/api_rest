// Importa o Router do Express para criar rotas
import { Router } from 'express';

// Importa o controlador responsável pelas operações relacionadas a alunos
import alunoController from '../controllers/AlunoController';

// Cria uma nova instância do Router
const router = new Router();

// Define uma rota GET para a raiz ('/') que chama o método index do AlunoController
router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/:id', alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', alunoController.delete);

// Exporta o router para que possa ser utilizado em outras partes da aplicação
export default router;
