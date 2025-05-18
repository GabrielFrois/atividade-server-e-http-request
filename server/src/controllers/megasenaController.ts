import { Request, Response } from 'express';
import { pool } from './db';

// GET: Concurso mais recente
export function getConcursoMaisRecente(req: Request, res: Response): void {
  pool.query('SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1')
    .then(result => res.json(result.rows[0]))
    .catch(() => res.status(500).json({ error: 'Erro ao buscar o concurso mais recente.' }));
}

// GET: Concurso por número
export function getConcursoPorNumero(req: Request, res: Response): void {
  const { numero } = req.params;

  pool.query('SELECT * FROM megasena WHERE concurso = $1', [numero])
    .then(result => {
      if (result.rows.length === 0) {
        res.status(404).json({ mensagem: 'Concurso não encontrado' });
      } else {
        res.json(result.rows[0]);
      }
    })
    .catch(() => res.status(500).json({ error: 'Erro ao buscar o concurso.' }));
}
