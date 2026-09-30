import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// El orden de estos tres imports es el que sostiene los tokens: la fuente, luego
// las variables --ui-*, y al final el archivo que las mapea a utilidades de
// Tailwind. Invertir el orden deja las utilidades apuntando a variables que aun
// no existen.
import '@fontsource-variable/inter';
import '@/styles/tokens.css';
import '@/styles/globals.css';

import { App } from '@/App';

const contenedor = document.getElementById('root');

if (!contenedor) {
  throw new Error('No se encontro #root en index.html.');
}

createRoot(contenedor).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
