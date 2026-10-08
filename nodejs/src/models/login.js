import conectaBD from "../config/dbConnect.js";

class Login{
    constructor(id,usuario_id,login,senha,data_login){
        this.id=id
        this.usuario_id=usuario_id
        this.login=login
        this.senha=senha
        this.data_login=data_login

    }
    static async buscarTodos(){
        try{
            const conexao=await conectaBD()
            const result =await conexao.query("SELECT * from login_no_sistema ")

            return result.recordset.map(
                row => new Login(row.id, row.usuario_id, row.login, row.senha, row.data_login)
            )
        }
        catch(error){
            throw new Error(`Erro na cosulta ao banco de dados:${error.message}`)
        }
    }
    static async buscarPorId(id){
        try{
            const conexao = await conectaBD()
            const result = await conexao.query(`SELECT * from  login_no_sistema WHERE id=${id}`)
            
            return result.recordset.map(
                row => new Login(row.id,row.usuario_id,row.login,row.senha, row.data_login)      
            ) 
        }
        catch(error){
            throw new Error(`Erro na cosulta ao banco de dados:${error.message}`)
        }
    }
    static async removerLogin(id){
        try{
            const conexao = await conectaBD()
            const result = await conexao.query(`DELETE from login_no_sistema WHERE id=${id}`)
            return result
        }
        catch(error){
            throw new Error(`Erro em remover o login do banco de dados:${error.message}`)
        }
    }
    static async inserirLogin(novologin){
        const {usuario_id,senha, login,data_login} = novologin
        try{
            const conexao= await conectaBD()
            const result= await conexao.query(`INSERT into login_no_sistema (usuario_id,senha,login) VALUES('${usuario_id}','${senha}','${login}')`)
            return result
        }
        catch(error){
            throw new Error(`Erro na inserção do item ao banco de dados:${error.message}`)
        }
    }
    static async alterarLogin(updtlogin){
        const{id,login,senha}= updtlogin
        try{
            const conexao = await conectaBD()
            const result = await conexao.query(`UPDATE login_no_sistema SET login='${login}',senha='${senha}' WHERE id=${id}`)
            return result
        }
        catch(error){
            throw new Error(`Erro em atualizar o item do banco de dados:${error.message}`)
        }
    }        
}

export default Login;