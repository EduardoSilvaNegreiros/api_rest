// Importa o Router do Express para gerenciar rotas
import { Router } from 'express';

// Importa o controlador da Home, que contém a lógica para a rota inicial
import homeController from '../controllers/HomeController';

// Cria uma nova instância do Router para definir as rotas da aplicação
const router = new Router();

// Define a rota GET para a página inicial ('/')
// Quando o usuário acessar a rota '/', o método 'index' do 'homeController' será executado
router.get('/', homeController.index);

// Exporta o router para que ele possa ser utilizado em outros arquivos
export default router;
