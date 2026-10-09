/*
 * Datos de la seccion Clientes.
 *
 * Los logos se colocan sus archivos en `public/clientes/`.
 */

export type Cliente = {
  /** Nombre de la marca. Se usa como texto de respaldo, `alt` y `key`. */
  nombre: string;
  /**
   * Ruta del logo bajo `public/`, servida desde la raiz (p. ej.
   * `/clientes/colgate.svg`).
   */
  logo?: string;
  /**
   * Multiplicador optico sobre la altura base del logo. Sirve para igualar el
   * peso visual.
   */
  escala?: number;
};

export const clientes: Cliente[] = [
  { nombre: 'Colgate', logo: '/clientes/colgate.svg' },
  { nombre: 'Mattel', logo: '/clientes/mattel.png', escala: 1.5 },
  { nombre: 'Pfizer', logo: '/clientes/pfizer.svg' },
  { nombre: 'GNP', logo: '/clientes/gnp.svg' },
  { nombre: 'Herdez', logo: '/clientes/herdez.png', escala: 1.5 },
  { nombre: 'Zurich', logo: '/clientes/zurich.svg' },
  { nombre: 'Technicolor', logo: '/clientes/technicolor.png' },
  { nombre: 'Pirelli', logo: '/clientes/pirelli.svg' },
];
