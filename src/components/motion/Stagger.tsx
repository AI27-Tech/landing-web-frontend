/*
 * Stagger: contenedor que revela a sus hijos <StaggerItem> en cascada cuando
 * entra en el viewport. Para grillas de tarjetas y listas donde el escalonado
 * se siente mas vivo que revelar todo a la vez.
 *
 * Respeta reduced-motion: sin movimiento, hijos en su estado final.
 */
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

type StaggerProps = {
  children: ReactNode;
  /** Segundos entre la entrada de cada hijo. Por defecto 0.08. */
  each?: number;
  /** Retraso antes de arrancar la cascada. */
  delay?: number;
  as?: 'div' | 'ul';
  className?: string;
};

type StaggerItemProps = {
  children: ReactNode;
  distance?: number;
  as?: 'div' | 'li';
  className?: string;
};

export function Stagger({ children, each = 0.08, delay = 0, as = 'div', className }: StaggerProps) {
  const reducir = useReducedMotion();
  const MotionTag = motion[as];

  if (reducir) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="oculto"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        visible: {
          transition: { staggerChildren: each, delayChildren: delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({ children, distance = 20, as = 'div', className }: StaggerItemProps) {
  const reducir = useReducedMotion();
  const MotionTag = motion[as];

  if (reducir) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        oculto: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 130, damping: 18 },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
