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
      'Supervisión ininterrumpida desde CM con unidades de custodia y reacción en campo.',
  },
];

export function InfraMetrics() {
  return (
    <>
      <Stagger className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3 md:mt-10 md:grid-cols-4 md:gap-4">
        {metricas.map((m) => (
          <StaggerItem
            key={m.etiqueta}
            className="bg-surface border-outline-variant hover:border-outline flex h-full flex-col justify-between rounded-sm border p-3 transition-colors duration-150 sm:p-4 md:p-5"
          >
            <div>
              <div
                className={`text-on-surface font-mono text-lg font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl ${
                  m.numerica ? 'tabular-nums' : 'uppercase'
                }`}
              >
                {m.valor}
              </div>
              <div
                className={`mt-1 font-mono text-[8px] font-semibold tracking-wider uppercase sm:text-[10px] md:text-[11px] ${m.etiquetaColor}`}
              >
                {m.etiqueta}
              </div>
            </div>
            <p className="text-on-surface-variant border-outline-variant/80 mt-2 border-t pt-2 text-[10px] leading-relaxed sm:mt-3 sm:pt-3 sm:text-xs">
              {m.descripcion}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Pie de metadatos */}
      <div className="border-outline-variant/60 mt-8 flex flex-col items-center justify-center gap-2 border-t pt-4 text-center sm:mt-10 sm:flex-row sm:justify-between sm:pt-6 sm:text-left md:mt-12">
        <div className="text-on-surface-placeholder line-clamp-2 font-mono text-[8px] tracking-wide sm:line-clamp-none sm:text-[9px] md:text-[11px]">
          AI27 // INFRAESTRUCTURA // NACIONAL AUDITABLE
        </div>
        <div className="flex flex-shrink-0 items-center space-x-2">
          <span className="bg-success inline-block h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5" />
          <span className="text-on-surface-variant font-mono text-[8px] tracking-wider uppercase sm:text-[9px] md:text-[10px]">
            MONITOREO ACTIVO
          </span>
        </div>
      </div>
    </>
  );
}
