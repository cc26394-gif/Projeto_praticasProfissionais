import Recurso from "../models/Recurso.js";

class recursoController {
    static async listarRecurso(req, res) {
        try {
            const lista = await Recurso.buscarTodos();
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({ message: `${error} - falha na requisição` });
        }
    }

    
    static async buscarPorId(req, res) {
        const codigoProcurado = req.params.id;
        try {
            const listaRecurso = await Recurso.buscarPorId(codigoProcurado);
            res.status(200).json(listaRecurso);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async removerRecurso(req, res) {
        const codigoProcurado = req.params.id;
        try {
            const result = await Recurso.removerRecurso(codigoProcurado);
            res.status(200).json({ message: "Removido com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async inserirRecurso(req, res) {
        try {
			console.log(req.body);
            const result = await Recurso.inserirRecurso(req.body);
            res.status(201).json({ message: "Cadastrado com sucesso" });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async alterarRecurso(req, res) {
        const codigo = req.params.id;
        const nome = req.body.nome;
        const tipo = req.body.tipo;
        const capacidade = req.body.capacidade;
        const localidade = req.body.localidade

        try {
            const result = await Recurso.alterarRecurso({codigo: codigo, nome: nome, tipo: tipo, capacidade:capacidade, localidade: localidade});
            res.status(200).json({ message: "Alterado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

}

export default recursoController;