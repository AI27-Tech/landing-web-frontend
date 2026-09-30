# Changelog

Todo cambio relevante en este proyecto se registra aquí, en español, con la
entrada más reciente primero. El formato y la obligatoriedad los fija
`.kiro/steering/changelog.md`.

## 2026:09:30 12:00

**Resumen:** Se portó la primera sección real de la landing —el Hero (variante táctica: radar y red de telemetría)— desde el mock Nocturne a React 19 + Tailwind 4. Se retiró el marcador de posición de `App.tsx` y se estrenaron las carpetas de convención `src/components/` (compartido entre secciones) y `src/features/hero/` (propio de la sección).

**Cambios:**

- Se añadieron a `src/styles/globals.css` los patrones y animaciones del Hero portados del mock: las rejillas `.bg-radar-grid` y `.bg-engineering-grid`, y los keyframes `radar-sweep`, `ping-slow`, `dash-flow`, `pulse-node` y `spin` con sus clases `animate-*`. Quedan cubiertos por la guarda de `prefers-reduced-motion` que ya existía; no se contorneó ese bloque.
- Se crearon los componentes compartidos `SiteHeader` y `SiteFooter` en `src/components/`, portados del header y footer que los seis mocks duplican.
- Se creó `src/features/hero/` con la sección completa: `HeroBackdrop` (rejilla de ingeniería, radar concéntrico con barrido cónico, coordenadas geodésicas y el SVG de la constelación de nodos logísticos de México), `HeroPitch` (pill de estado, titular, subtítulo, botones y métricas de confianza), `ControlCenterPanel` (cabecera con reloj UTC en vivo, visualizador de ruta, rejilla de KPIs y registro de incidentes), el hook `useSystemClock` y el ensamblador `Hero`.
- Se reemplazó el marcador de posición de `App.tsx` por la composición real: `SiteHeader`, un `<main>` con el `Hero`, y `SiteFooter`.
- Se mapearon los iconos de Material Symbols del mock a sus equivalentes de `lucide-react` (el único paquete de iconos del proyecto): `security`→`ShieldCheck`, `alt_route`→`Route`, `local_shipping`→`Truck`, `satellite_alt`→`Satellite`, `sensors`→`RadioTower`, `verified_user`→`BadgeCheck`, `speed`→`Gauge`, `terminal`→`Terminal`.
- Se respetó la regla de color por rol en todo el JSX (`bg-surface`, `text-primary`, `border-outline`, ...). La única excepción son los atributos `stroke`/`fill` del SVG y los `linear-gradient`/`conic-gradient` de fondo, que no pueden leer una utilidad de Tailwind; ahí se replican los valores del mock, que coinciden con los tokens, tal como ya hacía la propia hoja de estilos.

**Decisiones abiertas que este cambio no resuelve (siguen en el README):**

- El botón "Cotizar servicio" apunta al ancla `#cotizar`; el destino real del formulario de cotización sigue sin decidir.
- El reloj del panel ahora es UTC en vivo (deja de ser la hora fija del mock); es dato operativo, no animación, así que no lo apaga la guarda de movimiento reducido.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. Los archivos de esta entrega pasan `prettier --check`; el `format:check` global sigue marcando archivos preexistentes ajenos a esta sección, que no se tocaron.

**Archivos modificados:**

- `src/App.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/SiteFooter.tsx`
- `src/features/hero/Hero.tsx`
- `src/features/hero/HeroBackdrop.tsx`
- `src/features/hero/HeroPitch.tsx`
- `src/features/hero/ControlCenterPanel.tsx`
- `src/features/hero/useSystemClock.ts`
- `src/styles/globals.css`
- `CHANGELOG.md`

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
