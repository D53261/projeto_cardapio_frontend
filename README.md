# Cardápio Digital - Front-end

Este é um projeto de **Cardápio Digital**, desenvolvido com o objetivo de gerenciar categorias e itens de um cardápio, permitindo operações como criação, listagem e exclusão de categorias e alimentos. Tal aplicação fora feita em conjunto com videos do canal do Youtube da **Fernanda Kipper DEV**, na qual propos a ideia e me auxiliou na produção do código, com algumas partes extras sendo adicionadas por mim. As interfaces extras relacionadas ao adicional de categorias que fiz utilizando de conhecimentos de React que adiquiri nos videos foram um toque a mais no projeto para conectar-se corretamente com o back-end e tornar a aplicação mais interativa e completa.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **JavaScript (ES6+)**: Linguagem de programação principal do projeto.
- **CSS**: Para estilização dos componentes.
- **Node.js**: Ambiente de execução para o JavaScript.
- **npm**: Gerenciador de pacotes utilizado para instalar dependências.
- **Vite**: Ferramenta de build rápida e leve para desenvolvimento web moderno.

## Estrutura de Pastas

Dentro da pasta `src`, temos as seguintes subpastas e suas funções:

- **components**: Contém os componentes reutilizáveis da aplicação, como botões, cabeçalhos, etc.
- **hooks**: Contém a conexão com o back-end feito em Spring Boot e todas as funcionalidades que ele dispõe, como GET, POST e outros.
- **interface**: Contém as definições de tipos e interfaces TypeScript utilizadas para garantir a tipagem estática e a consistência dos dados no projeto.

## Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em sua máquina:

1. Certifique-se de ter o **Node.js** e o **npm** instalados.
2. Clone este repositório:
  ```bash
  git clone <URL_DO_REPOSITORIO>
  ```
3. Navegue até a pasta do projeto:
  ```bash
  cd cardapio
  ```
4. Instale as dependências:
  ```bash
  npm install
  ```
5. Inicie o servidor de desenvolvimento:
  ```bash
  npm run dev
  ```
6. Abra o navegador e acesse `http://localhost:5173`.

> **Observação**: Para que a aplicação front-end deste repositório funcione corretamente, é necessário que o back-end esteja em execução simultaneamente em outra porta, permitindo assim a conexão com o banco de dados.

## Feito por:
### Danilo Ribeiro 
### Linkedin: https://www.linkedin.com/in/danilo-ribeiro-catroli-da-silva/
### Email: danilo051007@gmail.com
