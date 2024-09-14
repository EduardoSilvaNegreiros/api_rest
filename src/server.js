import app from './app'; // Importa a aplicação Express configurada no arquivo 'app.js'.

const port = 3003; // Define a porta onde o servidor vai escutar as requisições.

app.listen(port, () => {
  // Inicia o servidor na porta definida e executa um callback quando o servidor estiver ativo.
  console.log(); // Apenas imprime uma linha em branco para organizar o console.
  console.log(`Escutando na porta ${port}`); // Exibe no console uma mensagem informando que o servidor está escutando na porta especificada.
  console.log(`CTRL + Clique em http://localhost:${port}`); // Exibe uma URL clicável no console, permitindo acessar o servidor localmente.
});
