import conectaBD from "../config/dbConnect.js";

class Status {

    constructor(codigo, status){
        this.codigo=codigo
        this.status=status
    }

    static async buscarTodos() {
        try {
            const conexao = await conectaBD();
            const result = await conexao.query("SELECT * FROM status_reserva");
            return result.recordset;
        } catch (error) {
            throw new Error(`Erro na consulta ao BD: ${error}`);
        }
    }

    static async buscaPorCodigo(codigo){
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`SELECT * from status_reserva WHERE codigo=${codigo}`);

            
            return result.recordset.map(
                row => new Status(row.codigo, row.status,)
            );
        }
        catch (erro) {
            throw new Error(`Erro na consulta ao banco de dados: ${error.message}`);
        }
    }

    static async removerStatus(codigo){
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`DELETE from status_reserva WHERE codigo=${codigo}`);
            return result

        } catch (error) {
            
             throw new Error(`Erro na remoção no banco de dados: ${error.message}`);
        }
    }
}

export default Status;