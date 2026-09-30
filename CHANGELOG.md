# Changelog

Todo cambio relevante en este proyecto se registra aquí, en español, con la
entrada más reciente primero. El formato y la obligatoriedad los fija
`.kiro/steering/changelog.md`.

## 2026:09:29 18:30

**Resumen:** Se creó el andamiaje del proyecto: Vite 8 + React 19 + Tailwind 4 + TypeScript estricto, con la paleta Nocturne vendorizada desde la librería compartida. Sin UI todavía, por decisión: primero se acuerda el andamiaje, después se portan las secciones de los mocks.

**Cambios:**

- Se inicializó el proyecto con pnpm 12.3.4 y Node >= 22, con versiones alineadas a las de `pf-web-frontend-client` (Vite 8.2.2, React 19.2.8, Tailwind 4.3.3, TypeScript 6.0.3, ESLint 10.10.0).
- Se vendorizó `src/styles/tokens.css` como espejo de `@ai27-tech/ui` 0.2.0-beta.6, para no depender del registry privado de GitHub Packages. Se documentó en la cabecera del archivo cómo se mantiene en sincronía y qué diferencias con el origen son intencionales.
- Se eliminaron del espejo los bloques de tema claro (`prefers-color-scheme: light` y `[data-theme="light"]`): la landing es dark-only por diseño de marca y no hay un diseño claro aprobado que respalde ese código.
- Se escribió `src/styles/globals.css` con el mapeo de los tokens `--ui-*` a utilidades de Tailwind en una sola capa, sin la capa intermedia de roles Material 3 que usa `pf-web-frontend-client` (aquí no hay componentes que la necesiten).
- Se añadió la guarda global de `@media (prefers-reduced-motion: reduce)` que apaga todas las animaciones de los mocks, como invariante del scaffold.
- Se añadió `App.tsx` como marcador de posición para verificar la cadena de tokens; se borrará con la primera sección real.
- Se configuran cuatro verificaciones: `typecheck`, `lint`, `format:check` y `build`.
- Se documentó el alcance del repo (agnóstico a la plataforma, una sola página, sin router, sin backend) en `README.md` y `AGENTS.md`, incluyendo las cinco decisiones abiertas: destino del formulario de cotización, imágenes Open Graph, ubicación del copy, subpáginas legales y sincronía de tokens.
- Se decidieron las ramas de larga vida `lan-wf-m`, `lan-wf-d` y `lan-wf-q`; el resto sigue GitHub Flow.

**Archivos modificados:**

- `package.json`
- `pnpm-workspace.yaml`
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.app.json`
- `tsconfig.node.json`
- `eslint.config.js`
- `.prettierrc`
- `.prettierignore`
- `.gitignore`
- `index.html`
- `README.md`
- `AGENTS.md`
- `src/main.tsx`
- `src/App.tsx`
- `src/vite-env.d.ts`
- `src/styles/tokens.css`
- `src/styles/globals.css`
- `.kiro/steering/naming-conventions.md`
- `.github/pull_request_template.md`
