import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: sans-serif;
    transition: background-color 0.3s ease;
  }

  button {
    cursor: pointer;
  }
`;
