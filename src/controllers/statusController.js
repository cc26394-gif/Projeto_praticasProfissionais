import Status from "../models/Status.js";

class statusController {
    static async listarStatus(req, res) {
        try {
            const lista = await Status.buscarTodos();
            res.status(200).json(lista);
        } catch (error) {
            res.status(500).json({ message: `${error} - falha na requisição` });
        }
    }
}

export default statusController;