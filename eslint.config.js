import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/*
 * Librerias que el scaffold excluye por decision de arquitectura, no por gusto.
 * La landing es estatica y de una sola pagina, asi que casi todas estan fuera por
 * una razon concreta y no por estetica.
 *
 * Si alguna vez hace falta una, se quita de aqui en el mismo commit que la
 * justifica — nunca por goteo.
 *
 * Excepcion vigente (2026-09-30): `motion` (motion.dev) SI se permite, para las
 * animaciones de scroll marcadas de la landing. Sigue respetando
 * prefers-reduced-motion (via useReducedMotion). El paquete legacy
 * `framer-motion` sigue prohibido para no mezclar dos APIs. Ver README y DEC.
 */
const forbiddenPackages = {
  paths: [
    {
      name: 'zustand',
      message:
        'Sin estado global: la landing es una sola pagina sin estado compartido. Si aparece, casi seguro es un Context.',
    },
    {
      name: 'jotai',
      message: 'Sin estado global: la landing es una sola pagina sin estado compartido.',
    },
    {
      name: 'redux',
      message: 'Sin estado global: la landing es una sola pagina sin estado compartido.',
    },
    {
      name: '@reduxjs/toolkit',
      message: 'Sin estado global: la landing es una sola pagina sin estado compartido.',
    },
    {
      name: 'swr',
      message: 'La landing no hace fetch de datos de servidor: el contenido es estatico.',
    },
    {
      // El paquete legacy `framer-motion` sigue prohibido: su sucesor es
      // `motion` (motion.dev), que SI se permite en este repo desde el
      // 2026-09-30 para las animaciones de scroll de la landing. Ver README
      // ("Animaciones de scroll con Motion") y CHANGELOG. Importar el paquete
      // viejo mezclaria dos APIs; usar siempre `motion/react`.
      name: 'framer-motion',
      message:
        'Usa `motion` (motion.dev), no el paquete legacy `framer-motion`. Importa desde `motion/react`.',
    },
    {
      name: 'next-auth',
      message:
        'La landing no tiene sesion ni login: esos viven en los portales. Si necesitas identidad, enlaza al portal.',
    },
    {
      name: 'aws-amplify',
      message: 'La landing es estatica y publica: no habla con ningun backend de la plataforma.',
    },
  ],
  patterns: [
    {
      group: ['@radix-ui/*', '@mui/*', '@chakra-ui/*'],
      message:
        'Sin librerias de componentes UI: Tailwind 4 sobre los tokens de src/styles/tokens.css, y componentes propios en src/components/.',
    },
    {
      group: ['@ai27-tech/*'],
      message:
        'La landing es agnostica a la plataforma: la paleta esta vendorizada en src/styles/tokens.css. No se depende de la libreria compartida.',
    },
  ],
};

export default tseslint.config(
  {
    ignores: ['dist', 'coverage', 'node_modules'],
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  // `configs.flat[...]` es la variante de flat config; `configs[...]` sigue siendo legacy.
  reactHooks.configs.flat['recommended-latest'],
  reactRefresh.configs.vite,

  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
    },
  },

  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': ['error', forbiddenPackages],
    },
  },

  /*
   * `*.config.*` corre en Node, no en el navegador: globals de node.
   */
  {
    files: ['*.config.{ts,js}'],
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
);
