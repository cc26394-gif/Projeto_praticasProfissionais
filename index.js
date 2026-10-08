import 'dotenv/config';
import app from './nodejs/src/app.js';

const porta = process.env.PORTA;

app.listen(porta, () => console.log(`API funcionando!\nServidor rodando em: http://localhost:${porta}`));



