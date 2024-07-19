import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

//rotas que indicam aonde realizar os métodos.
routes.get("/autores", autorController.listarAutores); 
routes.get("/autores/:id", autorController.listarAutorPorId); 
routes.post("/autores", autorController.cadastrarAutor); 
routes.put("/autores/:id", autorController.atualizarAutor);
routes.delete("/autores/:id", autorController.deletarAutor);

export default routes;