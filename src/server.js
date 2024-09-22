// Importa a instância do aplicativo configurado no arquivo app.js
import app from './app';

// Define a porta em que o servidor vai escutar
const port = 3003;

// Inicia o servidor para escutar na porta definida
app.listen(port, () => {
  // Exibe mensagens no console quando o servidor é iniciado com sucesso
  console.log();
  console.log(`Escutando na porta: ${port}`); // Informa em qual porta o servidor está rodando
  console.log(`CTRL + Clique em http://localhost:${port}`); // Sugere ao usuário como abrir o servidor no navegador
});
