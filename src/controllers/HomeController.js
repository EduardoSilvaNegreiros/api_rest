class HomeController {
  // Método assíncrono 'index' que lida com a requisição GET na rota '/'
  async index(req, res) {
    // Envia uma resposta em formato JSON com a string 'Index'
    res.json('Index');
  }
}

// Exporta uma instância da classe HomeController para uso em outras partes do aplicativo
export default new HomeController();
