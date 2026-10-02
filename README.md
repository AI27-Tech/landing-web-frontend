# landing-web-frontend

La landing publica de AI27: la primera pantalla que ve cualquier cliente antes de tener cuenta, sesión o clave. Es un sitio estático, de una sola página, y es **agnóstico a la plataforma**: no es un microservicio ni un subsistema, no habla con ningún backend de AI27 y no conoce los contratos.

## Qué es y qué no es

**Es** la página de presentación: hero, propuesta de valor, trayectoria, infraestructura, centro de monitoreo, datos e IA, y contacto. Todo el contenido es estático y vive en el repo.

**No es** un portal. No hay login, no hay sesión, no hay `bff`, no hay `realtime`, no hay estado global. Si algo de eso hace falta, ese algo pertenece a `pf-web-frontend-client` o `pf-web-frontend-analist-panel`, y desde aquí se enlaza, no se reimplementa.

Ese límite es lo que sostiene todas las decisiones de más abajo.

## Cómo empezar

```bash
pnpm install
pnpm dev      # http://localhost:5173
```

Requiere Node >= 22 y pnpm 12.3.4 (fijado en `packageManager`; si `pnpm` no está en el PATH, `corepack pnpm ...` funciona igual).

En esta etapa `src/App.tsx` es un **marcador de posición**, no la landing. Existe para que puedas confirmar que la cadena de tokens funciona: si ves fondo pizarra, texto claro y primary periwinkle, `tokens.css → globals.css → Tailwind` está conectada. Se borra en el commit que traiga la primera sección real.

## Stack

Vite 8 + React 19 + Tailwind 4 + TypeScript estricto. Sin router, sin data-fetching, sin librería de componentes, sin librería de estado.

| Decisión                         | Por qué                                                                                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sin TanStack Router              | Una sola ruta con anclas. El router se paga en `routeTree.gen.ts` y code-splitting para una página. Si entran subpáginas legales, se agrega y se documenta aquí. |
| Sin react-query / MSW            | El contenido es estático. No hay nada que pedirle a un servidor.                                                                                                 |
| Sin librería de componentes      | Tailwind 4 sobre tokens propios. La landing no usa un solo componente de `@ai27-tech/ui`.                                                                        |
| `lucide-react`                   | El único paquete de iconos en los repos de AI27. Los mocks usan Material Symbols, que es solo un artefacto del generador, no una decisión de código.             |
| `motion` (motion.dev)            | Animaciones de scroll de la landing. Se admitió el 2026-09-30 para dar vida al scroll; sigue respetando `reduced-motion`. Ver abajo. El legacy `framer-motion` sigue prohibido. |
| Una capa de indirección de color | Ver abajo.                                                                                                                                                       |

## El sistema de color

**`src/styles/tokens.css` es un espejo de `@ai27-tech/ui` 0.2.0-beta.6**, copiado a mano de `pf-library-frontend-components/src/styles/tokens.css`.

No se depende de la librería a propósito. La landing es agnóstica: consumir `@ai27-tech/ui` exigiría un token de GitHub Packages (registry `restricted`) solo para leer una paleta, ataría un sitio público a la plataforma que se supone que no conoce, y no aportaría ningún componente. La paleta sí es de la marca, y los nueve colores que usan los mocks coinciden literalmente con los tokens de la librería.

`src/styles/globals.css` mapea esos tokens `--ui-*` **directamente** a las utilidades de Tailwind, sin la capa de roles Material 3 que interpone `pf-web-frontend-client`. Aquí no hay componentes de librería escritos contra esos roles, así que la capa intermedia no tendría a quién servirle.

Los nombres de rol sí se conservan (`bg-surface`, `text-on-surface`, `border-outline`, `bg-primary`) para que el mismo nombre signifique lo mismo en los dos repos.

### El lienzo no es el panel

El fondo de la página es `--ui-color-surface-muted` (#0e1117) y se alcanza con `bg-background` o `bg-surface-dim`. `--ui-color-surface` (#1c222e) es el panel, y se alcanza con `bg-surface`. Confundirlos es el error más fácil de cometer y el más visible en pantalla.

### La landing es dark-only

`tokens.css` trae únicamente el tema oscuro. Se eliminaron del origen el bloque `prefers-color-scheme: light` y el selector `[data-theme="light"]`: los seis mocks son oscuros y no hay un diseño claro aprobado. Mantener un tema sin diseño que lo respalde es la forma más común de que un tema se desincronice solo.

### Cómo se mantiene en sincronía

1. Si la librería cambia un token, el cambio llega aquí **en el mismo commit** que llega a `lan-wf-m`.
2. No se editan valores a mano por conveniencia. Si un valor no sirve, se ajusta en la librería primero y esta copia se vuelve a bajar.
3. Un `diff` contra el origen solo debe mostrar las diferencias intencionales, que están listadas en la cabecera de `tokens.css`.

Por eso `tokens.css` está en `.prettierignore`: si Prettier lo reformateara, el diff mostraría ruido y el archivo perdería su única propiedad útil.

## Movimiento reducido

Los mocks traen animaciones infinitas —barrido de radar, flujo de paquetes, pulso de nodos— y son parte del diseño. `globals.css` las apaga a todas de golpe bajo `@media (prefers-reduced-motion: reduce)`, con la variante de la comunidad (duración ~0, iteración 1) en vez de `animation: none`, para no romper nada que dependa de `animationend` y para que la transición se complete en vez de cortarse.

Es un invariante del scaffold, deliberadamente global: se decide una vez, aquí, y no se re-discute en cada componente que agregue un keyframe. Cuando un componente necesite algo más fino, se resuelve con `motion-reduce:` en su lugar, no desactivando este bloque.

## Animaciones de scroll con Motion

El scaffold nació sin librería de animación (las de los mocks son CSS puro). El **2026-09-30** eso cambió a propósito: se admitió **`motion`** (motion.dev, el sucesor de framer-motion) para dar un movimiento de scroll más marcado y moderno, algo que el CSS nativo no orquesta con la misma finura (springs, stagger declarativo, parallax con scrub, contadores). Fue una decisión explícita, no un goteo: se quitó la prohibición del `eslint.config.js` en el mismo commit que la justifica, y aquí queda documentada.

Reglas de esta decisión:

1. **Se importa desde `motion/react`.** El paquete legacy `framer-motion` sigue prohibido en el eslint para no mezclar dos APIs.
2. **`reduced-motion` sigue mandando.** Las primitivas de `src/components/motion/` usan `useReducedMotion` de Motion: quien pida menos movimiento en su sistema no ve reveals, parallax ni contadores animados —ve el contenido en su estado final, estático—. Esto convive con la guarda global de CSS; no la reemplaza.
3. **Las animaciones decorativas de los mocks (radar, pulsos) siguen en CSS.** Motion es solo para el comportamiento ligado al scroll y a la entrada de elementos. No se reescriben los keyframes existentes.
4. **Las primitivas son el único punto de contacto.** Las secciones usan `<Reveal>`, `<Stagger>` y `<Counter>`; no llaman a `motion.*` directamente salvo dentro de esas primitivas, para que la política de movimiento viva en un solo lugar.

## Estructura

```
src/
  main.tsx              bootstrap; el orden de los imports sostiene los tokens
  App.tsx               marcador de posición (se borra con la primera sección)
  styles/
    tokens.css          ESPEJO de @ai27-tech/ui — no editar valores a mano
    globals.css         @theme de Tailwind + base + guarda de reduced-motion
docs/
  mock/landing-nocturne/  los seis mocks, tal cual los exportó la herramienta
```

Cuando lleguen los componentes, la convención es `src/components/` para lo reutilizable entre secciones y `src/features/<seccion>/` para lo que pertenece a una sola sección. Es la de los otros frontends, y funciona igual con una sola página.

## Los mocks

`docs/mock/landing-nocturne/` tiene seis secciones, cada una como un HTML autónomo con su propio header y footer duplicados:

1. Hero (variante táctica: radar, red de telemetría)
2. Trayectoria y cobertura nacional
3. Infraestructura y red operativa nacional
4. Centro de monitoreo y grupo de reacción
5. Datos e inteligencia artificial
6. Contacto, cotización y footer institucional

Son **artefactos de diseño, no código**: HTML estático con Tailwind por CDN, que no se ejecuta. No se editan a mano ni se reformatean. La fidelidad de la conversión es el punto de partida de cada sección, no una coincidencia que haya que perseguir después.

`nocturne_operations/DESIGN.md` es la guía de color, tipografía y forma que describe el sistema Nocturne. Los tokens de `tokens.css` implementan esa misma guía.

## Verificación local y CI

Localmente:

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

Las cuatro tienen que pasar. No basta con que compile. No hay tests todavía: el scaffold no tiene UI que probar, y `vitest` se agrega con la primera sección que tenga comportamiento propio (el reloj del Hero, el resaltado de la sección activa, el envío del formulario).

En CI:

- Cada push a `lan-wf-m` o `lan-wf-q` ejecuta `typecheck`, `lint` y `build` antes de desplegar. Ver "Despliegue automático" en la sección de Ramas.
- Otros pushes (ramas de trabajo, `lan-wf-d`, PRs) no disparan nada automático todavía.

## Ramas

Tres ramas de larga vida, con prefijo `lan-wf-`:

| Rama       | Rol           | Despliegue automático                   |
| ---------- | ------------- | --------------------------------------- |
| `lan-wf-m` | principal     | `ai27-landing-page` (producción, live)  |
| `lan-wf-d` | desarrollo    | No automatizado                         |
| `lan-wf-q` | aseguramiento | `ai27-landing-page-qa` (QA)             |

Todas las demás siguen GitHub Flow: `feat/hero`, `fix/anchors-nav`, `chore/tokens-sync`.

### Despliegue automático

Cada push a `lan-wf-m` o `lan-wf-q` dispara un workflow que:

1. Instala dependencias.
2. Verifica tipos, lint y build.
3. Si todo pasa, despliega a Firebase Hosting al sitio correspondiente.

El workflow está en `.github/workflows/deploy-firebase.yml`. Ambas ramas comparten verificaciones iguales; solo cambia el **destino de despliegue** (parámetro `target` en la acción de Firebase).

**Requisito:** el secreto de repositorio `FIREBASE_SERVICE_ACCOUNT` debe contener el JSON de una cuenta de servicio de Firebase con permiso de Hosting, configurado en `GitHub > Settings > Secrets and variables > Actions > New repository secret`.

Si el build falla, no hay despliegue; el developer debe arreglar la rama y hacer push de nuevo.

## Decisiones abiertas

- **A dónde va el formulario de cotización.** Sigue sin resolverse. El formulario ya está portado en `src/features/contacto/QuoteForm.tsx`, y su handler `manejarEnvio` conserva el comportamiento del mock —`event.preventDefault()` y un `alert()`— como placeholder explícito. No hay backend. Hay que decidir entre un endpoint propio, un servicio de formularios, o `mailto:`. Cuando se decida, ese handler es el único punto que cambia.
- **`og:image` / `twitter:image`.** Está en el `TODO` de `index.html`. Necesita el recorte real de la marca, no una captura del mock.
- **Contenido editable.** Hoy el copy vive en los mocks y al portarlo ira a los componentes. Si el copy va a cambiar seguido, la alternativa es un módulo `src/content/` con los textos separados del marcado. No se ha decidido.
- **Si entran subpáginas** (Privacidad, Términos, Seguridad, Compliance — los cuatro enlaces del footer), hay que instalar TanStack Router. La decisión actual de no usar router es válida solo mientras sea una sola página.
- **Sincronía de tokens.** Hoy es una regla escrita. Si se vuelve una fuente de fricción real, la opción es un script de CI que compare contra la librería y falle si divergen.
