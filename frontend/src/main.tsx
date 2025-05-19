import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CustomThemeProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CustomThemeProvider>
      <GlobalStyle />
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);
