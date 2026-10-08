import conectaBD from '../config/dbConnect.js';

class Recurso {

    constructor(codigo, nome, tipo , capacidade, localidade) {
        this.codigo = codigo;
        this.nome = nome;
        this.tipo = tipo;
        this.capacidade = capacidade;
        this.localidade = localidade;
    }

    static async buscarTodos() {
        try {
            const conexao = await conectaBD();
            const result = await conexao.query("SELECT * from recurso");

            return result.recordset.map(
                row => new Recurso(row.codigo, row.nome, row.tipo, row.capacidade, row.localidade)
            );

        } catch (error) {
            throw new Error(`Erro na consulta ao banco de dados: ${error.message}`);
        }
    }

    static async buscarPorId(codigo) {
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`SELECT * from recurso WHERE codigo=${codigo}`);

            return result.recordset.map(
                row => new Recurso(row.codigo, row.nome, row.tipo, row.capacidade, row.localidade)
            );
        }
        catch (error) {
            throw new Error(`Erro na consulta ao banco de dados: ${error.message}`);
        }
    }

    static async removerRecurso(codigo) {

        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`DELETE from recurso WHERE codigo=${codigo}`);
            return result;

        }
        catch (error) {
            throw new Error(`Erro na remoção no banco de dados: ${error.message}`);
        }

    }

    static async inserirRecurso(recurso) {
        const nome = recurso.nome;
        const tipo = recurso.tipo;
        const capacidade = recurso.capacidade;
        const localidade = recurso.localidade;
        
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`INSERT into recurso (nome, tipo, capacidade, localidade) VALUES ('${nome}', '${tipo}',${capacidade},'${localidade}')`);
            return result;
        } catch (error) {
            throw new Error(`Erro na inserção no banco de dados: ${error.message}`);
        }
    }

    static async alterarRecurso(recurso) {
        const { codigo, nome, tipo, capacidade, localidade} = recurso
        console.log(recurso);
        try {
            const conexao = await conectaBD();
            const result = await conexao.query(`UPDATE recurso SET nome='${nome}', tipo='${tipo}', capacidade=${capacidade}, localidade='${localidade}' WHERE codigo=${codigo}`);
            return result;
        }
        catch (error) {
            throw new Error(`Erro na alteração no banco de dados: ${error.message}`);
        }
    }


}

export default Recurso;