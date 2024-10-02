# Projeto API REST com MySQL e Padrão MVC

Este projeto é uma API REST básica, desenvolvida com JavaScript e utilizando o padrão MVC (Models, Views e Controllers). O banco de dados utilizado é o **MySQL** e as operações realizadas seguem o padrão CRUD (Create, Read, Update, Delete).

## Tecnologias Utilizadas

- **API REST**: Comunicação entre o frontend e backend.
- **JavaScript**: Linguagem de programação usada no desenvolvimento do backend.
- **MySQL**: Banco de dados relacional para armazenar e gerenciar as informações.
- **Padrão MVC**: Estrutura de projeto utilizando Models, Views e Controllers para separar a lógica de negócios da interface.
- **Google Cloud Platform**: Hospedagem do projeto no servidor cloud da Google.

## Funcionalidades

- **Create**: Inserir novos registros no banco de dados.
- **Read**: Consultar dados existentes.
- **Update**: Atualizar informações já existentes.
- **Delete**: Remover registros do banco de dados.

## Como Rodar o Projeto

1. Clone este repositório.
2. Configure as variáveis de ambiente para conectar ao banco de dados MySQL.
3. Suba o servidor na **Google Cloud Platform** (ou localmente).
4. Utilize um cliente de API (como Postman) para testar as rotas.

## Estrutura do Projeto

- **Models**: Define a estrutura do banco de dados e interage diretamente com o MySQL.
- **Views**: Interfaces ou respostas enviadas ao cliente (no caso de uma API, pode ser um JSON).
- **Controllers**: Manipula a lógica de negócios e faz a ponte entre as Models e as Views.

## Requisitos

- Node.js
- MySQL
- Google Cloud SDK (se rodando no GCP)

## Instalação

1. Instale as dependências do projeto:
    ```bash
    npm install
    ```

2. Configure o banco de dados no MySQL e ajuste as configurações no arquivo `.env`.

3. Rode o projeto:
    ```bash
    npm run dev
    ```

## Autor

Este projeto foi desenvolvido como parte de um estudo sobre o uso de API REST com MySQL e o padrão MVC.
