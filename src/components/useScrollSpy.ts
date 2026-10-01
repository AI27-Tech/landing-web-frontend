import { useEffect, useState } from 'react';

/*
 * Scroll-spy: observa los <section id="..."> de la landing y devuelve el id de
 * la seccion que domina el viewport. Sirve para resaltar en la barra superior
 * el enlace de la seccion que se esta viendo.
 *
 * Usa IntersectionObserver (API nativa, sin dependencias). El rootMargin recorta
 * el viewport para compensar la cabecera fija de 4rem: la franja superior (los
 * primeros 64px) no cuenta, y solo la mitad superior de lo que queda decide la
 * seccion activa, de modo que el resaltado cambia cuando el titulo de la
 * siguiente seccion cruza el tercio superior de la pantalla.
 *
 * Devuelve null cuando ninguna seccion es visible (ej: estás en el Hero o
 * antes de la primera seccion), para que no quede un enlace resaltado cuando
 * no corresponda.
 *
 * No es una animacion: no lo cubre la guarda de reduced-motion. Es navegacion.
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [activo, setActivo] = useState<string | null>(null);

  useEffect(() => {
    const secciones = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (secciones.length === 0) {
      return;
    }

    // Mantiene el conjunto de secciones actualmente intersectando; la activa es
    // la primera en orden de documento, para que al bajar gane la nueva y al
    // subir se recupere la anterior.
    const visibles = new Set<string>();

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            visibles.add(entrada.target.id);
          } else {
            visibles.delete(entrada.target.id);
          }
        }
        const primera = ids.find((id) => visibles.has(id));
        // Si no hay ninguna seccion visible, devuelve null
        // Esto ocurre cuando estás en el Hero o antes de la primera seccion
        setActivo(primera ?? null);
      },
      { rootMargin: '-64px 0px -55% 0px', threshold: 0 },
    );

    for (const seccion of secciones) {
      observador.observe(seccion);
    }

    return () => observador.disconnect();
  }, [ids]);

  return activo;
}
