import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);
