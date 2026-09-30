/*
 * Fila inferior de la seccion Datos e IA: cuatro metricas de valor de datos y
 * el pie de seccion con los sellos de seguridad. Portado del mock Nocturne.
 */
import { Lock } from 'lucide-react';
import type { ReactNode } from 'react';
import { Counter } from '@/components/motion/Counter';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Metrica = {
  etiqueta: string;
  etiquetaColor: string;
  valor: ReactNode;
  valorColor: string;
  hoverBorde: string;
  titulo: string;
  descripcion: string;
};

const metricas: Metrica[] = [
  {
    etiqueta: 'TELEMETRÍA ACUMULADA',
    etiquetaColor: 'text-primary',
    valor: <Counter value={1.2} decimals={1} suffix="M+" />,
    valorColor: 'text-on-surface',
    hoverBorde: 'hover:border-primary/50',
    titulo: 'Viajes Analizados',
    descripcion:
      'Millones de kilómetros de telemetría procesados para entrenar modelos predictivos con datos reales de carreteras.',
  },
  {
    etiqueta: 'EFECTIVIDAD COMPROBADA',
    etiquetaColor: 'text-success',
    valor: <Counter value={-92} suffix="%" />,
    valorColor: 'text-success',
    hoverBorde: 'hover:border-success/50',
    titulo: 'Reducción de Riesgo',
    descripcion:
      'Disminución demostrada en siniestros y desvíos no autorizados mediante alertas tempranas y acción anticipada.',
  },
  {
    etiqueta: 'PROFUNDIDAD DE ANÁLISIS',
    etiquetaColor: 'text-primary',
    valor: <Counter value={150} suffix="+" />,
    valorColor: 'text-on-surface',
    hoverBorde: 'hover:border-primary/50',
    titulo: 'Variables por Viaje',
    descripcion:
      'Análisis de velocidad, paradas no programadas, clima, hábitos de manejo y datos de integración directa C4/C5.',
  },
  {
    etiqueta: 'VELOCIDAD DE DISPERSIÓN',
    etiquetaColor: 'text-primary',
    valor: '< 2 seg',
    valorColor: 'text-on-surface',
    hoverBorde: 'hover:border-primary/50',
    titulo: 'Tiempo Real',
    descripcion:
      'Latencia ultra baja de procesamiento de eventos y distribución de datos hacia tu ERP/TMS corporativo.',
  },
];

export function DataMetrics() {
  return (
    <>
      <div className="mb-10">
        <div className="text-on-surface-variant mb-4 flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase">
          <span className="bg-primary h-0.5 w-2" />
          <span>Impacto operativo y volumen de procesamiento</span>
        </div>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((m) => (
            <StaggerItem
              key={m.titulo}
              className={`bg-surface border-outline-variant flex h-full flex-col justify-between rounded border p-5 transition-colors duration-150 ${m.hoverBorde}`}
            >
              <div>
                <div
                  className={`mb-2 font-mono text-[11px] tracking-wider uppercase ${m.etiquetaColor}`}
                >
                  {m.etiqueta}
                </div>
                <div
                  className={`mb-2 text-3xl font-extrabold tracking-tight tabular-nums ${m.valorColor}`}
                >
                  {m.valor}
                </div>
                <div className="text-on-surface mb-1 text-sm font-semibold">{m.titulo}</div>
              </div>
              <p className="text-on-surface-variant border-outline-variant/60 mt-2 border-t pt-3 text-xs leading-relaxed">
                {m.descripcion}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Pie de seccion */}
      <div className="border-outline-variant text-on-surface-variant flex flex-col items-center justify-between gap-3 border-t pt-6 font-mono text-[11px] sm:flex-row">
        <div className="flex items-center gap-2 tracking-wider">
          <span className="bg-primary/70 inline-block h-2 w-2 rounded-full" />
          <span>AI27 // CLIENT ANALYTICS &amp; PREDICTIVE AI ENGINE</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-on-surface bg-surface-recessed border-outline-variant rounded border px-2 py-0.5">
            ENCRIPTACIÓN AES-256
          </span>
          <span className="text-success flex items-center gap-1">
            <Lock className="h-3 w-3" />
            SOC2 TYPE II CERTIFIED
          </span>
        </div>
      </div>
    </>
  );
}
