/*
 * Columna izquierda de la seccion Datos e IA: cuatro capacidades clave de la
 * plataforma analitica, mas un micro-badge de integracion. Portada del mock
 * Nocturne. Iconos de lucide-react mapeados desde los Material Symbols.
 */
import { BadgeCheck, BrainCircuit, ChartColumn, RadioTower, Route } from 'lucide-react';
import type { ReactNode } from 'react';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Capacidad = {
  icono: ReactNode;
  iconoColor: string;
  hoverBorde: string;
  hoverTitulo: string;
  titulo: string;
  badge: string;
  badgeClase: string;
  descripcion: string;
};

const capacidades: Capacidad[] = [
  {
    icono: <RadioTower className="h-5 w-5" />,
    iconoColor: 'text-primary',
    hoverBorde: 'hover:border-primary/50',
    hoverTitulo: 'group-hover:text-primary',
    titulo: '1. Visibilidad total del viaje',
    badge: 'SEGUIMIENTO',
    badgeClase: 'text-on-surface-variant border-outline-variant',
    descripcion:
      'Seguimiento granular y estado operativo de cada embarque en tiempo real, monitoreo continuo y trazabilidad de extremo a extremo.',
  },
  {
    icono: <BrainCircuit className="h-5 w-5" />,
    iconoColor: 'text-success',
    hoverBorde: 'hover:border-success/50',
    hoverTitulo: 'group-hover:text-success',
    titulo: '2. Predicción de riesgos',
    badge: 'RED NEURONAL',
    badgeClase: 'text-success border-success/30',
    descripcion:
      'Modelos de IA generativa y redes neuronales que anticipan tramos críticos, anomalías de velocidad y ventanas horarias de vulnerabilidad antes de que ocurra el incidente.',
  },
  {
    icono: <ChartColumn className="h-5 w-5" />,
    iconoColor: 'text-primary',
    hoverBorde: 'hover:border-primary/50',
    hoverTitulo: 'group-hover:text-primary',
    titulo: '3. Analítica e informes ejecutivos',
    badge: 'BI AUDITABLE',
    badgeClase: 'text-on-surface-variant border-outline-variant',
    descripcion:
      'Tableros dinámicos de Business Intelligence y reportes auditables con KPIs de seguridad, SLA de transporte y desempeño logístico.',
  },
  {
    icono: <Route className="h-5 w-5" />,
    iconoColor: 'text-primary',
    hoverBorde: 'hover:border-primary/50',
    hoverTitulo: 'group-hover:text-primary',
    titulo: '4. Inteligencia accionable',
    badge: 'DECISION MOTOR',
    badgeClase: 'text-on-surface-variant border-outline-variant',
    descripcion:
      'Motor de alertas predictivas, cálculo dinámico de rutas seguras y recomendaciones automatizadas para directores de logística y seguridad patrimonial.',
  },
];

export function DataCapabilities() {
  return (
    <Stagger className="flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 lg:col-span-5">
      {capacidades.map((cap) => (
        <StaggerItem
          key={cap.titulo}
          className={`group bg-surface hover:bg-surface-bright border-outline-variant relative rounded-lg border p-3 sm:p-4 md:p-5 shadow-sm transition-colors duration-200 ${cap.hoverBorde}`}
        >
          <div className="flex items-start gap-2.5 sm:gap-3.5 md:gap-4">
            <div
              className={`bg-surface-recessed border-outline-variant flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded border transition-colors ${cap.iconoColor}`}
            >
              {cap.icono}
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 sm:mb-1.5 flex items-start justify-between gap-2 flex-wrap">
                <h3
                  className={`text-on-surface text-sm sm:text-base font-semibold tracking-tight transition-colors ${cap.hoverTitulo} line-clamp-2`}
                >
                  {cap.titulo}
                </h3>
                <span
                  className={`bg-surface-recessed shrink-0 rounded border px-1 py-0.5 font-mono text-[8px] sm:text-[10px] tracking-wider uppercase ${cap.badgeClase}`}
                >
                  {cap.badge}
                </span>
              </div>
              <p className="text-on-surface-variant text-[12px] sm:text-[13px] leading-snug sm:leading-normal font-normal line-clamp-3">
                {cap.descripcion}
              </p>
            </div>
          </div>
        </StaggerItem>
      ))}

      {/* Micro-badge de integracion (sin variants: aparece sin escalonar). */}
      <div className="bg-surface-recessed/80 border-outline-variant/60 text-on-surface-variant mt-1.5 flex flex-col items-start justify-between rounded border px-2.5 py-2 sm:px-3 sm:flex-row sm:items-center font-mono text-[9px] sm:text-[11px] gap-2 sm:gap-0">
        <span className="flex items-center gap-1.5 truncate">
          <BadgeCheck className="text-success h-3 w-3 sm:h-3.5 sm:w-3.5 flex-shrink-0" />
          <span className="truncate">API Ready (SAP/Oracle)</span>
        </span>
        <span className="text-primary flex-shrink-0">REST</span>
      </div>
    </Stagger>
  );
}
