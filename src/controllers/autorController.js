import { autor } from "../models/autor.js"; //faz o import específico, por isso há chaves.

class AutorController{ //Classe de controle sobre o atributo autor.
    //static é um método que podemos utilizar sem instanciar.
    //método para listar todos os autores presentes no Database.
    static async listarAutores (req, res) {
        try{ //método try catch para tratamento de erros.
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        }catch (erro) { 
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }
        
    }

    //método para Cadastrar um novo autor no database.
    static async cadastrarAutor( req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor criado com sucesso ", livro: novoAutor}); //status 201 refere a criação com sucesso.
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar autor`}); //status 500 refere a erro interno no servidor.
        }
    }

    //método para listar um autor em específico.
    static async listarAutorPorId (req, res) {
        try{
            const id = req.params.id; //variável que faz a requisição do id.
            const autorEncontrado = await autor.findById(id); 
            res.status(200).json(autorEncontrado);
        }catch (erro) { 
            res.status(500).json({ message: `${erro.message} - falha na requisição do autor` })
        }
        
    }

    //método para atualizar os dados de um autor.
    static async atualizarAutor (req, res) {
        try{
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado!"});
        }catch (erro) { 
            res.status(500).json({ message: `${erro.message} - Falha na requisição do autor` })
        }
        
    }

    //método para deletar os dados de um autor.
    static async deletarAutor (req,res){
        try{
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluído com sucesso!"});
        }catch(erro) {
             res.status(500).json({message: `${erro.message} - falha na exclusão do autor` })
        };
        
    }

};

export default AutorController
