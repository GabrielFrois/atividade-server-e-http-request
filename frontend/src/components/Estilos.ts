import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const Botao = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  margin-top: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Titulo = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Bolas = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`;

export const Bola = styled.div`
  background-color: #2ecc71;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const BotaoTema = styled.button`
  position: fixed;
  bottom: 16px;
  left: 16px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  border: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;

  &:hover {
    background-color: #222;
  }
`;

