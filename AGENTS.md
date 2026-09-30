# AGENTS.md

Contexto para agentes que trabajan en este repo. La documentación para humanos
vive en `README.md`; este archivo es el resumen operativo y el porqué de cada
decisión.

## Qué es este repo

La landing pública de AI27. Sitio estático, una sola página, contenido en el
repo. **Agnóstico a la plataforma**: no es microservicio, no es subsistema, no
habla con ningún backend de AI27, no consume contratos.

Por eso no lleva el prefijo `pf-` de los demás repos, y por eso `package.json`
no declara dependencia de `@ai27-tech/ui`. Cuando algo de este repo parezca
contradecir a un portal, no es una inconsistencia: es el límite deliberado
entre un sitio público y una aplicación con sesión.

## Leer antes de tocar nada

1. `README.md` — decisiones y estado actual.
2. `.kiro/steering/naming-conventions.md` — idioma y nombres. Es **copia**; si
   diverge del original en `pf-web-frontend-client`, el original manda.
3. `src/styles/tokens.css` — el archivo con la regla más fácil de romper.

## Comandos

```bash
pnpm install
pnpm dev            # http://localhost:5173
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

Si `pnpm` no está en el PATH, `corepack pnpm ...`. Node >= 22.

No hay tests, ni `vitest`, ni CI, ni `husky`. No los busques: no están, y
`package.json` no los declara. Se agregan con la primera sección que tenga
comportamiento propio.

## Reglas que no se negocian en este repo

### 1. `src/styles/tokens.css` es un espejo, no un archivo propio

Es copia de `@ai27-tech/ui` 0.2.0-beta.6. Está en `.prettierignore` a
propósito: si Prettier lo reformatea, el `diff` contra el origen deja de
mostrar solo las diferencias intencionales.

**No editar valores a mano.** Si un color no sirve, se ajusta en
`pf-library-frontend-components` primero y esta copia se vuelve a bajar,
idealmente en el mismo commit. Los cambios que sí son de este repo van en la
cabecera del archivo, bajo "DIFERENCIAS INTENCIONALES CON EL ORIGEN".

### 2. El color se nombra por rol, nunca por valor

En JSX y en clases: `bg-surface`, `text-on-surface`, `border-outline`,
`bg-primary`, `text-on-surface-variant`. Nunca `bg-[#1c222e]`. Los valores
viven en los tokens; el copy del mock es la referencia de diseño, no el CSS.

El lienzo de la página es `bg-background` (o `bg-surface-dim`), que apunta a
`surface-muted` (#0e1117). `bg-surface` (#1c222e) es el panel. No son
intercambiables.

### 3. La animación siempre pasa por la guarda de `reduced-motion`

`src/styles/globals.css` ya apaga todo el movimiento bajo
`@media (prefers-reduced-motion: reduce)`. **No contornar ese bloque** con
`@media` propios, `!important` por componente, ni `animation: none` suelto. Si
un componente necesita menos movimiento del que la guarda da, se resuelve con
la variante `motion-reduce:` de Tailwind en ese componente.

La razón está escrita en el bloque. Léela antes de discrepar.

### 4. La página es de una sola ruta

Sin router. Si el trabajo requiere una segunda ruta, eso no es un refactor: es
un cambio de arquitectura, se tiene que decidir explícitamente y queda
registrado en el README.

### 5. `docs/mock/` no se edita

Los mocks son la entrada de la herramienta de diseño. Se vuelven a exportar.
Están en `.prettierignore` por lo mismo. Si un mock está mal, el fix es en la
herramienta, no en el HTML.

## Al portar un mock

El punto de partida es fidelidad, no interpretación: mismo layout, mismos
colores, mismas cifras, mismos SVG. Las animaciones se reproducen en CSS puro.

Donde el mock y el token se separan, **gana el token** y se anota la
discrepancia. Donde el mock es obviamente un placeholder (el `alert()` del
formulario, el reloj con hora fija), se deja el comportamiento explícito y se
registra como decisión abierta en el README, no se inventa una solución.

Nada de librerías de animación: `framer-motion` está en la lista de
prohibidas de `eslint.config.js`, y el motivo es que las animaciones de la
landing son CSS y la guarda de reduced-motion ya las cubre.

## Changelog

Todo cambio se registra en `CHANGELOG.md`, en español, con la entrada más
reciente primero. Lo exige `.kiro/steering/changelog.md`.
