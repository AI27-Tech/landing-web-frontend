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
      <Stagger className="grid grid-cols-1 gap-4 pt-3 sm:gap-6 sm:pt-4 md:grid-cols-3">
        {capacidades.map((cap) => (
          <StaggerItem
            key={cap.titulo}
            className="group bg-surface border-outline-variant hover:border-outline hover:bg-surface-bright/80 flex h-full flex-col space-y-3 rounded-lg border p-4 transition-colors duration-200 sm:space-y-4 sm:p-6"
          >
            <div className="bg-surface-recessed border-outline-variant text-primary group-hover:border-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border transition-colors sm:h-12 sm:w-12">
              {cap.icono}
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-on-surface group-hover:text-primary line-clamp-2 text-base font-bold tracking-tight transition-colors sm:text-lg">
                {cap.titulo}
              </h3>
              <p className="text-on-surface-variant line-clamp-4 text-xs leading-relaxed sm:text-sm">
                {cap.descripcion}
              </p>
            </div>
            <div
              className={`flex items-center gap-1.5 pt-1 font-mono text-[9px] sm:gap-2 sm:pt-2 sm:text-[11px] ${cap.pieColor}`}
            >
              {cap.pieIcono}
              <span className="truncate">{cap.pie}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Micro-footer / barra de metadatos */}
      <div className="border-outline-variant text-on-surface-variant flex flex-col items-start justify-between gap-3 border-t pt-4 font-mono text-[9px] sm:flex-row sm:items-center sm:pt-6 sm:text-[11px]">
        <div className="flex items-center gap-2">
          <span className="bg-primary h-1.5 w-1.5 flex-shrink-0 rounded sm:h-2 sm:w-2" />
          <span className="sm:truncate-none truncate tracking-wide">
            AI27 // PROTOCOLO // SEGURIDAD
          </span>
        </div>
        <div className="bg-surface-recessed border-outline-variant text-on-surface flex flex-col items-start gap-1 rounded border px-2 py-1 sm:flex-row sm:items-center sm:gap-2 sm:px-3">
          <span className="text-on-surface-variant text-[8px] sm:text-[11px]">RESPUESTA:</span>
          <span className="text-success text-[10px] font-bold sm:text-[11px]">&lt; 4 MIN</span>
        </div>
      </div>
    </>
  );
}
