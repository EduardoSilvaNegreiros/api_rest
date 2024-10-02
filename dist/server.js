"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importa a instância do aplicativo configurado no arquivo app.js
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

// Define a porta em que o servidor vai escutar
const port = 3003;

// Inicia o servidor para escutar na porta definida
_app2.default.listen(port, () => {
  // Exibe mensagens no console quando o servidor é iniciado com sucesso
  console.log();
  console.log(`Escutando na porta: ${port}`); // Informa em qual porta o servidor está rodando
  console.log(`CTRL + Clique em http://localhost:${port}`); // Sugere ao usuário como abrir o servidor no navegador
});
