import Login from "../models/Login.js";

class loginController {

    static async listarLogin(req, res) {
        try {
            const listaLogin = await Login.buscarTodos({});
            res.status(200).json(listaLogin);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async buscarPorId(req, res) {
        const idProcurado = req.params.id;
        try {
            const listaLogin = await Login.buscarPorId(idProcurado);
            res.status(200).json(listaLogin);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async removerLogin(req, res) {
        const idProcurado = req.params.id;
        try {
            const result = await Login.removerLogin(idProcurado);
            res.status(200).json({ message: "Removido com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async inserirLogin(req, res) {
        try {
			console.log(req.body);
            const result = await Login.inserirLogin(req.body);
            res.status(201).json({ message: "Cadastrado com sucesso" });

        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

    static async alterarLogin(req, res) {
        const id = req.params.id;
        const login = req.body.login;
        const senha = req.body.senha;

        try {
            const result = await Login.alterarLogin({id: id, login: login, senha: senha});
            res.status(200).json({ message: "Alterado com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    }

}

export default loginController;