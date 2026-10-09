/*
 * Fila inferior: tres tarjetas de capacidades institucionales (monitoreo
 * privado, grupo de reaccion, coordinacion con autoridades) y el micro-footer
 * de metadatos. Portado del mock Nocturne.
 */
import {
  ArrowRightLeft,
  BadgeCheck,
  Building2,
  CircleCheck,
  Monitor,
  ShieldAlert,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Capacidad = {
  icono: ReactNode;
  titulo: string;
  descripcion: string;
  pieIcono: ReactNode;
  pieColor: string;
  pie: string;
};

const capacidades: Capacidad[] = [
  {
    icono: <Monitor className="h-6 w-6" />,
    titulo: 'Monitoreo privado 24/7',
    descripcion:
      'Instalaciones blindadas de comando con operadores certificados en turnos continuos, monitoreo biométrico y redundancia satelital total sin interrupciones.',
    pieIcono: <CircleCheck className="h-3.5 w-3.5" />,
    pieColor: 'text-primary',
    pie: 'Certificación de analistas',
  },
  {
    icono: <ShieldAlert className="h-6 w-6" />,
    titulo: 'Grupo de reacción propio',
    descripcion:
      'Personal táctico de seguridad entrenado en disuasión y respuesta inmediata, distribuido estratégicamente en los principales ejes carreteros y zonas de alto flujo comercial.',
    pieIcono: <BadgeCheck className="h-3.5 w-3.5" />,
    pieColor: 'text-success',
    pie: 'Custodias y patrullas con enlace satelital',
  },
  {
    icono: <Building2 className="h-6 w-6" />,
    titulo: 'Coordinación con autoridades',
    descripcion:
      'Protocolos formales y canales de comunicación directa y encriptada con mandos de la Guardia Nacional, corporaciones estatales y fiscalías para intervención expedita.',
    pieIcono: <ArrowRightLeft className="h-3.5 w-3.5" />,
    pieColor: 'text-primary',
    pie: 'Convenios federados de auxilio en ruta',
  },
];

export function MonitoreoCapabilities() {
  return (
    <>
      <Stagger className="grid grid-cols-1 gap-4 sm:gap-6 pt-3 sm:pt-4 md:grid-cols-3">
        {capacidades.map((cap) => (
          <StaggerItem
            key={cap.titulo}
            className="group bg-surface border-outline-variant hover:border-outline hover:bg-surface-bright/80 flex h-full flex-col space-y-3 sm:space-y-4 rounded-lg border p-4 sm:p-6 transition-colors duration-200"
          >
            <div className="bg-surface-recessed border-outline-variant text-primary group-hover:border-primary flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded border transition-colors flex-shrink-0">
              {cap.icono}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-on-surface group-hover:text-primary text-base sm:text-lg font-bold tracking-tight transition-colors line-clamp-2">
                {cap.titulo}
              </h3>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed line-clamp-4">{cap.descripcion}</p>
            </div>
            <div className={`flex items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2 font-mono text-[9px] sm:text-[11px] ${cap.pieColor}`}>
              {cap.pieIcono}
              <span className="truncate">{cap.pie}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Micro-footer / barra de metadatos */}
      <div className="border-outline-variant text-on-surface-variant flex flex-col items-start justify-between gap-3 border-t pt-4 sm:pt-6 font-mono text-[9px] sm:text-[11px] sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="bg-primary h-1.5 w-1.5 sm:h-2 sm:w-2 rounded flex-shrink-0" />
          <span className="tracking-wide truncate sm:truncate-none">
            AI27 // PROTOCOLO // SEGURIDAD
          </span>
        </div>
        <div className="bg-surface-recessed border-outline-variant text-on-surface flex flex-col items-start gap-1 rounded border px-2 py-1 sm:px-3 sm:flex-row sm:items-center sm:gap-2">
          <span className="text-on-surface-variant text-[8px] sm:text-[11px]">RESPUESTA:</span>
          <span className="text-success font-bold text-[10px] sm:text-[11px]">&lt; 4 MIN</span>
        </div>
      </div>
    </>
  );
}
