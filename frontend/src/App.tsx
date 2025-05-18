import React, { useEffect, useState } from 'react';
import { buscarMaisRecente, buscarConcursoPorNumero } from './services/api';

const App: React.FC = () => {
  const [concurso, setConcurso] = useState<any>(null);
  const [numero, setNumero] = useState('');
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function fetchData() {
      const dados = await buscarMaisRecente();
      setConcurso(dados);
    }
    fetchData();
  }, []);

  const buscarConcurso = async () => {
    setErro('');
    try {
      const dados = await buscarConcursoPorNumero(numero);
      if (dados.mensagem) {
        setErro(dados.mensagem);
        setConcurso(null);
      } else {
        setConcurso(dados);
      }
    } catch {
      setErro('Erro ao buscar concurso');
    }
  };

  return (
    <div>
      <h1>Consulta Mega-Sena</h1>
      <input
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Número do concurso"
      />
      <button onClick={buscarConcurso}>Buscar</button>

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      {concurso && (
        <div>
          <h2>Concurso {concurso.concurso}</h2>
          <p>Data: {new Date(concurso.data_do_sorteio).toLocaleDateString()}</p>
          <p>Números: {concurso.bola1}, {concurso.bola2}, {concurso.bola3}, {concurso.bola4}, {concurso.bola5}, {concurso.bola6}</p>
        </div>
      )}
    </div>
  );
};

export default App;
