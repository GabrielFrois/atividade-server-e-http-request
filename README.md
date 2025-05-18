# Atividade 5 - Server e HTTP Request

## Descrição da atividade:
Desenvolver uma aplicação servidora que retorne os dados de todos os concursos da Mega-Sena, armazenados
previamente em um banco de dados PostgreSQL. O acesso aos dados deverá ser integrado na aplicação front-end
desenvolvida na atividade 4.

## Objetivos:
- Desenvolver um servidor utilizando Node.js com o framework Express;
- Criar rotas HTTP para consulta de dados;
- Realizar acesso ao banco de dados PostgreSQL;
- Realizar requisições HTTP;
- Estilizar componentes com Styled Components;
- Implementar React Context para o gerenciamento de dados;
- Utilizar o hook useEffect para lidar com efeitos colaterais.

## Requisitos funcionais:
1. A aplicação servidora deverá disponibilizar as seguintes rotas:
   - Rota para retornar o concurso mais recente da Mega-Sena: `3001`;
   - Rota para retornar os dados de um concurso específico, identificado pelo número: `3001/[número-sorteio]`
   - A rota deverá retornar uma mensagem se o concurso não existir.
2. A aplicação front-end deverá ser inicializada exibindo o concurso mais atual. O concurso deverá ser obtido no servidor.
3. A aplicação front-end deverá ter um campo para o usuário fornecer o número do concurso desejado. No exemplo a seguir o usuário forneceu o número de concurso 2848.
4. A aplicação front-end deverá exibir uma mensagem quando não existir o concurso fornecido pelo usuário. No exemplo a seguir o usuário forneceu o número de concurso 3000.

## Requisitos não-funcionais:
1. A aplicação servidora deverá ser executada na porta `3001`;
2. Os parâmetros de conexão com o BD devem ser definidos estar no arquivo `.env`.
