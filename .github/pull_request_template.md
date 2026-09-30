<!--
  Plantilla de Pull Request de la landing pública de AI27 (landing-web-frontend).
  Rellena las secciones que apliquen y borra las que no. El objetivo es que
  quien revisa entienda el porqué del cambio y pueda verificarlo sin adivinar.
-->

## Resumen

<!-- Qué hace este PR y por qué. Una o dos frases. -->

## Contexto

<!--
  Si el PR porta o ajusta una sección, enlaza el mock correspondiente en
  docs/mock/landing-nocturne/. Los mocks son la referencia de diseño: este PR
  se revisa contra ellos, no contra la imagination de quien lo escribió.
-->

- Mock de referencia:
- ¿Porta una sección nueva, o ajusta una existente?

## Tipo de cambio

- [ ] Sección nueva (portada desde el mock)
- [ ] Ajuste sobre una sección existente
- [ ] Colores, tipografía o spacing
- [ ] Animación
- [ ] Accesibilidad
- [ ] Tooling / build
- [ ] Documentación
- [ ] Otro:

## Cambios

<!-- Lista concreta de lo que cambió. -->

-

## Fidelidad con el mock

<!--
  Solo para PRs que tocan una sección. Marca lo que aplica y explica lo que no.
-->

- [ ] El layout, los colores y las cifras coinciden con el mock.
- [ ] Las animaciones están en CSS puro, sin librerías.
- [ ] Las cifras y métricas usan cifras tabulares (`tabular-nums`).
- [ ] Las animaciones se ven bien con `prefers-reduced-motion: reduce` activo.
- [ ] Funciona con el teclado: `:focus-visible` visible, anclas navegables.
- [ ] Se ve bien en móvil (`sm:` y `lg:` revisados, sin desbordes).

## Tokens y color

<!--
  Marca solo lo que este PR toca. Ver AGENTS.md, regla 2.
-->

- [ ] No agregué literales de color (`bg-[#...]`, `text-[#...]`, `style={{ color: ... }}`).
- [ ] Usé roles (`bg-surface`, `text-on-surface`, `border-outline`, `bg-primary`), no valores.
- [ ] Distinguí el lienzo (`bg-background` / `bg-surface-dim`) del panel (`bg-surface`).
- [ ] **No toqué `src/styles/tokens.css`**, o si lo toqué, el cambio viene de la librería y está justificado en la cabecera del archivo.

## Decisiones abiertas

<!--
  El README lista las decisiones abiertas. ¿Este PR resuelve alguna, o
  introduce un supuesto nuevo? Si es así, dilo aquí y actualiza el README
  en lugar de resolverlo en silencio.
-->

-

## Cómo se probó

<!-- Comandos ejecutados y su resultado. No basta con que compile. -->

- [ ] `pnpm typecheck`
- [ ] `pnpm lint`
- [ ] `pnpm format:check`
- [ ] `pnpm build`
- [ ] Verificado a mano en `pnpm dev` (incluido con reduced-motion activo)

Notas de la verificación:

## Capturas / evidencia

<!-- Para cambios de UI: antes / después, o el render del mock. -->

## CHANGELOG

<!-- El repo exige registrar cada cambio relevante. Ver .kiro/steering/changelog.md -->

- [ ] Agregué la entrada correspondiente en `CHANGELOG.md` (resumen + archivos modificados, entrada más reciente al inicio).

## Checklist

- [ ] El cambio no introduce router, data-fetching ni estado global.
- [ ] No introduje librerías prohibidas (zustand, redux, jotai, swr, framer-motion, next-auth, aws-amplify, Radix, MUI, Chakra, `@ai27-tech/*`). Ver `eslint.config.js`.
- [ ] No edité `docs/mock/`.
- [ ] Comentarios y docstrings en español; sustantivos de dominio en su forma canónica (`viaje`, `bitacora`, `conversacion`, `catalogos`, `incidencia`).
- [ ] El copy visible de la página está en español (México).
- [ ] Este PR sale de `lan-wf-m` y va hacia `lan-wf-m`, `lan-wf-d` o `lan-wf-q`.
