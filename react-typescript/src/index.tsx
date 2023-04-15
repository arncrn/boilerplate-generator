import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import GlobalStyles from './GlobalStyles';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
