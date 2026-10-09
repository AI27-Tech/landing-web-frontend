/*
 * Muro de logos de clientes animado: una sola fila de logos que se desplaza en
 * loop continuo hacia la derecha (ver globals.css, "Seccion Clientes").
 *
 * CONTENIDO: cada cliente pinta su logo (archivo en `public/clientes/`) forzado
 * a blanco con un filtro CSS. Si a una marca le falta el archivo, el chip cae de
 * vuelta a su nombre como wordmark de texto, asi que la seccion nunca se rompe
 * por un logo faltante.
 */
import { useState } from 'react';
import type { Cliente } from '@/features/clientes/clientes-data';

type Fila = {
  clientes: Cliente[];
  /** Duracion del loop en segundos (p. ej. "42s"). */
  duracion: string;
};

function LogoChip({
  cliente,
  'aria-hidden': ariaHidden,
}: {
  cliente: Cliente;
  'aria-hidden'?: boolean;
}) {
  const [logoFallo, setLogoFallo] = useState(false);
  const mostrarLogo = Boolean(cliente.logo) && !logoFallo;

  return (
    <div aria-hidden={ariaHidden} className="flex h-24 shrink-0 items-center justify-center px-4">
      {mostrarLogo ? (
        <img
          src={cliente.logo}
          alt={cliente.nombre}
          loading="lazy"
          onError={() => setLogoFallo(true)}
          /*
           * Altura base de 3rem (= h-12), multiplicada por `escala` para igualar
           * el peso optico de los logos compactos.
           */
          style={{ height: `${3 * (cliente.escala ?? 1)}rem` }}
          className="w-auto max-w-[220px] object-contain opacity-80 brightness-0 invert transition-opacity duration-200 group-hover:opacity-100"
        />
      ) : (
        /* Respaldo si falta o falla el logo: wordmark en blanco de paleta. */
        <span className="text-on-surface font-mono text-sm font-semibold tracking-wide whitespace-nowrap uppercase">
          {cliente.nombre}
        </span>
      )}
    </div>
  );
}

function MarqueeRow({ clientes, duracion }: Fila) {
  return (
    <div className="marquee-row group relative overflow-hidden">
      <div
        className="marquee-track animate-marquee-right gap-2"
        style={{ '--marquee-duration': duracion } as React.CSSProperties}
      >
        {clientes.map((cliente) => (
          <LogoChip key={cliente.nombre} cliente={cliente} />
        ))}
        {clientes.map((cliente) => (
          <LogoChip key={`${cliente.nombre}-dup`} cliente={cliente} aria-hidden />
        ))}
      </div>
    </div>
  );
}

export function ClientLogosMarquee({ clientes }: { clientes: Cliente[] }) {
  return (
    <div
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      {/* Una sola fila, en movimiento hacia la derecha. */}
      <MarqueeRow clientes={clientes} duracion="42s" />
    </div>
  );
}
