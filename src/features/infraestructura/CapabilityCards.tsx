/*
 * Columna derecha de la seccion Infraestructura: cuatro capacidades
 * fundamentales de AI27. Portada del mock Nocturne. Iconos de lucide-react
 * mapeados desde los Material Symbols del mock.
 */
import { Antenna, BadgeCheck, Route, Shield } from 'lucide-react';
import type { ReactNode } from 'react';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Capacidad = {
  icono: ReactNode;
  iconoColor: string;
  titulo: string;
  descripcion: string;
  etiqueta: string;
  etiquetaColor: string;
  codigo: string;
};

const capacidades: Capacidad[] = [
  {
    icono: <Route className="h-5 w-5" />,
    iconoColor: 'text-primary',
    titulo: 'Corredores de seguridad',
    descripcion:
      'Rutas troncales monitoreadas permanentemente con protocolos de control preventivo y cobertura reactiva en los principales ejes logísticos de México.',
    etiqueta: 'CUSTODIA TRONCAL ACTIVA',
    etiquetaColor: 'text-primary',
    codigo: 'TR-EJE-01',
  },
  {
    icono: <BadgeCheck className="h-5 w-5" />,
    iconoColor: 'text-success',
    titulo: 'Puntos de control y verificación',
    descripcion:
      'Puntos estratégicos para la validación física, inspección de sellos e integridad operativa en zonas críticas y libramientos.',
    etiqueta: 'CHECKPOINTS GEORREFERENCIADOS',
    etiquetaColor: 'text-success',
    codigo: 'SEC-GEO-VAL',
  },
  {
    icono: <Antenna className="h-5 w-5" />,
    iconoColor: 'text-primary',
    titulo: 'Coordinación con autoridades',
    descripcion: 'Enlace operativo en tiempo real con todos los niveles de gobierno.',
    etiqueta: 'ENLACE GUBERNAMENTAL DIRECTO',
    etiquetaColor: 'text-primary',
    codigo: 'ENLACE-FED-GN',
  },
  {
    icono: <Shield className="h-5 w-5" />,
    iconoColor: 'text-success',
    titulo: 'Centro de monitoreo y grupo de reacción propios',
    descripcion:
      'Instalaciones de comando redundantes operando 24/7 con cuadrillas terrestres de reacción táctica preparadas para respuesta inmediata en tramo.',
    etiqueta: 'DISPONIBILIDAD OPERATIVA 24/7',
    etiquetaColor: 'text-success',
    codigo: 'RED-COMANDO',
  },
];

export function CapabilityCards() {
  return (
    <Stagger className="flex flex-col justify-between gap-2.5 sm:gap-3.5 md:col-span-2 lg:col-span-5">
      {capacidades.map((cap) => (
        <StaggerItem
          key={cap.titulo}
          className="group bg-surface-recessed hover:bg-surface border-outline-variant hover:border-outline flex flex-col justify-between rounded-sm border p-3 transition-colors duration-200 sm:p-4"
        >
          <div className="flex items-start gap-2.5 sm:gap-3.5">
            <div
              className={`bg-surface group-hover:bg-surface-bright border-outline-variant flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border transition-colors sm:h-9 sm:w-9 ${cap.iconoColor}`}
            >
              {cap.icono}
            </div>
            <div className="min-w-0">
              <h3 className="text-on-surface line-clamp-2 text-sm font-semibold tracking-tight sm:text-base">
                {cap.titulo}
              </h3>
              <p className="text-on-surface-variant mt-1 line-clamp-3 text-[12px] leading-relaxed sm:mt-1.5 sm:text-[13px]">
                {cap.descripcion}
              </p>
            </div>
          </div>
          <div className="border-outline-variant/70 mt-2.5 flex items-center justify-between gap-2 border-t pt-2 sm:mt-3.5">
            <span
              className={`truncate font-mono text-[8px] font-semibold tracking-wider uppercase sm:text-[10px] ${cap.etiquetaColor}`}
            >
              {cap.etiqueta}
            </span>
            <span className="text-on-surface-placeholder flex-shrink-0 font-mono text-[8px] sm:text-[10px]">
              {cap.codigo}
            </span>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
