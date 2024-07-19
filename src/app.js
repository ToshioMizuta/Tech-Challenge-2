import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./Routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com banco de dados feita com sucesso!");
})

const app = express();
routes(app);

export default app;

