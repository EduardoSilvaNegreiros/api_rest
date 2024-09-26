// Importa o Router do Express para criar rotas
import { Router } from 'express';

// Importa o controlador responsável pelas operações relacionadas a alunos
import alunoController from '../controllers/AlunoController';

// Cria uma nova instância do Router
const router = new Router();

// Define uma rota GET para a raiz ('/') que chama o método index do AlunoController
router.get('/', alunoController.index);
router.get('/', alunoController.store);
router.get('/', alunoController.update);
router.get('/', alunoController.show);
router.get('/', alunoController.delete);

// Exporta o router para que possa ser utilizado em outras partes da aplicação
export default router;
