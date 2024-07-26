Tech Challenge Fase 2 Grupo 15
CRUD básico de uma livraria

Descrição do projeto:
O projeto é uma API REST que simula o funcionamento de uma livraria onde buscamos realizar alguns métodos como Busca de livros, autores, buscas específicas, modificações em livros ou autores existentes, remoção de livros e autores que não se encontram mais no estoque entre outras funções.

Para a realização do projeto foi utilizado o node.js juntamente do mongoose, express e mongodb como database. A motivação por trás foi um melhor entendimento de API's e a criação de um CRUD, através da utilização de métodos e seu relacionamento com rotas.

Alguns desafios enfrentados foram a busca por métodos de não colocar informações sensíveis no projeto, que foi resolvido através da utilização de variáveis de ambiente, outros desafios que foram surgindo e ainda existem é a criação de métodos mais específicos que aumentem as possibilidades de busca do programa, bem como formas de manter a estrutura da API mais segura.

Instalação do projeto:
O projeto pode ser encontrado no seguinte link do github:
https://github.com/ToshioMizuta/Tech-Challenge-2.git

Após clonar o projeto e abrir em alguma IDE de sua preferência (a utilizada foi o VScode), devemos configurar o servidor. Para isso foi utilizado o MongoAtlas, foi criado um cluster M0, e então feito a conexão clicando no botão "connect" e utilizando a opção "drivers".

Para realizar a conexão basta copiar a "conection string" fornecida pelo próprio mongoAtlas: 

mongodb+srv://<username>:<password>@Cluster0.weufbax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

substitua os campos <username> e <password> com as respectivas informações.
Para não colocar diretamente a senha dentro do código, utilize o método das variáveis de ambiente. Primeiro vamos instalar o dotenv, em seguida vamos no arquivo server.js e fazer o import dele: import "dotenv/config"
então criamos um arquivo ".env" onde vamos criar uma variável de ambiente (com algum nome que desejar exemplo: CONNECTION_STRING_DB) e colocar a connection string do Mongo Atlas.
Após isso tudo, basta ir no arquivo dbConnect.js e na seguinte linha colocar a variável criada por você:

mongoose.connect(process.env.<nome_da_sua_variável_de_ambiente>);

para inicializar o projeto no VScode, basta digitar no terminal "npm run dev"

e então podemos abrir o postman para fazer as requisições dos métodos.

A documentação do Postman pode ser encontrada no seguinte link:
https://www.postman.com/toshiomizuta/workspace/tech-challenge-fase-2/collection/37085919-522ba0dd-0f15-46f1-8739-49ab18d8dbe4?action=share&creator=37085919

nele podemos fazer diversas requisições.
Métodos GET: 
O método Encontrar_Livros basta clicar em send e ele buscará todos os livros da DB

O método Encontrar_Livros_Por_Id temos que inserir o Id do livro a ser buscado após a rota Livros que se encontra na URL:
http://localhost:3000/livros/<id>

O método Encontrar_Autores faz a busca de todos autores da DB, basta apertar em send.

O método Encontrar_Autores_Por_Id Realiza a busca dos autores através do Id deles, e funciona de modo análogo ao método Encontrar_Livro_Por_Id:
http://localhost:3000/autores/<id>

Métodos POST:
O método Criar_Livros realiza a criação de um novo livro no DB, para isso precisamos colocar alguns parâmetros na aba "body" do postman, no formato JSON, os parâmetros aceitos são os seguintes:
"titulo", "editora", "autor", "preco" e "paginas"
o título é obrigatório na criação do livro.
exemplo de body:

{
 "titulo": "Harry Potter e a Pedra Filosofal",
 "editora": "Rocco",
 "autor": "66a26b7311ca193ffbf1d4be",
 "preco": "36.00",
 "paginas": "264"
}

O método Criar_Autores funciona de modo análogo ao Criar_Livros, porém os parâmetros utilizados são:
"nome", "nacionalidade"

exemplo de body:

{
    "nome" :"Aluísio Azevedo",
    "nacionalidade": "Brasileiro"
}

Métodos PUT:

O método Modificar_Livros realiza a modificação de parâmetros associados a um livro, para modificá-lo temos de utilizar um body com o respectivo parâmetro mencionado anteriormente a ser modificado entre aspas, e o novo valor a ser utilizado também entre aspas.
exemplo de body:

{
    "titulo": "Harry Potter e o Cálice de Fogo",
    "paginas": "636",
    "preco": "63.68"
}

O método Modificar_Autores funciona de modo análogo ao Modificar_Livros, mas apenas aceita os parâmetros associados a autores.
exemplo de body:

{
    "nome": "Machado de Assis",
    "nacionalidade": "Brasileiro"
}

Método DELETE:

O método Deletar_Livros e Deletar_Autores, como o próprio nome diz, realiza a remoção dos respectivos do banco de dados. Para realizar a remoção pelo Postman, basta utilizar o método DELETE e colocar o Id do livro, ou autor a ser removido após a rota a qual esse autor ou livro se refere na URL:
Exemplo:

localhost:3000/livros/<id>
localhost:3000/autores/<id>

Projeto realizado Por Matheus Toshio Mizuta e Felipe Rodrigues.