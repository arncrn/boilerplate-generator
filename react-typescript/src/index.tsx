import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import GlobalStyles from './GlobalStyles';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // Strict mode will enables a lot of safegaurds which will  cause many things to
  // run twice, such as useEffect.
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
