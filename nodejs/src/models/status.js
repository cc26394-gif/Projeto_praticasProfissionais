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

    static async buscarPorId(codigo){
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`SELECT * from status_reserva WHERE codigo=${codigo}`);

            
            return result.recordset.map(
                row => new Status(row.codigo, row.status,)
            );
        }
        catch (error) {
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

    static async inserirStatus(status_reserva){
        const status=status_reserva.status
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`INSERT into status_reserva (status)VALUES ('${status}')`)
            return result
        } catch (error) {

            throw new Error(`Erro na inserção no banco de dados: ${error.message}`);
        }
    }

    static async alterarStatus(status_reserva){
        const {codigo, status}=status_reserva
        console.log(status_reserva)

        try{
            const conexao = await conectaBD()
            const result = await conexao.query(`UPDATE status_reserva SET status='${status}' WHERE codigo=${codigo}`)
            return result

        }catch(error){
            throw new Error(`Erro na alteração no banco de dados: ${error.message}`);
        }
    }
}

export default Status;