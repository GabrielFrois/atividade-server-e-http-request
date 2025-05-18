import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getConcursoMaisRecente, getConcursoPorNumero } from './controllers/megasenaController';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/concurso/mais_recente', getConcursoMaisRecente);
app.get('/concurso/:numero', getConcursoPorNumero);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
