import app from './app';

const port = process.env.APP_PORT || 3001; // Define um valor padrão para a porta

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log de inicialização
});

// Tratamento de erros para o servidor
app.on('error', (error) => {
  console.error(`Error occurred: ${error.message}`);
});
