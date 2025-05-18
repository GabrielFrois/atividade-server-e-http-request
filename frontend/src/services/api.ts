export const BASE_URL = 'http://localhost:3001';

export const buscarMaisRecente = async () => {
  const res = await fetch(`${BASE_URL}/concurso/mais_recente`);
  return await res.json();
};

export const buscarConcursoPorNumero = async (numero: string) => {
  const res = await fetch(`${BASE_URL}/concurso/${numero}`);
  return await res.json();
};
