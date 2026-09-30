import { useEffect, useState } from 'react';

/*
 * Reloj en vivo de la cabina C4. A diferencia del reloj del Hero (UTC), este
 * muestra la hora local del navegador con el sufijo "CST" del mock, que rotula
 * la zona de la cabina matriz (Queretaro). Es dato operativo, no animacion
 * decorativa, asi que no lo cubre la guarda de reduced-motion; el consumidor lo
 * pinta con `tabular-nums` para que las cifras no bailen.
 */
function formatoLocal(fecha: Date): string {
  const hrs = String(fecha.getHours()).padStart(2, '0');
  const mins = String(fecha.getMinutes()).padStart(2, '0');
  const secs = String(fecha.getSeconds()).padStart(2, '0');
  return `${hrs}:${mins}:${secs} CST`;
}

export function useLocalClock(): string {
  const [hora, setHora] = useState(() => formatoLocal(new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setHora(formatoLocal(new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return hora;
}
