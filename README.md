# Api-estoque

Api que Gerencia um estoque da Fabrica de bolos.

### 🏭 Como Funcionar

-   Clonar o Repositório

```tsx
git clone https://github.com/vitorcrl/Api-estoque.git
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

-   Instalação de dependencias

```tsx
yarn init
```

-   Iniciar a Api

```tsx
yarn start
```

-   Criação de Migrations from Database Postgres.

```tsx
yarn sequelize db:migrate
```

## 🏭 Funcionalidades

As execussões são realizadas pelo aplicativo Insomnia ou TDD realizado, assim realizando o fluxo de trabalhos da Api pelo aplicativo, por meio de rotas que ligam a nossa aplicação.

POST/Users

Primeiramente é necessário a criação de usuarios, para que seja possivel a inclusão de itens no banco de dados. A rota que utilizamos é POST e "[http://localhost:3333](http://localhost:3333/)/users" que recebem User e Password . Enviando as request para a Api com o formato de Json.

POST/Authenticate

Apos precisamos Authenticar o Usuario na rota Sessions, onde temos a autenticação por token JWT, utilizando o user e a senha criados anteriormente. Com a rota POST e "[http://localhost:3333](http://localhost:3333/)/sessions" recebemos o token para, adicionarmos na requisição do Bearer Token, as seguintes solicitações são possíveis sobre essa autenticação.

POST/Items

Com as requisições feitas anteriormente podemos criar a Rota que adiciona os itens no nosso Database, essa rota tem as requisições de Name, Quantity e User, todas sendo enviadas por um request.json. A rota de criação é "[http://localhost:3333](http://localhost:3333/)/items" assim criando no nosso banco de dados Postgres.

GET /Items

A primeira rota Get realiza a pesquisa de items dentro do nosso banco, ou seja items que serão utilizados, a rota de envio é "[http://localhost:3333](http://localhost:3333/)/items". Podemos pesquisar colocando os mecanismo de pesquisa em json e com as variaveis: name, quantity e user. Para que possamos ver a sua disponibilidade no Banco de dados.

GET/UserItems

Nessa rota GET, é realizado a solicitação de entrada de items sendo pesquisada por usuario, a rota de envio das informações é "[http://localhost:3333](http://localhost:3333/)/useritems". Ou sejá todos os items que o usuario adicionou no Estoque. O mecanismo de pesquisa desses items é realizado somente pelo User, assim possamos ver todas as suas entradas.

PUT/Items

Na rota PUT realizamos as retiradas dos items utilizados na produção dos bolos da nossa Fábrica. Para a retirada precisamos das sequintes requisições Id do produto, quantity de retirada, e user que retirou os items. A rota que utilizamos para a utilização desse PUT é "[http://localhost:3333](http://localhost:3333/)/items" de forma que fique funcional.

### 🏭 Tecnologias Utilizadas:

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
