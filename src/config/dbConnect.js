import mongoose from "mongoose"; //importa o pacote mongoose, utilizado para realizar a conexão com o servidor mongodb

//função que conecta na database, e utiliza uma variável de ambiente, que fica local apenas no nosso computador
// dessa forma não precisamos nos preocupar em acabar enviando informações sensíveis pelo git, como senhas.
async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default conectaNaDatabase;




