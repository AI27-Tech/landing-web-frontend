/*
 * Datos de la seccion Newsletter: el catalogo de ediciones del Informe Mensual
 * de Seguridad de AI27.
 *
 * Cada edicion es un archivo estatico (dos paginas HTML autocontenidas, una por
 * idioma, mas su PDF) que vive en `public/newsletter/<edicion>/` y se sirve
 * desde la raiz del sitio. La seccion React solo lista las ediciones y enlaza a
 * ese archivo; no renderiza el contenido del informe.
 *
 * La portada (`portada`) tambien es una ruta bajo `public/`, servida desde la
 * raiz (p. ej. `/newsletter/octubre-2026/images/nw/portada_web_baja.png`).
 */

export type EdicionNewsletter = {
  /** Identificador estable de la edicion. Se usa como `key`. */
  id: string;
  /** Nombre del periodo que cubre el informe (p. ej. "Octubre"). */
  mes: string;
  /** Anio del informe. */
  anio: number;
  /** Titulo visible de la tarjeta. */
  titulo: string;
  /** Resumen corto de una o dos lineas para la tarjeta. */
  resumen: string;
  /** Ruta de la imagen de portada bajo `public/`, servida desde la raiz. */
  portada: string;
  /** URL del informe en espanol (archivo estatico servido desde la raiz). */
  hrefEspanol: string;
  /** URL del informe en ingles (archivo estatico servido desde la raiz). */
  hrefIngles: string;
};

export const ediciones: EdicionNewsletter[] = [
  {
    id: 'octubre-2026',
    mes: 'Octubre',
    anio: 2026,
    titulo: 'Informe Mensual de Seguridad',
    resumen:
      'Robo de transporte de carga en México: transporte y producto más afectados, horarios de mayor incidencia, tramos carreteros críticos y mapas de calor por estado.',
    portada: '/newsletter/octubre-2026/images/nw/portada_web_baja.png',
    hrefEspanol: '/newsletter/octubre-2026/index-spa.html',
    hrefIngles: '/newsletter/octubre-2026/index-eng.html',
  },
];
