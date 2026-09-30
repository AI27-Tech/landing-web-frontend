import { useEffect, useState } from 'react';

/*
 * Reloj UTC en vivo del panel Centro de Control. En el mock es un
 * setInterval que reescribe el DOM cada segundo; aqui es un hook que
 * devuelve la hora formateada HH:MM:SS y se actualiza una vez por segundo.
 *
 * Es dato operativo, no animacion decorativa, asi que no lo cubre la guarda
 * de reduced-motion. Para que las cifras no "bailen" al cambiar, el consumidor
 * las pinta con `tabular-nums`, como pide el diseno.
 */
function formatoUtc(fecha: Date): string {
  const hrs = String(fecha.getUTCHours()).padStart(2, '0');
  const mins = String(fecha.getUTCMinutes()).padStart(2, '0');
  const secs = String(fecha.getUTCSeconds()).padStart(2, '0');
  return `${hrs}:${mins}:${secs} UTC`;
}

export function useSystemClock(): string {
  const [hora, setHora] = useState(() => formatoUtc(new Date()));

  useEffect(() => {
    const id = setInterval(() => {
      setHora(formatoUtc(new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return hora;
}
