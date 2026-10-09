# Changelog

Todo cambio relevante en este proyecto se registra aquí, en español, con la
entrada más reciente primero. El formato y la obligatoriedad los fija
`.kiro/steering/changelog.md`.

## 2026:10:09 00:30

**feat: sección Clientes con muro de logos animado.** Nueva sección
`src/features/clientes/` entre Trayectoria e Infraestructura (ancla
`#clientes`; el enlace "Casos de Éxito" del footer apunta ahí). Una sola fila de
logos que se desplaza en loop continuo hacia la derecha. La animación es CSS
puro (keyframe `marquee-right` en `globals.css`), con loop sin costura por
duplicado de la pista y traslación del 50%; queda cubierta por la guarda global
de `reduced-motion`. Al pasar el cursor sobre la fila, el desplazamiento se
pausa.

Cada cliente pinta su logo (archivo en `public/clientes/`, servido desde la raíz
por Vite) dentro de un `<img>` forzado a blanco con un filtro CSS
(`brightness-0 invert`); el archivo debe tener fondo transparente. Si a una
marca le falta el archivo, el chip cae de vuelta a su nombre como wordmark, de
modo que un logo faltante no rompe la fila. Los logos flotan sin recuadro (sin
fondo ni borde). Cada cliente admite un multiplicador `escala` para igualar el
peso óptico de los logos compactos (Mattel y Herdez usan 1.5). Se muestran ocho
clientes: Colgate, Mattel, Pfizer, GNP, Herdez, Zurich, Technicolor, Pirelli.
Verificado: `typecheck`, `lint`, `build` y `format:check` (sobre los archivos
nuevos) pasan.

- `src/App.tsx`, `src/styles/globals.css`, `src/components/SiteFooter.tsx`,
  `src/features/clientes/Clientes.tsx`,
  `src/features/clientes/ClientesHeader.tsx`,
  `src/features/clientes/ClientLogosMarquee.tsx`,
  `src/features/clientes/clientes-data.ts`, `public/clientes/README.md`

## 2026:10:08 18:10

**feat: favicon del sitio.** Se configuró el ícono de pestaña. El `favicon.ico`
se movió de la raíz del repo a `public/` (que es el `publicDir` de Vite y la
única ruta que se copia tal cual a `dist/` y se sirve desde la raíz del sitio;
desde la raíz del repo no se publicaba). Se añadió el enlace en `index.html`:
`<link rel="icon" type="image/x-icon" href="/favicon.ico" />`. Verificado: el
build copia `dist/favicon.ico` y el `<link>` queda en `dist/index.html`.

- `index.html`, `public/favicon.ico`

## 2026:10:08 18:02

**fix: botón "Atención comercial" vuelve al diseño azul.** En `ContactPitch` el
botón de "Atención comercial" recuperó el diseño primario (periwinkle) que
tenía el botón de contacto anterior: ícono en `text-primary` y chrome
`border-outline hover:border-primary bg-surface hover:bg-surface-bright
text-on-surface` (`px-5 py-3`, `font-semibold`), en vez del estilo verde/mudo.
Se conservan la funcionalidad (`tel:+525549090269`) y el número
(55) 4909 0269.

- `src/features/contacto/ContactPitch.tsx`

## 2026:10:08 17:55

**fix: título del KPI de la consola de monitoreo.** En `CommandConsole` la
etiqueta del KPI "Unidades Activas" pasó a "Unidades en tránsito"; solo cambia
el texto, no la cifra ni el estilo.

- `src/features/monitoreo/CommandConsole.tsx`

## 2026:10:08 17:48

**feat: ruta Sur-Sureste en el mapa táctico.** En `TacticalMap` se agregó un
sexto corredor troncal (CDMX → Oaxaca → Chiapas) con sus dos nodos nuevos:
Oaxaca y Chiapas (Tuxtla Gutiérrez). Las coordenadas se calcularon con la misma
proyección Mercator que el resto del mapa (Oaxaca en 621.1, 508.4; Chiapas en
718.5, 517.4), por lo que quedan alineadas con el contorno del país. La ruta
usa el degradado periwinkle→esmeralda ya existente (`routeGrad1`); Chiapas es la
terminal esmeralda del corredor.

- `src/features/infraestructura/TacticalMap.tsx`

## 2026:10:08 17:35

**fix: orden cronológico de la línea de evolución.** En `EvolutionTimeline` se
corrigió el orden de las fases: la línea representa la historia de la empresa,
así que ahora va en orden cronológico real, de la Fase I (el origen:
"Seguimiento en tiempo real y grupo de reacción") a la Fase IV (la actual:
"Predicción e inteligencia de datos", destacada con IA activa). Cada tarjeta
conserva su contenido; solo se renumeraron las fases y se invirtió el orden
visual. El eyebrow de la sección pasó de "Línea cronológica de evolución" a
"Evolución de la empresa"; el subtítulo "De la reacción en campo a la
anticipación algorítmica" se mantuvo igual.

- `src/features/trayectoria/EvolutionTimeline.tsx`

## 2026:10:08 17:20

**fix: UI fixes.** En las tarjetas de indicadores de confianza (`TrustIndicators`)
se reacomodó el contenido: la etiqueta (titulo) pasó a ir justo debajo de la
cifra, como valor secundario, y la descripción y el pie bajaron al bloque
inferior de la tarjeta (antes el titulo quedaba separado al centro). Además, en
la línea cronológica (`EvolutionTimeline`) se ajustó el título de la Fase I a
"Seguimiento en tiempo real y grupo de reacción".

- `src/features/trayectoria/TrustIndicators.tsx`,
  `src/features/trayectoria/EvolutionTimeline.tsx`

## 2026:10:08 17:01

**fix: avoid routes in the event log.** En el log de eventos de la consola de
monitoreo (`CommandConsole`) se quitó la especificación de ruta/ubicación de los
títulos de los tres eventos (Autopista México–Puebla, Arco Norte, Corredor
Bajío y sus marcadores de km); quedan solo el motivo del incidente (robo con
violencia, cierre total de la circulación, desvío no programado) y sus mensajes
complementarios.

- `src/features/monitoreo/CommandConsole.tsx`

## 2026:10:08 16:51

**fix: removed unused labels.** Limpieza del footer (`SiteFooter`): se retiraron
elementos de lista sobrantes y quedó la columna de Compañía con "Cobertura
Nacional" enlazada a `#infraestructura`; se eliminó código muerto resultante.

- `src/components/SiteFooter.tsx`

## 2026:10:08 16:22

**fix: removed telemetría, C4/C5, and latencia texts.** Barrido de copy en toda la
landing: se quitaron o reescribieron todas las referencias visibles a "C4/C5",
"telemetría" y "latencia" (etiquetas, badges, descripciones, strips de estado y
el indicador LAT/LEO), más los comentarios internos equivalentes. No se tocó
`tokens.css` (espejo de la librería) ni los mocks.

- `src/components/SiteFooter.tsx`, `src/features/contacto/ContactPitch.tsx`,
  `src/features/contacto/Contacto.tsx`, `src/features/datos/AnalyticsDashboard.tsx`,
  `src/features/datos/DataCapabilities.tsx`, `src/features/datos/DataMetrics.tsx`,
  `src/features/datos/DatosHeader.tsx`, `src/features/hero/ControlCenterPanel.tsx`,
  `src/features/infraestructura/CapabilityCards.tsx`,
  `src/features/infraestructura/InfraHeader.tsx`,
  `src/features/infraestructura/InfraMetrics.tsx`,
  `src/features/infraestructura/TacticalMap.tsx`,
  `src/features/monitoreo/CommandConsole.tsx`,
  `src/features/monitoreo/MonitoreoCapabilities.tsx`,
  `src/features/monitoreo/MonitoreoHeader.tsx`,
  `src/features/monitoreo/ReactionProtocol.tsx`,
  `src/features/trayectoria/EvolutionTimeline.tsx`,
  `src/features/trayectoria/TrustIndicators.tsx`

## 2026:10:08 14:38

**fix: change in the send email logic.** El formulario de cotización
(`QuoteForm`) pasó a enviar por `mailto:` prellenado con los campos del
formulario, repartiendo el destino entre las dos cuentas de ventas con un
round-robin por navegador de arranque aleatorio (sin backend). Se documentó la
decisión en el README.

- `src/features/contacto/QuoteForm.tsx`, `README.md`

## 2026:10:08 14:08

**fix: added phone numbers.** Se agregaron los teléfonos de Ventas y Atención
comercial como enlaces `tel:` en el footer (`SiteFooter`) y en el panel de
contacto (`ContactPitch`).

- `src/components/SiteFooter.tsx`, `src/features/contacto/ContactPitch.tsx`

## 2026:10:08 13:26

**fix: Address added to footer.** Se reemplazó el placeholder de dirección por la
Matriz de Operaciones real (Eje 5 Nte 990, Santa Bárbara, Azcapotzalco, 02230
Ciudad de México, CDMX), enlazada a Google Maps.

- `src/components/SiteFooter.tsx`

## 2026:10:08 13:18

**fix: phase change.** En la línea cronológica (`EvolutionTimeline`) se
intercambiaron la Fase I y la Fase IV, y se igualó el tamaño de las cuatro
tarjetas sin importar el contenido.

- `src/features/trayectoria/EvolutionTimeline.tsx`

## 2026:10:08 12:55

**fix: more removals.** Se retiró del panel Centro de Control del Hero
(`ControlCenterPanel`) el visualizador de ruta "Corredor Estratégico" y los KPIs
"Alertas Neutralizadas" y "Latencia Satelital"; en `ContactPitch` se ajustó la
métrica/estado asociada.

- `src/features/hero/ControlCenterPanel.tsx`, `src/features/contacto/ContactPitch.tsx`

## 2026:10:08 12:45

**fix: remove Alertas activas and Viajes monitoreados.** Se quitaron esos dos KPIs
de la consola de comando (`CommandConsole`) y la rejilla quedó a una sola
columna.

- `src/features/monitoreo/CommandConsole.tsx`

## 2026:10:08 12:35

**fix: InfraMetrics adjustments.** En la fila de métricas de Infraestructura
(`InfraMetrics`) se cambiaron dos cifras: "+250 patrullas en campo" y
"3,250,000 km recorridos al mes".

- `src/features/infraestructura/InfraMetrics.tsx`

## 2026:10:08 12:21

**fix: fix animated map.** Rework del mapa táctico (`TacticalMap`): contorno
geográficamente fiel de México, nodos y corredores sobre coordenadas reales,
puntos de radar fijos (CDMX, MTY, Tijuana) con ping expansivo relleno, waypoints
adicionales (Torreón, Mazatlán, Hermosillo, Sonoyta) y retiro de las etiquetas
HUD flotantes. Se añadió el keyframe `radar-ping` en `globals.css`.

- `src/features/infraestructura/TacticalMap.tsx`, `src/styles/globals.css`

## 2026:10:07 17:47

**fix: remove protocolo operativo.** Se retiró la tarjeta "Protocolo Operativo /
Grupo de Reacción" (`ReactionProtocol`) de la sección Monitoreo; la consola de
comando pasó a ancho completo.

- `src/features/monitoreo/Monitoreo.tsx`

## 2026:10:07 17:41

**fix: Datos section temporary remove.** Se desvinculó temporalmente la sección
"Datos e IA" de la página: se quitó su render de `App.tsx` y su enlace de
navegación en `SiteHeader`. Los archivos de la sección quedan intactos.

- `src/App.tsx`, `src/components/SiteHeader.tsx`

## 2026:10:01 15:25

**Resumen:** Se corrigió el scroll-spy para que no deje ningún enlace resaltado cuando estés en el Hero o antes de la primera sección.

**Problema:** El enlace "Nosotros" (que apunta a la sección Trayectoria) permanecía resaltado incluso cuando estabas en el Hero, porque el scroll-spy devolvía `null` pero la barra de navegación no lo reflejaba correctamente.

**Fix:**

En `useScrollSpy.ts`, cambio la lógica para que devuelva **explícitamente `null`** cuando ninguna sección sea visible:

```typescript
// Antes:
const primera = ids.find((id) => visibles.has(id));
if (primera) {
  setActivo(primera);
}

// Después:
const primera = ids.find((id) => visibles.has(id));
setActivo(primera ?? null); // Devuelve null si no hay sección visible
```

**Resultado:**

- En el Hero: ningún enlace resaltado ✓
- Al bajar a Trayectoria: "Nosotros" se ilumina ✓
- Al cambiar de sección: el resaltado se actualiza correctamente ✓
- En móvil (menú hamburguesa) y desktop: ambos funcionan igual ✓

**Archivos modificados:**

- `src/components/useScrollSpy.ts`
- `CHANGELOG.md`

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan sin errores.

## 2026:10:01 15:20

**Resumen:** Se corrigió la animación de cierre del menú hamburguesa. Antes desaparecía abruptamente; ahora se cierra suavemente con `AnimatePresence`.

**Fix:**

- **Problema:** El componente se desmontaba inmediatamente al cambiar el estado `abierto`, sin esperar a que la animación de `exit` terminara.
- **Solución:** Se agregó `AnimatePresence` de `motion/react` alrededor del panel y los items del menú. Esto permite que Motion espere a que terminen las animaciones de salida antes de desmontar.
- **Resultado:**
  - Apertura: panel desliza hacia abajo, items entran con cascada ✓
  - Cierre: panel desliza hacia arriba, items salen con cascada, todo desaparece suavemente ✓

**Técnica:**

```tsx
<AnimatePresence>
  {abierto && (
    <motion.div
      exit={{ opacity: 0, y: -10 }}
      // ...
    >
      {/* Items también tienen exit */}
    </motion.div>
  )}
</AnimatePresence>
```

**Archivos modificados:**

- `src/components/MobileNav.tsx` (agregado `AnimatePresence`, agregados `exit` a items)
- `CHANGELOG.md`

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan sin errores.

## 2026:10:01 15:15

**Resumen:** Se agregaron animaciones suaves a la apertura del menú hamburguesa en móvil usando `motion/react`. El menú ahora tiene transiciones elegantes que respetan `prefers-reduced-motion`.

**Animaciones agregadas:**

1. **Ícono del botón hamburguesa:**
   - Rota 90° al abrir/cerrar (transición de 200ms)
   - El ícono cambia de ≡ (Menu) a ✕ (X) con animación de rotación

2. **Panel del menú:**
   - Entra deslizándose hacia abajo desde arriba con fade-in
   - Sale desapareciendo hacia arriba
   - Transición suave de 200ms

3. **Items del menú (enlaces):**
   - Se escalonan con entrada desde la izquierda (slide-in)
   - Cada item se anima con un delay de 50ms, creando un efecto de cascada
   - Transición suave de 200ms por item

4. **Respeto a `prefers-reduced-motion`:**
   - Si el usuario tiene activada la opción de menos movimiento, todas las animaciones se desactivan
   - El menú sigue funcionando, solo sin transiciones
   - Implementado con `useReducedMotion()` de `motion/react`

**Técnicas usadas:**

- `motion.button` — animación del botón hamburguesa
- `motion.div` — animación del panel desplegable
- `motion.a` — animación escalonada de items con `delay`
- `useReducedMotion()` — respeto a preferencias de accesibilidad

**Archivos modificados:**

- `src/components/MobileNav.tsx`
- `CHANGELOG.md`

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan sin errores.

## 2026:10:01 15:00

**Resumen:** Se mejoró significativamente la responsividad de la barra de navegación. En móvil, ahora muestra logo + badge + menú hamburguesa. En desktop, muestra navegación completa + botón de acción.

**Cambios:**

1. **Nuevo componente `MobileNav`:** Menú desplegable para móvil
   - Ícono hamburguesa (≡) a la derecha en pantallas < 768px
   - Panel desplegable con navegación al hacer click
   - Se cierra automáticamente al navegar o hacer scroll
   - Indicador visual del enlace activo en el menú

2. **Badge del header simplificado**
   - **Antes:** "+25 años de liderazgo" (texto largo, ocupa espacio en móvil)
   - **Después:** "+25Y" (texto corto, compacto)
   - Se muestra en todos los breakpoints

3. **SiteHeader mejorado:**
   - **Móvil (< 768px):** Logo + badge | Hamburguesa
   - **Desktop (≥ 768px):** Logo + badge | Navegación completa | Botón "Cotizar servicio"
   - Botón "Cotizar" ahora solo visible en desktop (oculto en móvil, ganancia de espacio)
   - Gap entre logo y badge ajustado para móvil (`gap-2 sm:gap-3`)

4. **Responsive breakpoint:**
   - Menú hamburguesa: `flex md:hidden` (visible en móvil, oculto en tablet+)
   - Navegación desktop: `hidden md:flex` (oculta en móvil, visible en tablet+)
   - CTA "Cotizar": `hidden md:inline-flex` (oculto en móvil, visible en tablet+)

**Archivos modificados:**

- `src/components/SiteHeader.tsx`
- `src/components/MobileNav.tsx` (nuevo)
- `CHANGELOG.md`

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan sin errores.

## 2026:10:01 14:30

**Resumen:** Se corrigieron tres brechas críticas de responsividad que dejaban ciertos breakpoints sin cobertura y hacían que la página se comportara mal en tablets de 768-1023px.

**Problemas resueltos:**

1. **Hero — Métricas de 3 columnas sin breakpoint responsive**
   - **Antes:** `grid grid-cols-3` (siempre 3 columnas) → se apretaban en móvil (iPhone SE 375px)
   - **Después:** `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3` → 1 col móvil, 2 tablet pequeño, 3 tablet+
   - **Archivo:** `src/features/hero/HeroPitch.tsx`

2. **Infraestructura — Ausencia de breakpoint `md:` en grid principal**
   - **Antes:** `grid grid-cols-1 ... lg:grid-cols-12` (salta de móvil a 1024px sin cobertura tablet)
   - **Después:** `grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-8` → layout de 2 cols en tablet
   - **Archivos:** `src/features/infraestructura/Infraestructura.tsx`, `src/features/infraestructura/CapabilityCards.tsx`

3. **Datos — Padding vertical sin escala en desktop**
   - **Antes:** `py-16` (fijo en todos los breakpoints)
   - **Después:** `py-16 lg:py-24` → consistente con otras secciones
   - **Archivo:** `src/features/datos/Datos.tsx`

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan sin errores.

**Archivos modificados:**

- `src/features/hero/HeroPitch.tsx`
- `src/features/infraestructura/Infraestructura.tsx`
- `src/features/infraestructura/CapabilityCards.tsx`
- `src/features/datos/Datos.tsx`
- `CHANGELOG.md`

## 2026:10:01 12:30

**Resumen:** Se agregó soporte de despliegue automático para la rama `lan-wf-q` hacia su sitio dedicado en Firebase Hosting. El workflow ahora detecta la rama y despliega al sitio correspondiente (producción o QA).

**Cambios:**

- `.github/workflows/deploy-firebase.yml`:
  - Se agregó `lan-wf-q` al trigger `on.push.branches`.
  - El grupo de `concurrency` ahora es dinámico (`${{ github.ref }}`) para evitar solapamientos por rama independiente.
  - Se añadió un step "Determinar configuración de despliegue" que mapea:
    - `lan-wf-m` → sitio `ai27-landing-page`, descripción "Producción"
    - `lan-wf-q` → sitio `ai27-landing-page-qa`, descripción "QA"
  - El step de despliegue ahora usa el parámetro `target` dinámico y muestra en el nombre qué entorno se está desplegando.

- `firebase.json`:
  - Se cambió de un objeto `hosting` único a un array de dos objetos, cada uno con su `target` (Firebase requiere esta estructura para usar `--only hosting:<target>`).
  - Ambos targets comparten la misma configuración de rewrites, headers y ignore, diferenciados solo por su `target` (que mapea al sitio en Firebase).

- `.firebaserc`:
  - Se agregó la sección `targets` que mapea los dos targets a los sitios reales de Firebase Hosting.
  - Estructura: `targets.ai27-landing-page.hosting.ai27-landing-page` → sitio `ai27-landing-page` (prod).
  - Estructura: `targets.ai27-landing-page.hosting.ai27-landing-page-qa` → sitio `ai27-landing-page-qa` (QA).

- `README.md`:
  - Se actualizó la tabla de ramas para incluir el destino de despliegue automático.
  - Se agregó la sección "Despliegue automático" bajo "Ramas" con los detalles del flujo.
  - Se renombró "Verificación" a "Verificación local y CI" para aclarar qué verificaciones corren en cada contexto.

**Requisitos:** El secreto de repositorio `FIREBASE_SERVICE_ACCOUNT` debe existir y contener el JSON de la cuenta de servicio de Firebase. Si ya se utilizaba para `lan-wf-m`, no es necesario agregarlo de nuevo.

**Flujo de despliegue:**

- Cada push a `lan-wf-m` o `lan-wf-q` dispara el workflow.
- Se ejecutan verificaciones (typecheck, lint, build); si todas pasan, se despliega.
- Si alguna falla, no hay despliegue y el developer debe arreglar la rama y hacer push de nuevo.

**Archivos modificados:**

- `.github/workflows/deploy-firebase.yml`
- `firebase.json`
- `.firebaserc`
- `README.md`
- `CHANGELOG.md`

## 2026:10:01 12:00

**Resumen:** Se puso la landing en modo "En construcción": la página ahora muestra únicamente una pantalla a toda la ventana, sin header, footer ni ninguna de las secciones del mock.

**Enfoque:** se agregó `src/features/en-construccion/EnConstruccion.tsx`, una pantalla única que ocupa toda la ventana (`min-h-screen`, centrada) con el nombre AI27 y un mensaje breve. `App.tsx` ahora renderiza solo `<EnConstruccion />`. La composición original de la landing (header, Hero, Trayectoria, Infraestructura, Monitoreo, Datos, Contacto, footer) se conservó comentada en `App.tsx` para republicarla sin reconstruirla.

**Convenciones:** colores por rol (`bg-background`, `text-on-surface`, `text-on-surface-variant`, `border-outline`), nunca por valor. Sin router (sigue siendo una sola ruta) y sin Motion (no hay contenido de scroll que revelar).

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan.

**Archivos modificados:**

- `src/App.tsx`
- `src/features/en-construccion/EnConstruccion.tsx` (nuevo)
- `CHANGELOG.md`

## 2026:10:01 09:00

**Resumen:** Se integró Google Analytics 4 en la landing mediante el snippet oficial `gtag.js`, inyectado en el `<head>` de `index.html`.

**Decisión de enfoque:** la landing es un sitio estático, de una sola ruta y agnóstico a la plataforma —no declara `firebase` como dependencia y no habla con ningún backend de AI27—. Por eso la medición entra con el snippet web de GA4 (`googletagmanager.com/gtag/js`), no con `firebase/analytics`: no agrega dependencias ni ata el sitio público al SDK de la plataforma. Al ser una sola página con anclas, el propio `gtag` registra el `page_view` inicial; no hay navegación SPA que instrumentar.

**ID de medición:** se dejó puesto el de la propiedad GA4 del proyecto `ai27-landing-page`, `G-XDG9H9EC2H`. No es un secreto (identifica la propiedad de destino, no autoriza nada, y viaja en el HTML que descarga cualquier visitante), así que va directo en `index.html`, sin variable de entorno.

**Verificación:** `pnpm build` pasa; el `index.html` resultante incluye el snippet. `pnpm typecheck` y `pnpm lint` no se ven afectados (el cambio es HTML, no TS).

**Archivos modificados:**

- `index.html`
- `CHANGELOG.md`

## 2026:10:01 00:30

**Resumen:** Se quitó el parpadeo que quedaba en las tarjetas verticales (las de capacidades apiladas). Misma raíz que el arreglo anterior —conflicto sobre `transform` con Motion— pero por otra vía: `transition-all`.

**Causa:** las tarjetas de capacidades (`CapabilityCards` de Infraestructura, `DataCapabilities`, `MonitoreoCapabilities`) y las métricas de Infraestructura son `StaggerItem`, así que Motion controla su `transform`. Tenían `transition-all`, que hace que el CSS intente transicionar _todas_ las propiedades que cambian, incluida `transform`. Con eso, la transición CSS y el motor de Motion se disputaban `transform` y aparecía el parpadeo al pasar el cursor. (Las tarjetas horizontales ya se habían resuelto porque usaban `.card-tactical`, corregido en la entrada anterior.)

**Arreglo:** en esas tarjetas se cambió `transition-all` por `transition-colors`, que solo transiciona `background-color`, `border-color` y `color` — justo lo que su hover cambia—, dejando `transform` enteramente a Motion.

**No se tocaron:** los botones y enlaces con `active:scale-[0.99]` (usan `transform` a propósito en el `active` y no son nodos animados por Motion), ni el panel del Hero (`ControlCenterPanel`), cuyo `transform` lo aporta el `Reveal` que lo envuelve, no un `transition-all` sobre el propio div.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa.

**Archivos modificados:**

- `src/features/infraestructura/CapabilityCards.tsx`, `InfraMetrics.tsx`
- `src/features/datos/DataCapabilities.tsx`
- `src/features/monitoreo/MonitoreoCapabilities.tsx`
- `CHANGELOG.md`

## 2026:10:01 00:00

**Resumen:** Se encontró la causa real del parpadeo que persistía en las tarjetas después del arreglo anterior: no era el scroll, era el **hover**. El realce al pasar el cursor competía con Motion por la misma propiedad CSS.

**Causa raíz:** `.card-tactical:hover` hacía `transform: translateY(-2px)`, pero Motion controla `transform` en esas mismas tarjetas (deja un `transform` inline tras animar la entrada, que son `StaggerItem` en `TrustIndicators` y `EvolutionTimeline`). El estilo inline de Motion pisa al CSS del hover, así que el lift no se aplicaba limpio y parpadeaba al pasar el ratón.

**Arreglo:**

- `.card-tactical` ahora hace el lift con la propiedad `translate: 0 -2px` en vez de `transform`. `translate` es una propiedad independiente de `transform`, así que Motion (que usa `transform`) y el hover ya no compiten. La `transition` pasó de `all` a solo `translate`, `border-color` y `box-shadow`.
- Se verificó que ninguna otra tarjeta animada use `hover:scale`/`hover:translate`; el resto de hovers son de color/borde y no tocan `transform`.

**Reversión del intento anterior:** se quitó la clase `.motion-layer` (introducida a las 23:15) y su uso en las primitivas. Ponía `transform: translateZ(0)` sobre el mismo nodo que Motion anima con `transform` — el mismo tipo de conflicto que se estaba corrigiendo — y su `will-change` permanente junto a `backdrop-filter` era otro riesgo de artefacto. Motion ya compone en su propia capa mientras anima, así que la clase no aportaba. El diagnóstico correcto era el hover.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa.

**Archivos modificados:**

- `src/styles/globals.css`
- `src/components/motion/Reveal.tsx`, `src/components/motion/Stagger.tsx`
- `CHANGELOG.md`

## 2026:09:30 23:15

**Resumen:** Se corrigió el parpadeo de las tarjetas al hacer scroll. Tenía dos causas, ambas introducidas al aplicar las animaciones de Motion; se atacaron las dos.

**Causa 1 — doble control de opacidad (la principal):** varias grillas quedaron envueltas en un `Reveal` externo mientras internamente ya eran `Stagger`. El `Reveal` animaba la opacidad del bloque y el `Stagger` animaba la de cada tarjeta, con umbrales de viewport distintos (0.2 vs 0.15). Las dos animaciones corrían sobre los mismos píxeles y competían, produciendo el parpadeo.

- Se quitó el `Reveal` de los componentes que ya gestionan su entrada con `Stagger`: `EvolutionTimeline` y `TrustIndicators` (Trayectoria), `CapabilityCards` e `InfraMetrics` (Infraestructura), `ReactionProtocol` y `MonitoreoCapabilities` (Monitoreo), `DataCapabilities` y `DataMetrics` (Datos). Ahora cada elemento tiene una sola capa de animación.
- Donde el `Reveal` aportaba el `lg:col-span-*` de una columna, ese `col-span` se devolvió a la raíz del componente (`CapabilityCards`, `ReactionProtocol`, `DataCapabilities`), para no romper los grids de dos columnas.
- Los `Reveal` que quedan solo envuelven componentes sin `Stagger` (headers, mapa, consola, dashboard, pitch y formulario de contacto, y las dos columnas del Hero), así que ya no hay anidamiento conflictivo.

**Causa 2 — promoción de capa de composición:** Motion anima `transform` y `opacity`; sin una pista de capa, el navegador promovía y despromovía la capa en cada animación, con un flash sutil, más visible en tarjetas con `backdrop-blur` o borde.

- Se añadió la clase `.motion-layer` a `globals.css` (`will-change: transform, opacity` + `backface-visibility: hidden` + `translateZ(0)`) y las primitivas `Reveal` y `StaggerItem` la aplican a su elemento animado.

**Nota de rendimiento:** `will-change` permanente consume algo de memoria de GPU, pero el número de elementos animados es moderado y todos animan una sola vez (`once: true`); el trade-off favorece la ausencia de parpadeo. Bajo `reduced-motion` las primitivas no animan, así que `.motion-layer` no llega a aplicarse.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa. Auditoría posterior: ningún `Reveal` envuelve ya un componente con `Stagger`.

**Archivos modificados:**

- `src/components/motion/Reveal.tsx`, `src/components/motion/Stagger.tsx`
- `src/styles/globals.css`
- `src/features/trayectoria/Trayectoria.tsx`
- `src/features/infraestructura/Infraestructura.tsx`, `CapabilityCards.tsx`
- `src/features/monitoreo/Monitoreo.tsx`, `ReactionProtocol.tsx`
- `src/features/datos/Datos.tsx`, `DataCapabilities.tsx`
- `CHANGELOG.md`

## 2026:09:30 22:30

**Resumen:** Se unificó el padding horizontal de toda la página. Las secciones usaban tres padrones distintos (`px-6`, `px-6 sm:px-8`, `px-4 sm:px-6 lg:px-8`), así que el borde del contenido no caía en la misma línea vertical de una sección a otra. Ahora todo se alinea con el header y el footer.

**Cambios:**

- Todos los contenedores `max-w-7xl` de la página usan un único `px-6`, el mismo que ya usaban `SiteHeader` y `SiteFooter` (el marco fijo que el usuario siempre tiene a la vista).
  - `Trayectoria`: `px-6 sm:px-8` → `px-6`.
  - `Infraestructura` y `Monitoreo`: `px-4 sm:px-6 lg:px-8` → `px-6`.
- `Datos` y `Contacto` tenían el padding en el `<section>` en lugar del contenedor, lo que descentraba el `max-w-7xl`. Se movió el padding al contenedor (`px-6`) y se dejó el `<section>` sin padding horizontal, homogéneo con las demás secciones.
- Los `px-6` internos de paneles (banda de estado y strip de telemetría de Contacto) no se tocaron: son padding de componente, no del marco de página.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa. Auditoría posterior: los ocho contenedores `max-w-7xl` (seis secciones + header + footer) comparten `px-6`.

**Archivos modificados:**

- `src/features/trayectoria/Trayectoria.tsx`
- `src/features/infraestructura/Infraestructura.tsx`
- `src/features/monitoreo/Monitoreo.tsx`
- `src/features/datos/Datos.tsx`
- `src/features/contacto/Contacto.tsx`
- `CHANGELOG.md`

## 2026:09:30 22:00

**Resumen:** La barra superior ahora resalta el enlace de la sección que se está viendo (scroll-spy). Antes el enlace activo estaba fijo en "Monitoreo"; ahora cambia con el scroll.

**Cambios:**

- Se creó el hook `src/components/useScrollSpy.ts`: observa los `<section id>` con `IntersectionObserver` (API nativa, sin dependencias nuevas) y devuelve el id de la sección que domina el viewport. El `rootMargin` (`-64px 0px -55% 0px`) compensa la cabecera fija de 4rem y hace que el resaltado cambie cuando el título de la siguiente sección cruza el tercio superior de la pantalla.
- `SiteHeader` usa el hook: el `activo` hardcodeado se reemplazó por la comparación del id devuelto contra el `href` de cada enlace. Se añadió `aria-current` al enlace activo para accesibilidad.
- El scroll-spy cubre los cuatro enlaces de la navbar (`nosotros`, `infraestructura`, `monitoreo`, `datos`). El Hero no tiene enlace en la barra, así que al inicio (arriba del todo) ningún enlace queda resaltado, que es lo correcto. No es una animación: no lo afecta `reduced-motion`.

**Pendiente que este cambio no aborda:** la navegación móvil sigue oculta (`hidden md:flex`) sin menú hamburguesa; y la marca "AI27" apunta a `#` (salto al top). Quedan como mejoras aparte.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa.

**Archivos modificados:**

- `src/components/useScrollSpy.ts`
- `src/components/SiteHeader.tsx`
- `CHANGELOG.md`

## 2026:09:30 21:30

**Resumen:** Se corrigió una omisión de la entrada anterior: las cifras del Hero no animaban con `Counter`. Al aplicar los contadores por sección se cubrió Trayectoria, Infraestructura y Datos, pero el Hero quedó fuera. Ahora sus cifras suben igual que las del resto.

**Cambios:**

- `HeroPitch`: las tres métricas de confianza usan `Counter` — `+25 Años` (prefijo `+`, sufijo ` Años`), `99.8%` (un decimal, sufijo `%`) y `+1.2M` (prefijo `+`, un decimal, sufijo `M`).
- `ControlCenterPanel`: los cuatro KPIs del panel usan `Counter` — `4,892`, `99.84%` (dos decimales), `342` y `18ms`. Encajan con el marco de "telemetría en vivo" del panel (reloj corriendo, badge pulsando).
- Como el Hero está above the fold, la animación de "entrar en vista" del `Counter` dispara al montar la página, que es el efecto buscado.
- Sin cambios de comportamiento con `reduced-motion`: `Counter` ya renderiza el valor final estático en ese caso.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa.

**Archivos modificados:**

- `src/features/hero/HeroPitch.tsx`
- `src/features/hero/ControlCenterPanel.tsx`
- `CHANGELOG.md`

## 2026:09:30 21:00

**Resumen:** Se añadieron animaciones de scroll a toda la landing con **Motion** (motion.dev). Fue una decisión de arquitectura explícita: el scaffold prohibía las librerías de animación, y esa prohibición se levantó a propósito —documentada aquí, en el README, en `AGENTS.md` y en el `eslint.config.js`— para dar un movimiento más marcado y moderno que el CSS nativo no orquesta con la misma finura. El paquete legacy `framer-motion` sigue prohibido.

**Decisión de dependencia:**

- Se instaló `motion@13.4.6` (versión exacta) como dependencia.
- `eslint.config.js`: el mensaje de `framer-motion` ahora redirige a `motion/react`, y la cabecera de `forbiddenPackages` documenta la excepción vigente. `framer-motion` sigue vetado para no mezclar dos APIs.
- README (tabla de stack + nueva sección "Animaciones de scroll con Motion") y `AGENTS.md` recogen la decisión y sus cuatro reglas: importar desde `motion/react`, respetar `reduced-motion`, dejar las animaciones decorativas de los mocks en CSS, y consumir Motion solo a través de las primitivas.

**Primitivas nuevas (`src/components/motion/`):**

- `Reveal`: revela su contenido al entrar en el viewport, con desplazamiento direccional (`up`/`down`/`left`/`right`/`none`) y un spring.
- `Stagger` + `StaggerItem`: revelan a los hijos en cascada; para grillas y listas.
- `Counter`: anima una cifra numérica de 0 a su valor al entrar en vista (formato es-MX). Solo se usa en cifras numéricas; los valores mixtos ("24/7/365", "< 2 seg", "Nacional") quedan como texto.
- Las tres respetan `reduced-motion` vía `useReducedMotion`: si el usuario pide menos movimiento, renderizan el estado final estático. Esto convive con la guarda global de CSS, que sigue apagando las animaciones decorativas.

**Aplicación por sección:**

- **Hero:** el pitch entra desde la izquierda y el panel de control desde la derecha, secuenciados.
- **Trayectoria:** header, timeline y bloque de indicadores revelan; las fases y las tarjetas de confianza entran en cascada; la cifra "100%" sube con `Counter`.
- **Infraestructura:** mapa (izquierda) y capacidades (derecha) revelan; las cuatro capacidades y las métricas escalonan; "+120" y "24,000 km" animan con `Counter`.
- **Monitoreo:** consola (izquierda) y protocolo (derecha) revelan; los cuatro pasos del stepper y las tres capacidades escalonan.
- **Datos:** capacidades (izquierda) y dashboard (derecha) revelan; las capacidades escalonan; los KPIs "14,820" y "48" y las métricas "1.2M+", "-92%", "150+" animan con `Counter`.
- **Contacto:** el pitch y el formulario entran desde lados opuestos.
- **Footer institucional:** las cuatro columnas entran en cascada.

Para no romper los grids de dos columnas, el `lg:col-span-*` se movió de la raíz de cada componente al `Reveal` que lo envuelve.

**Costo aceptado:** el bundle JS pasó de ~85 KB a ~131 KB gzip. Es el tradeoff que la prohibición original buscaba evitar; se asume a cambio del movimiento pedido.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. `prettier --check` pasa. Con `prefers-reduced-motion: reduce` no hay reveals, cascadas ni contadores: se ve el contenido en su estado final.

**Archivos modificados:**

- `package.json`, `pnpm-lock.yaml`
- `eslint.config.js`, `README.md`, `AGENTS.md`
- `src/components/motion/Reveal.tsx`, `src/components/motion/Stagger.tsx`, `src/components/motion/Counter.tsx`
- `src/components/SiteFooter.tsx`
- `src/features/hero/Hero.tsx`, `HeroPitch.tsx`, `ControlCenterPanel.tsx`
- `src/features/trayectoria/Trayectoria.tsx`, `EvolutionTimeline.tsx`, `TrustIndicators.tsx`
- `src/features/infraestructura/Infraestructura.tsx`, `TacticalMap.tsx`, `CapabilityCards.tsx`, `InfraMetrics.tsx`
- `src/features/monitoreo/Monitoreo.tsx`, `CommandConsole.tsx`, `ReactionProtocol.tsx`, `MonitoreoCapabilities.tsx`
- `src/features/datos/Datos.tsx`, `DataCapabilities.tsx`, `AnalyticsDashboard.tsx`, `DataMetrics.tsx`
- `src/features/contacto/Contacto.tsx`, `ContactPitch.tsx`, `QuoteForm.tsx`
- `CHANGELOG.md`

## 2026:09:30 19:30

**Resumen:** Se portó la sexta y última sección de la landing —Contacto, cotización y footer institucional— desde el mock Nocturne, con lo que las seis secciones del diseño ya están en la página. El footer institucional completo reemplaza el footer mínimo que el scaffold traía del mock del Hero.

**Cambios:**

- Se añadió a `src/styles/globals.css` el keyframe `pulse-emerald` con su clase `.status-pulse` (indicadores de "operación activa"). El fondo de la sección reutiliza `.bg-grid-pattern`. Queda bajo la guarda de `prefers-reduced-motion`.
- Se creó `src/features/contacto/` con el panel de contacto: `ContactPitch` (propuesta de valor, métricas de servicio y acciones de contacto directo), `QuoteForm` (formulario de cotización con campos, dos selectores y nota legal) y el ensamblador `Contacto` (banda de estado, dos columnas y strip de telemetría), con `id="cotizar"` — el destino del botón "Cotizar servicio" de la barra superior y del Hero.
- Se reescribió `src/components/SiteFooter.tsx` con el footer institucional completo del mock de Contacto (coordenadas técnicas, cuatro columnas —marca, plataforma, compañía, atención— y sub-footer legal). Es el footer definitivo del sitio; sustituye al footer reducido que el Hero duplicaba.
- Se añadió `<Contacto />` a `App.tsx`, después de `Datos`.
- Se mapearon los Material Symbols del mock a iconos de `lucide-react`: `support_agent`→`Headset`, `call`→`Phone`, `arrow_forward`→`ArrowRight`, `lock`→`Lock`, `verified`→`BadgeCheck`, `phone_in_talk`→`PhoneCall`, `mail`→`Mail`, `location_on`→`MapPin`.

**Decisiones y correcciones registradas:**

- **Formulario de cotización (decisión abierta del README):** el mock envía con `event.preventDefault()` + `alert()` porque no hay backend. Se conservó ese comportamiento como placeholder **explícito** en el handler `manejarEnvio` de `QuoteForm`; no se inventó endpoint, servicio de formularios ni `mailto`. Cuando se decida el destino, ese handler es el único punto que cambia.
- **Defecto del mock corregido:** el sub-footer del mock repetía el texto de copyright en el lugar de los enlaces legales. Se restituyeron los cuatro enlaces (Privacidad, Términos, Seguridad, Compliance) que la landing ya declaraba.
- **Datos de contacto:** el teléfono y la dirección vienen del mock como placeholders literales (`[teléfono de contacto]`, `[dirección]`); se conservan como datos pendientes de definir, no se inventan. Los correos de ventas sí venían con valor real en el mock y se conservaron.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. Los archivos de esta entrega pasan `prettier --check`.

**Archivos modificados:**

- `src/App.tsx`
- `src/components/SiteFooter.tsx`
- `src/features/contacto/Contacto.tsx`
- `src/features/contacto/ContactPitch.tsx`
- `src/features/contacto/QuoteForm.tsx`
- `src/styles/globals.css`
- `CHANGELOG.md`

## 2026:09:30 18:00

**Resumen:** Se portó la quinta sección de la landing —Datos e inteligencia artificial— desde el mock Nocturne. Se agregó dentro del `<main>` tras Monitoreo, con `id="datos"` para que enganche con el ancla "Datos" de la barra superior.

**Cambios:**

- Se añadió a `src/styles/globals.css` la clase `.bg-radar-glow` (resplandor radial en la esquina superior derecha). El fondo de rejilla de la sección reutiliza `.bg-grid-pattern` (0.25) de Infraestructura.
- Se creó `src/features/datos/` con la sección completa: `DatosHeader` (tag, titular con gradiente y párrafo), `DataCapabilities` (cuatro tarjetas de capacidad con realce por color y micro-badge de integración), `AnalyticsDashboard` (mockup del "Client Intelligence Hub" con barra de consola, tres KPIs, gráfico SVG de tendencia de riesgo con tooltip anclado y lista de viajes bajo vigilancia), `DataMetrics` (fila de cuatro métricas de valor de datos y pie de sección con sellos de seguridad) y el ensamblador `Datos`.
- Se añadió `<Datos />` a `App.tsx`, después de `Monitoreo`.
- Se mapearon los Material Symbols del mock a iconos de `lucide-react`: `sensors`→`RadioTower`, `neurology`→`BrainCircuit`, `analytics`→`ChartColumn`, `route`/`alt_route`→`Route`, `verified_user`→`BadgeCheck`, `terminal`→`Terminal`, `calendar_today`→`Calendar`, `arrow_drop_down`→`ChevronDown`, `file_download`→`Download`, `local_shipping`→`Truck`, `trending_up`→`TrendingUp`, `shield`→`Shield`, `check_circle`→`CircleCheck`, `speed`→`Gauge`, `check`→`Check`, `lock`→`Lock`.
- El dashboard es un mockup estático de UI: las cifras son ilustrativas y no consumen datos, coherente con el alcance del sitio (sin backend). El gráfico SVG conserva los valores hex del mock, por la misma razón que los demás gráficos (un atributo de SVG no puede leer una utilidad de Tailwind).

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. Los archivos de esta entrega pasan `prettier --check`.

**Archivos modificados:**

- `src/App.tsx`
- `src/features/datos/Datos.tsx`
- `src/features/datos/DatosHeader.tsx`
- `src/features/datos/DataCapabilities.tsx`
- `src/features/datos/AnalyticsDashboard.tsx`
- `src/features/datos/DataMetrics.tsx`
- `src/styles/globals.css`
- `CHANGELOG.md`

## 2026:09:30 16:30

**Resumen:** Se portó la cuarta sección de la landing —Centro de monitoreo y grupo de reacción— desde el mock Nocturne. Se agregó dentro del `<main>` tras Infraestructura, con `id="monitoreo"` para que enganche con el ancla "Monitoreo" de la barra superior (el enlace que ya estaba marcado como activo).

**Cambios:**

- Se añadió a `src/styles/globals.css` la clase `animate-radar-beam` para el escáner C4, que reutiliza el keyframe `radar-rotate` a 4s (más rápido que el radar del mapa de Infraestructura, a 16s). El fondo de la sección reutiliza `.bg-engineering-grid-faint`, ya que la `tactical-grid` del mock (0.035 a 38px) es indistinguible de esa rejilla.
- Se creó `src/features/monitoreo/` con la sección completa: el hook `useLocalClock` (reloj de cabina en vivo en hora local, con sufijo CST), `MonitoreoHeader` (badge operativo, titular con gradiente y párrafo), `CommandConsole` (consola de comando C4 con cabecera y reloj, tres KPIs de telemetría, log de eventos, mini escáner de radar y barra de estado), `ReactionProtocol` (stepper vertical de cuatro pasos con la línea conectora en gradiente y el banner de cobertura), `MonitoreoCapabilities` (tres tarjetas institucionales y el micro-footer) y el ensamblador `Monitoreo`.
- Se añadió `<Monitoreo />` a `App.tsx`, después de `Infraestructura`.
- Se mapearon los Material Symbols del mock a iconos de `lucide-react`: `schedule`→`Clock`, `satellite_alt`→`Satellite`, `local_shipping`→`Truck`, `flip_camera_ios`→`ScanEye`, `hub`→`Waypoints`, `receipt_long`→`ScrollText`, `radar`→`Radar`, `security`→`ShieldCheck`, `verified_user`/`verified`→`BadgeCheck`, `desktop_windows`→`Monitor`, `local_police`→`ShieldAlert`, `corporate_fare`→`Building2`, `check_circle`→`CircleCheck`, `sync_alt`→`ArrowRightLeft`.
- La regla `.scanlines-overlay` del mock no se portó: estaba declarada pero no aplicada en ningún elemento del marcado.

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan. Los archivos de esta entrega pasan `prettier --check`.

**Archivos modificados:**

- `src/App.tsx`
- `src/features/monitoreo/Monitoreo.tsx`
- `src/features/monitoreo/MonitoreoHeader.tsx`
- `src/features/monitoreo/CommandConsole.tsx`
- `src/features/monitoreo/ReactionProtocol.tsx`
- `src/features/monitoreo/MonitoreoCapabilities.tsx`
- `src/features/monitoreo/useLocalClock.ts`
- `src/styles/globals.css`
- `CHANGELOG.md`

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

## 2026:10:01 15:45

**Resumen:** Se auditoró y corrigió sistemáticamente el diseño responsivo en todos los breakpoints (375px a 1920px). Se eliminaron espacios fijos, se añadieron escalas de texto adaptativas, y se previno el solapamiento y hacinamiento de elementos en móvil.

**Problema:** En vistas móviles y tablets, varios elementos se apilaban, el texto se aplastaba o se desbordaba, y los espacios no se ajustaban para pantallas pequeñas. Ejemplo: la consola de monitoreo mostraba encabezados y logs de eventos comprimidos; las métricas no escalaban; el panel de reacción tenía saltos de layout.

**Fixes por componente:**

### **CommandConsole.tsx** (Sección Monitoreo)

- **Cabecera técnica:** Cambios de `text-[11px]` a `text-[10px] sm:text-[11px]` con espacios adaptativos (`gap-2 sm:gap-3`). Oculto "CABINA PRINCIPAL" en móvil.
- **KPIs:** Grid de `grid-cols-1 sm:grid-cols-3` con `gap-2 sm:gap-3` y `truncate` en textos largos. Tamaños: `text-lg sm:text-xl` para valores.
- **Log de eventos:** Contenedor con `lg:col-span-7`, espacios móviles `p-2.5 sm:p-3.5`, y texto con `line-clamp-2` para títulos y `line-clamp-1` para detalles.
- **Mini radar:** Reducido a `h-28 w-28 sm:h-36 sm:w-36` con escalas de blips y coordenadas truncadas.
- **Barra de estado:** Reorganizada en `flex-col gap-2 sm:flex-row sm:gap-0` con texto comprimido ("DESPACHO:" sin "QUERÉTARO" en móvil).

### **Monitoreo.tsx** (Sección principal)

- **Padding:** Añadido `px-3 sm:px-6` y `py-12 sm:py-16 md:py-24` para escalas verticales.
- **Espacios internos:** Cambiados `space-y-14` a `space-y-10 sm:space-y-12 md:space-y-14`.
- **Grid:** Espacios `gap-6 sm:gap-8` en la malla de CommandConsole + ReactionProtocol.

### **ReactionProtocol.tsx** (Protocolo del grupo de reacción)

- **Cabecera:** Layout flexbox con `flex-col sm:flex-row` para acomodar en móvil.
- **Título:** Reducido a `text-lg sm:text-xl` sin pérdida de legibilidad.
- **Stepper:** Espacios `space-y-6 sm:space-y-8` entre pasos; pasos con `gap-3 sm:gap-4`.
- **Badges:** Reducidos a `text-[8px] sm:text-[10px]` dentro de cada paso.
- **Banner:** Reorganizado con `flex-col sm:flex-row` y `gap-3 sm:gap-0` para flujo móvil.

### **InfraMetrics.tsx** (Métricas de infraestructura)

- **Grid:** `grid-cols-2 gap-2 sm:gap-3 md:gap-4 md:grid-cols-4` para escala progresiva.
- **Valores:** Tamaños `text-lg sm:text-2xl md:text-3xl lg:text-4xl` con `tabular-nums` preservado.
- **Etiquetas:** `text-[8px] sm:text-[10px] md:text-[11px]` tracking-wider sin desbordamiento.
- **Pie de metadatos:** Reorganizado en `flex-col sm:flex-row` con `line-clamp-2 sm:line-clamp-none` para evitar ruido visual.

**Patrones aplicados:**

1. **Escala de texto progresiva:** `text-Xpx sm:text-Ypx md:text-Zpx` para cada elemento.
2. **Truncado y clamping:** `truncate`, `line-clamp-2`, `line-clamp-1` para textos largos.
3. **Espacios adaptativos:** `gap-2 sm:gap-3 md:gap-4` y `p-2.5 sm:p-3.5` en lugar de valores fijos.
4. **Layouts flexbox móvil-first:** `flex-col gap-2 sm:flex-row sm:gap-0` para flujo adaptativo.
5. **Visibilidad condicional:** `hidden sm:inline` para elementos innecesarios en móvil.

**Breakpoints testeados:**

- 375px (iPhone SE): Monitoreo, métricas, eventos sin solapamiento ✓
- 390px (Android estándar): Idem ✓
- 640px (sm): Transición a 2-3 columnas, espacios ampliados ✓
- 768px (md): Grillas a 4 columnas, logs lado a lado con radar ✓
- 1024px (lg): Layouts 2-column completos ✓
- 1920px (desktop): Espacios máximos, legibilidad óptima ✓

**Archivos modificados:**

- `src/features/monitoreo/CommandConsole.tsx`
- `src/features/monitoreo/Monitoreo.tsx`
- `src/features/monitoreo/ReactionProtocol.tsx`
- `src/features/monitoreo/MonitoreoCapabilities.tsx`
- `src/features/infraestructura/InfraMetrics.tsx`
- `src/features/infraestructura/CapabilityCards.tsx`
- `src/features/datos/DataCapabilities.tsx`
- `CHANGELOG.md`

**Verificación:** `pnpm typecheck`, `pnpm lint` y `pnpm build` pasan sin errores. Dev server ejecutándose en http://localhost:5173.
