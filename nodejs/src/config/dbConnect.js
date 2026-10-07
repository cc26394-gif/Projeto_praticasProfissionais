import 'dotenv/config';
import mssql from 'mssql';

const stringSQL = process.env.CONNECTION_STRING;

async function conectaBD() {
    try {
        await mssql.connect(stringSQL);
        return mssql;
    } catch (error) {
        console.log("Erro no acesso ao BD.", error)
    }
}

export default conectaBD;