/*
 * Fila inferior de la seccion Infraestructura: cuatro metricas de red y el pie
 * de metadatos de ingenieria. Portada del mock Nocturne. Las cifras numericas
 * suben con <Counter> al entrar; "Nacional" y "24/7/365" son texto y no animan.
 */
import type { ReactNode } from 'react';
import { Counter } from '@/components/motion/Counter';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Metrica = {
  valor: ReactNode;
  numerica: boolean;
  etiqueta: string;
  etiquetaColor: string;
  descripcion: string;
};

const metricas: Metrica[] = [
  {
    valor: <Counter value={250} prefix="+" />,
    numerica: true,
    etiqueta: 'Patrullas en campo',
    etiquetaColor: 'text-primary',
    descripcion:
      'Unidades de custodia y reacción desplegadas en los principales corredores logísticos del país.',
  },
  {
    // Km recorridos al mes = 250 patrullas × 13,000 km por unidad al mes.
    valor: <Counter value={3250000} suffix=" km" />,
    numerica: true,
    etiqueta: 'recorridos al mes',
    etiquetaColor: 'text-success',
    descripcion: 'Ejes troncales logísticos asegurados bajo cobertura algorítmica y física.',
  },
  {
    valor: 'Nacional',
    numerica: false,
    etiqueta: 'Cobertura geográfica',
    etiquetaColor: 'text-primary',
    descripcion: 'Cobertura nacional en los principales corredores y aduanas.',
  },
  {
    valor: '24/7/365',
    numerica: false,
    etiqueta: 'Operación y reacción',
    etiquetaColor: 'text-success',
    descripcion:
      'Supervisión ininterrumpida desde C4 con unidades de custodia y reacción en campo.',
  },
];

export function InfraMetrics() {
  return (
    <>
      <Stagger className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 md:grid-cols-4">
        {metricas.map((m) => (
          <StaggerItem
            key={m.etiqueta}
            className="bg-surface border-outline-variant hover:border-outline flex h-full flex-col justify-between rounded-sm border p-3 sm:p-4 md:p-5 transition-colors duration-150"
          >
            <div>
              <div
                className={`text-on-surface font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight ${
                  m.numerica ? 'tabular-nums' : 'uppercase'
                }`}
              >
                {m.valor}
              </div>
              <div
                className={`mt-1 font-mono text-[8px] sm:text-[10px] md:text-[11px] font-semibold tracking-wider uppercase ${m.etiquetaColor}`}
              >
                {m.etiqueta}
              </div>
            </div>
            <p className="text-on-surface-variant border-outline-variant/80 mt-2 sm:mt-3 border-t pt-2 sm:pt-3 text-[10px] sm:text-xs leading-relaxed">
              {m.descripcion}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Pie de metadatos */}
      <div className="border-outline-variant/60 mt-8 sm:mt-10 md:mt-12 flex flex-col items-center justify-center gap-2 border-t pt-4 sm:pt-6 text-center sm:flex-row sm:text-left sm:justify-between">
        <div className="text-on-surface-placeholder font-mono text-[8px] sm:text-[9px] md:text-[11px] tracking-wide line-clamp-2 sm:line-clamp-none">
          AI27 // INFRAESTRUCTURA // NACIONAL AUDITABLE
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <span className="bg-success inline-block h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full" />
          <span className="text-on-surface-variant font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-wider uppercase">
            TELEMETRÍA · 28MS
          </span>
        </div>
      </div>
    </>
  );
}
