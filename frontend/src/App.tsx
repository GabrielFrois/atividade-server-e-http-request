import React, { useEffect, useState } from 'react';
import { 
  Container,
  Input,
  Botao,
  Card,
  Titulo,
  Bolas,
  Bola,
  BotaoTema,
} from './components/Estilos';
import { useTheme } from './hooks/useTheme';
import { FaMoon, FaSun } from 'react-icons/fa';

const App: React.FC = () => {
  const [concurso, setConcurso] = useState<any>(null);
  const [numero, setNumero] = useState('');
  const [erro, setErro] = useState('');
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    async function fetchMaisRecente() {
      try {
        const res = await fetch('http://localhost:3001/', { redirect: 'follow' });
        const data = await res.json();
        setConcurso(data);
      } catch (error) {
        setErro('Erro ao buscar concurso mais recente.');
      }
    }
    fetchMaisRecente();
  }, []);

  const buscarConcurso = async () => {
    setErro('');
    try {
      const res = await fetch(`http://localhost:3001/${numero}`);
      const data = await res.json();

      if (data.mensagem) {
        setErro(`Não existem dados do concurso ${numero}`);
        setConcurso(null);
      } else {
        setConcurso(data);
      }
    } catch {
      setErro('Erro ao buscar concurso.');
    }
  };

  return (
    <Container>
      <div>
        <Input
          type="number"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          placeholder="Número do concurso"
        />
        <Botao onClick={buscarConcurso}>Buscar</Botao>
      </div>

      {erro && (
        <Card>
          <p style={{ fontWeight: 'bold' }}>{erro}</p>
        </Card>
      )}

      {concurso && (
        <Card>
          <Titulo>MEGA-SENA - Concurso {concurso.concurso}</Titulo>
          <Bolas>
            <Bola>{concurso.bola1}</Bola>
            <Bola>{concurso.bola2}</Bola>
            <Bola>{concurso.bola3}</Bola>
            <Bola>{concurso.bola4}</Bola>
            <Bola>{concurso.bola5}</Bola>
            <Bola>{concurso.bola6}</Bola>
          </Bolas>
          <p>
            {new Date(concurso.data_do_sorteio).toLocaleDateString('pt-BR', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </Card>
      )}

      <BotaoTema onClick={toggleTheme}>
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </BotaoTema>
    </Container>
  );
};

export default App;
