# Changelog

Todo cambio relevante en este proyecto se registra aquí, en español, con la
entrada más reciente primero. El formato y la obligatoriedad los fija
`.kiro/steering/changelog.md`.

## 2026:09:30 15:00

**Resumen:** Se portó la tercera sección de la landing —Infraestructura y red operativa nacional— desde el mock Nocturne. Se agregó como hermana del Hero y Trayectoria dentro del `<main>`, con `id="infraestructura"` para que enganche con el ancla de la barra superior.

**Cambios:**

- Se añadieron a `src/styles/globals.css` los patrones y animaciones propios de la sección: `.bg-grid-pattern` (rejilla gris de precisión, 0.22), el keyframe `radar-rotate` con su clase `animate-radar-rotate` (barrido que gira detrás del mapa) y el keyframe `node-pulse` con `animate-node-pulse` (halo de los nodos del mapa). El barrido se nombró distinto del `radar-sweep` del Hero para no colisionar. Todo queda bajo la guarda de `prefers-reduced-motion`.
- Se creó `src/features/infraestructura/` con la sección completa: `InfraHeader` (badge, titular y párrafo), `TacticalMap` (panel con cabecera HUD, mapa SVG de México con corredores troncales, nodos etiquetados, checkpoints, HUDs flotantes y leyenda), `CapabilityCards` (cuatro capacidades fundamentales), `InfraMetrics` (fila de cuatro métricas y pie de metadatos) y el ensamblador `Infraestructura`.
- Se añadió `<Infraestructura />` a `App.tsx`, después de `Trayectoria`.
- Se mapearon los Material Symbols del mock a iconos de `lucide-react`: `alt_route`→`Route`, `verified_user`→`BadgeCheck`, `cell_tower`→`Antenna`, `shield`→`Shield`, `hub`→`Waypoints`.
- Discrepancias mock/token registradas: el chip "Enlace activo" y el punto del pie usan `success` (`#6ee7b7`) en lugar del `#10B981` del mock, que no es un token; el landmass continental del mapa conserva el `#181f2a` del mock (tono de un SVG, sin rol equivalente y no expresable como utilidad).

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. Los archivos de esta entrega pasan `prettier --check`.

**Archivos modificados:**

- `src/App.tsx`
- `src/features/infraestructura/Infraestructura.tsx`
- `src/features/infraestructura/InfraHeader.tsx`
- `src/features/infraestructura/TacticalMap.tsx`
- `src/features/infraestructura/CapabilityCards.tsx`
- `src/features/infraestructura/InfraMetrics.tsx`
- `src/styles/globals.css`
- `CHANGELOG.md`

## 2026:09:30 13:30

**Resumen:** Se portó la segunda sección de la landing —Trayectoria y cobertura nacional ("Quiénes somos")— desde el mock Nocturne. Se agregó como hermana del Hero dentro del `<main>`, con `id="nosotros"` para que enganche con el ancla de la barra superior.

**Cambios:**

- Se añadieron a `src/styles/globals.css` los patrones y animaciones propios de la sección: `.bg-engineering-grid-faint` (rejilla más tenue que la del Hero, 0.035), el keyframe `tactical-pulse` con su clase `animate-tactical-pulse` (halo del nodo de la fase activa), el keyframe `data-flow` con la clase `timeline-stream` (barrido continuo de la barra del timeline) y `.card-tactical` (realce al hover: elevación, borde periwinkle y sombra). Todas quedan bajo la guarda de `prefers-reduced-motion` que ya existía.
- Se creó `src/features/trayectoria/` con la sección completa: `TrayectoriaHeader` (tag "Quiénes somos", titular con gradiente periwinkle→esmeralda, narrativa de evolución y chip de arquitectura de custodia), `EvolutionTimeline` (línea cronológica de cuatro fases con la Fase IV destacada y la barra animada solo en desktop), `TrustIndicators` (cuatro tarjetas de indicadores institucionales y el pie de metadatos) y el ensamblador `Trayectoria`.
- Se añadió `<Trayectoria />` a `App.tsx`, después del `Hero`.
- Se mapearon los SVG genéricos del mock a iconos de `lucide-react`: reloj→`Clock`, escudo/soberanía→`Globe`, rayo→`Zap`, pin→`MapPin`, check→`Check`, monitor→`MonitorSmartphone`, y el escudo del chip→`ShieldCheck`.
- Donde el mock definió una superficie propia (`#161B22`) que no existe literal en los tokens, se usó el rol equivalente `bg-surface-recessed` (`#161b24`), siguiendo la regla de que ante una discrepancia gana el token.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. Los archivos de esta entrega pasan `prettier --check`.

**Archivos modificados:**

- `src/App.tsx`
- `src/features/trayectoria/Trayectoria.tsx`
- `src/features/trayectoria/TrayectoriaHeader.tsx`
- `src/features/trayectoria/EvolutionTimeline.tsx`
- `src/features/trayectoria/TrustIndicators.tsx`
- `src/styles/globals.css`
- `CHANGELOG.md`

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
