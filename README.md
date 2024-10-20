Projeto API REST com MySQL e Padrão MVC

Este projeto consiste em uma API REST básica, desenvolvida em JavaScript utilizando o padrão MVC (Models, Views, Controllers). O banco de dados utilizado é o MySQL, e as operações seguem o padrão CRUD (Create, Read, Update, Delete).

Tecnologias Utilizadas

API REST: Estrutura de comunicação entre o frontend e o backend.

JavaScript: Linguagem usada no backend para implementação da lógica da aplicação.

MySQL: Banco de dados relacional para armazenar e gerenciar os dados.

Padrão MVC: Estrutura do projeto para organizar a separação da lógica de negócios e a interface.

Google Cloud Platform: Hospedagem do projeto em um servidor cloud da Google.


Funcionalidades

Create: Inserção de novos registros no banco de dados.

Read: Consulta de dados já existentes.

Update: Atualização de informações previamente cadastradas.

Delete: Exclusão de registros do banco de dados.


Como Executar o Projeto

1. Clone o repositório.


2. Configure as variáveis de ambiente para conectar ao banco de dados MySQL.


3. Execute o servidor na Google Cloud Platform ou localmente.


4. Utilize um cliente de API (como Postman) para testar as rotas da API.



Estrutura do Projeto

Models: Define a estrutura dos dados e interage diretamente com o MySQL.

Views: Retorna as respostas da API, geralmente em formato JSON.

Controllers: Contém a lógica de negócios, mediando a interação entre Models e Views.


Requisitos

Node.js

MySQL

Google Cloud SDK (se rodando no GCP)


Instalação

1. Instale as dependências do projeto:

npm install


2. Configure o banco de dados no MySQL e ajuste as variáveis de ambiente no arquivo .env.


3. Execute o projeto:

npm run dev



Autor

Este projeto foi desenvolvido como parte de um estudo prático sobre API REST utilizando MySQL e o padrão MVC.
