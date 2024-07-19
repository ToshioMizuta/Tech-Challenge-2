import { autor } from "../models/autor.js";
import livro from "../models/livro.js"; // Importa o modelo de livro baseado no Schema com os parâmetros a serem trabalhados

class LivroController{
    //static é um método que podemos utilizar sem instanciar.
    //método para listar todos os livros presentes no database.
    static async listarLivros (req, res) {
        try{ //método try catch para tratamento de erros.
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros); //status 200 significa OK.
        }catch (erro) { 
            res.status(500).json({ message: `${erro.message} - falha na requisição` }) //status 500 significa erro interno no servidor.
        }
        
    }

    //método para cadastrar um novo livro no database.
    static async cadastrarLivro( req, res) {
        const novoLivro = req.body;        
        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({ message: "Livro criado com sucesso ", livro: livroCriado});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro`});
        }
    }

    //método para  listar um livro específico através de seu id.
    static async listarLivroPorId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        }catch (erro) { 
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` })
        }
        
    }

    //método para atualizar os dados de um livro no database.
    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado!"});
        }catch (erro) { 
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` })
        }
        
    }

    //método para deletar os dados de um livro na database.
    static async deletarLivro (req,res){
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso!"});
        }catch(erro) {
             res.status(500).json({message: `${erro.message} - falha na exclusão do livro` })
        };
    }

    static async listarLivrosPorEditora (req, res){
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({editora: editora}); //o primeiro valor editora é a propriedade, e o segundo valor é a variável que guarda a informação.
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca`});
        }
    }

};

export default LivroController
