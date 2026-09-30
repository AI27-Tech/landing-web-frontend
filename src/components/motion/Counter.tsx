/*
 * Counter: anima una cifra de 0 (o un inicio) hasta su valor objetivo cuando
 * entra en el viewport. Para KPIs y metricas donde ver la cifra "subir" da vida
 * sin inventar datos: el valor final es el del mock.
 *
 * Solo aplica a cifras numericas. Los valores no numericos del diseno
 * ("24/7/365", "< 2 seg", "API / TMS") NO usan Counter; se dejan como texto.
 *
 * Respeta reduced-motion: sin movimiento, se pinta el valor final formateado de
 * una vez.
 */
import { animate, useInView, useMotionValue, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

type CounterProps = {
  /** Valor final al que anima. */
  value: number;
  /** Texto antes de la cifra (p. ej. "+", "-"). */
  prefix?: string;
  /** Texto despues de la cifra (p. ej. "%", "M+", " km"). */
  suffix?: string;
  /** Decimales a mostrar. Por defecto 0. */
  decimals?: number;
  /** Duracion en segundos. Por defecto 1.4. */
  duration?: number;
  className?: string;
};

function formatear(n: number, decimals: number): string {
  return n.toLocaleString('es-MX', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.4,
  className,
}: CounterProps) {
  const reducir = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const enVista = useInView(ref, { once: true, amount: 0.4 });
  const motionValue = useMotionValue(0);
  const [texto, setTexto] = useState(() =>
    reducir ? formatear(value, decimals) : formatear(0, decimals),
  );

  useEffect(() => {
    if (reducir || !enVista) {
      return;
    }
    const control = animate(motionValue, value, {
      duration,
      ease: [0.2, 0, 0, 1],
      onUpdate: (v) => setTexto(formatear(v, decimals)),
    });
    return () => control.stop();
  }, [enVista, reducir, value, decimals, duration, motionValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {texto}
      {suffix}
    </span>
  );
}
