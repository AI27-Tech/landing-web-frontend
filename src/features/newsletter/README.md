# Newsletter

Sección de la landing que lista las ediciones del **Informe Mensual de
Seguridad** de AI27 como tarjetas. Cada tarjeta enlaza al informe, que es un
**archivo estático** (no se renderiza dentro de React).

## Cómo está partido

El contenido de cada informe lo entrega el equipo como un sitio HTML
autocontenido (estilos y scripts en línea, sin dependencias de build). Por eso
vive como archivo estático en `public/`, no como código:

- **Archivo estático** → `public/newsletter/<edicion>/`
  Para `octubre-2026`: `index-spa.html`, `index-eng.html`, sus dos PDF
  (`pdf-esp.pdf`, `pdf-ing.pdf`) y solo las imágenes que las páginas
  referencian (`images/…`). Se sirve desde la raíz, p. ej.
  `/newsletter/octubre-2026/index-spa.html`. Mismo patrón que `public/legal/`.
- **Sección React** → este folder
  Solo lista las ediciones y enlaza al archivo estático.

## Archivos

- `Newsletter.tsx` — sección contenedora. Expone el ancla `#newsletter` (a la
  que apuntan el enlace del header y el de la columna "Compañía" del footer) y
  pinta la grilla de tarjetas.
- `NewsletterCard.tsx` — tarjeta de una edición: portada, periodo, título,
  resumen y enlaces al informe (español / inglés), que abren en pestaña nueva.
- `newsletter-data.ts` — catálogo de ediciones. Por ahora solo Octubre 2026.

## Agregar una edición nueva

1. Colocar su archivo estático en `public/newsletter/<edicion>/` (dos páginas
   HTML + PDF + imágenes referenciadas). Revisar que los enlaces internos (botón
   "Descargar PDF", cambio de idioma) sean relativos y apunten a archivos que
   existen en esa carpeta.
2. Agregar una entrada a `ediciones` en `newsletter-data.ts`.
