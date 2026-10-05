import conectaBD from "../config/dbConnect.js";

class Status {
    static async buscarTodos() {
        try {
            const conexao = await conectaBD();
            const result = await conexao.query("SELECT * FROM status_reserva");
            return result.recordset;
        } catch (error) {
            throw new Error(`Erro na consulta ao BD: ${error}`);
        }
    }
}

export default Status;