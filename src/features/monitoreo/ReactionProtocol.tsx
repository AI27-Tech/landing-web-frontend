/*
 * Columna derecha: protocolo del grupo de reaccion como stepper vertical de
 * cuatro pasos, mas un banner de cobertura. Portado del mock Nocturne.
 *
 * El primer y ultimo paso llevan borde de color (periwinkle / esmeralda), el
 * tercero warning; el segundo es neutro y solo se ilumina al hover. Cada paso
 * tiene un badge con su calificador.
 */
import { BadgeCheck, ShieldCheck } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Paso = {
  numero: string;
  titulo: string;
  badge: string;
  descripcion: string;
  numeroClase: string;
  badgeClase: string;
};

const pasos: Paso[] = [
  {
    numero: '01',
    titulo: 'Detección de evento',
    badge: '< 15 seg',
    descripcion:
      'Detección inmediata en cabina C4 mediante algoritmos predictivos y sensores de telemetría a bordo con confirmación satelital.',
    numeroClase: 'border-primary text-primary shadow-md shadow-primary/10',
    badgeClase: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    numero: '02',
    titulo: 'Alerta y evaluación táctica',
    badge: 'Análisis C4',
    descripcion:
      'Calificación del nivel de riesgo en segundos por analistas especializados y verificación de integridad de cabina mediante protocolo seguro.',
    numeroClase: 'border-outline-variant text-on-surface group-hover:border-primary',
    badgeClase: 'bg-surface-recessed text-on-surface-variant border-outline-variant',
  },
  {
    numero: '03',
    titulo: 'Despacho de reacción en campo',
    badge: 'Despliegue',
    descripcion:
      'Activación y despliegue inmediato de unidades de escolta y patrullas de custodia táctica más cercanas al punto de incidencia.',
    numeroClase: 'border-warning/60 text-warning shadow-md shadow-warning/10',
    badgeClase: 'bg-warning/10 text-warning border-warning/20',
  },
  {
    numero: '04',
    titulo: 'Coordinación y neutralización',
    badge: 'Cierre',
    descripcion:
      'Enlace directo con Guardia Nacional, corporaciones estatales y resolución del evento con aseguramiento completo de la carga y el conductor.',
    numeroClase: 'border-success text-success shadow-md shadow-success/10',
    badgeClase: 'bg-success/10 text-success border-success/20',
  },
];

export function ReactionProtocol() {
  return (
    <div className="space-y-3 sm:space-y-4 lg:col-span-5">
      <div className="bg-surface border-outline-variant relative overflow-hidden rounded-lg border p-4 sm:p-6 shadow-xl shadow-black/40">
        <div className="border-outline-variant flex flex-col items-start justify-between gap-3 border-b pb-3 sm:flex-row sm:items-center sm:pb-5 sm:gap-0">
          <div>
            <span className="text-primary block font-mono text-[9px] sm:text-[11px] tracking-wider uppercase">
              Protocolo Operativo
            </span>
            <h3 className="text-on-surface text-lg sm:text-xl font-bold">Grupo de Reacción</h3>
          </div>
          <div className="bg-surface-recessed border-outline-variant text-primary flex h-8 w-8 items-center justify-center rounded border flex-shrink-0">
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>

        {/* Stepper. La linea conectora no lleva variants, asi que el Stagger
            solo escalona los pasos; la linea aparece de una vez. */}
        <Stagger className="relative mt-4 sm:mt-6 space-y-6 sm:space-y-8" each={0.12}>
          {/* Linea vertical conectora */}
          <div className="absolute top-3 bottom-3 left-4 w-px bg-gradient-to-b from-[#7c9df0] via-[#2d3748] to-[#6ee7b7]" />

          {pasos.map((paso) => (
            <StaggerItem key={paso.numero} className="group relative flex items-start gap-3 sm:gap-4">
              <div
                className={`bg-surface-recessed relative z-10 flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded border font-mono text-xs font-bold transition-transform ${paso.numeroClase}`}
              >
                {paso.numero}
              </div>
              <div className="space-y-0.5 sm:space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-on-surface text-xs sm:text-sm font-semibold truncate">{paso.titulo}</h4>
                  <span
                    className={`rounded border px-1 py-0.5 font-mono text-[8px] sm:text-[10px] flex-shrink-0 ${paso.badgeClase}`}
                  >
                    {paso.badge}
                  </span>
                </div>
                <p className="text-on-surface-variant text-[11px] sm:text-xs leading-relaxed line-clamp-3">
                  {paso.descripcion}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Banner de cobertura */}
        <div className="bg-surface-recessed border-outline-variant mt-6 sm:mt-8 flex flex-col items-start justify-between gap-3 rounded border p-3 sm:flex-row sm:items-center sm:p-3.5 text-xs">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <BadgeCheck className="text-primary h-4 w-4 sm:h-[18px] sm:w-[18px] flex-shrink-0" />
            <span className="text-on-surface font-medium text-[11px] sm:text-xs">Ejes Carreteros Blindados</span>
          </div>
          <span className="text-success bg-success/10 border-success/20 rounded border px-1.5 py-0.5 font-mono text-[9px] sm:text-[11px] flex-shrink-0">
            99.2%
          </span>
        </div>
      </div>
    </div>
  );
}
