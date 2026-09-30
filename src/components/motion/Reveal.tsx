/*
 * Reveal: revela su contenido cuando entra en el viewport, con un desplazamiento
 * direccional y un spring. Es la primitiva base del movimiento de scroll de la
 * landing (ver README, "Animaciones de scroll con Motion").
 *
 * Respeta reduced-motion: si el usuario pide menos movimiento, el contenido
 * aparece en su estado final, sin animar. Esa politica vive aqui, no en cada
 * seccion.
 */
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type Direccion = 'up' | 'down' | 'left' | 'right' | 'none';

type RevealProps = {
  children: ReactNode;
  /** Direccion desde la que entra. Por defecto sube ("up"). */
  from?: Direccion;
  /** Retraso en segundos, para escalonar entradas a mano. */
  delay?: number;
  /** Distancia del desplazamiento en px. Por defecto 24. */
  distance?: number;
  /** Etiqueta del elemento contenedor. Por defecto "div". */
  as?: 'div' | 'section' | 'li' | 'span';
  className?: string;
};

function desplazamiento(from: Direccion, distance: number) {
  switch (from) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: distance };
    case 'right':
      return { x: -distance };
    case 'none':
      return {};
  }
}

export function Reveal({
  children,
  from = 'up',
  delay = 0,
  distance = 24,
  as = 'div',
  className,
}: RevealProps) {
  const reducir = useReducedMotion();
  const MotionTag = motion[as];

  if (reducir) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...desplazamiento(from, distance) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay }}
    >
      {children}
    </MotionTag>
  );
}
