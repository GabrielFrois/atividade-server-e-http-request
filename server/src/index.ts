import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getConcursoMaisRecente, getConcursoPorNumero } from './controllers/megasenaController';
import { pool } from './controllers/db';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/mais_recente', getConcursoMaisRecente);
app.get('/:numero', getConcursoPorNumero);

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT concurso FROM megasena ORDER BY concurso DESC LIMIT 1');
    const ultimo = result.rows[0]?.concurso;

    if (ultimo) {
      res.redirect(`/${ultimo}`);
    } else {
      res.status(404).send('Nenhum concurso encontrado.');
    }
  } catch (error) {
    res.status(500).send('Erro ao buscar o concurso mais recente.');
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
