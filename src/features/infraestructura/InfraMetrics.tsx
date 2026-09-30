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
    valor: <Counter value={120} prefix="+" />,
    numerica: true,
    etiqueta: 'Puntos de control',
    etiquetaColor: 'text-primary',
    descripcion:
      'Ubicaciones estratégicas activas en carreteras federales y libramientos (datos ilustrativos de red).',
  },
  {
    valor: <Counter value={24000} suffix=" km" />,
    numerica: true,
    etiqueta: 'Corredores monitoreados',
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
      <Stagger className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 md:grid-cols-4">
        {metricas.map((m) => (
          <StaggerItem
            key={m.etiqueta}
            className="bg-surface border-outline-variant hover:border-outline flex h-full flex-col justify-between rounded-sm border p-5 transition-colors duration-150"
          >
            <div>
              <div
                className={`text-on-surface font-mono text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
                  m.numerica ? 'tabular-nums' : 'uppercase'
                }`}
              >
                {m.valor}
              </div>
              <div
                className={`mt-1 font-mono text-[11px] font-semibold tracking-wider uppercase ${m.etiquetaColor}`}
              >
                {m.etiqueta}
              </div>
            </div>
            <p className="text-on-surface-variant border-outline-variant/80 mt-3 border-t pt-3 text-xs leading-relaxed">
              {m.descripcion}
            </p>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Pie de metadatos */}
      <div className="border-outline-variant/60 mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center sm:flex-row sm:text-left">
        <div className="text-on-surface-placeholder font-mono text-[11px] tracking-wide">
          AI27 // ARQUITECTURA DE INFRAESTRUCTURA Y DESPLIEGUE TÁCTICO // PROTOCOLO NACIONAL
          AUDITABLE
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-success inline-block h-1.5 w-1.5 rounded-full" />
          <span className="text-on-surface-variant font-mono text-[10px] tracking-wider uppercase">
            TELEMETRÍA EN LÍNEA · LATENCIA RED: 28MS
          </span>
        </div>
      </div>
    </>
  );
}
