# Api-estoque

Api que Gerencia um estoque da Fabrica de bolos. É a primeira vez que utilizo a biblioteca do Jest, para utilizar os TDD, aprendi em poucos dias o seu funcionamento. Ainda não tenho certa experiência com a biblioteca por isso utilizei somente um teste em cada rota, e as rotas bem simples, e por esse motivo utilizei a linguagem de JavaScript.

### Como Funcionar

-   Clonar o Repositório

```tsx
git clone https://github.com/vitorcrl/fabrica-estoque.git
```

-   Criar container no docker

```tsx
docker run --name docker -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

docker start docker
```

-   Acessar a pasta Clonada no seu Computador, e abrir o VsCode.

```tsx
code .
```

-   Criação de Migrations from Database Postgres.

```tsx
yarn sequelize db:migrate
```

-   Instalação de dependencias

```tsx
yarn init
```

-   Iniciar a Api

```tsx
yarn start
```

-   Iniciar TDD

```tsx
yarn test
```

## Funcionalidades

As execussões são realizadas pelo aplicativo Insomnia ou TDD realizado, assim realizando o fluxo de trabalhos da Api pelo aplicativo, por meio de rotas que ligam a nossa aplicação.

POST/Users

Primeiramente é necessário a criação de usuarios, para que seja possivel a inclusão de itens no banco de dados. A rota que utilizamos é POST e "[http://localhost:3333](http://localhost:3333/)/users" que recebem User e Password . Enviando as request para a Api com o formato de Json.

POST/Items

Com as requisições feitas anteriormente podemos criar a Rota que adiciona os itens no nosso Database, essa rota tem as requisições de Name, Quantity e User, todas sendo enviadas por um request.json. A rota de criação é "[http://localhost:3333](http://localhost:3333/)/registeritems" assim criando no nosso banco de dados Postgres.

GET /Items

A primeira rota Get realiza a pesquisa de items dentro do nosso banco, ou seja items que serão utilizados, a rota de envio é "[http://localhost:3333](http://localhost:3333/)/registeritems". Podemos pesquisar colocando os mecanismo de pesquisa em json e com as variaveis: name, quantity e user. Para que possamos ver a sua disponibilidade no Banco de dados.

TDD /Cadastro

Existem 2 testes que utilizam cadastro dentro da page, sem utilizar nenhum midleware, somente o cadastro simples. Primeira vez desenvolvendo testes, com uma metodologia diferente e o Jest.
Como Rodar
Se o servidor estiver ligado desconsidere esse codigo.

```tsx
yarn start
```

Rodar os testes.

```tsx
yarn test
```

### Tecnologias Utilizadas:

-   Jest
-   Express
-   Node
-   Docker
-   Postgres
-   Body-parser
-   BcryptJs
-   Jsonwebtoken
-   PG
-   Sequelize
-   yup
-   Supertest
