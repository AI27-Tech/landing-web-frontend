/*
 * Columna derecha: protocolo del grupo de reaccion como stepper vertical de
 * cuatro pasos, mas un banner de cobertura. Portado del mock Nocturne.
 *
 * El primer y ultimo paso llevan borde de color (periwinkle / esmeralda), el
 * tercero warning; el segundo es neutro y solo se ilumina al hover. Cada paso
 * tiene un badge con su calificador.
 */
import { BadgeCheck, ShieldCheck } from 'lucide-react';

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
    <div className="space-y-4 lg:col-span-5">
      <div className="bg-surface border-outline-variant relative overflow-hidden rounded-lg border p-6 shadow-xl shadow-black/40">
        <div className="border-outline-variant flex items-center justify-between border-b pb-5">
          <div>
            <span className="text-primary block font-mono text-[11px] tracking-wider uppercase">
              Protocolo Operativo
            </span>
            <h3 className="text-on-surface text-xl font-bold">Secuencia del Grupo de Reacción</h3>
          </div>
          <div className="bg-surface-recessed border-outline-variant text-primary flex h-9 w-9 items-center justify-center rounded border">
            <ShieldCheck className="h-5 w-5" />
          </div>
        </div>

        {/* Stepper */}
        <div className="relative mt-6 space-y-8">
          {/* Linea vertical conectora */}
          <div className="absolute top-4 bottom-4 left-4 w-px bg-gradient-to-b from-[#7c9df0] via-[#2d3748] to-[#6ee7b7]" />

          {pasos.map((paso) => (
            <div key={paso.numero} className="group relative flex items-start gap-4">
              <div
                className={`bg-surface-recessed relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded border font-mono text-xs font-bold transition-transform ${paso.numeroClase}`}
              >
                {paso.numero}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-on-surface text-sm font-semibold">{paso.titulo}</h4>
                  <span
                    className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${paso.badgeClase}`}
                  >
                    {paso.badge}
                  </span>
                </div>
                <p className="text-on-surface-variant text-xs leading-relaxed">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de cobertura */}
        <div className="bg-surface-recessed border-outline-variant mt-8 flex items-center justify-between rounded border p-3.5 text-xs">
          <div className="flex items-center gap-2.5">
            <BadgeCheck className="text-primary h-[18px] w-[18px]" />
            <span className="text-on-surface font-medium">Ejes Carreteros Blindados</span>
          </div>
          <span className="text-success bg-success/10 border-success/20 rounded border px-2 py-0.5 font-mono text-[11px]">
            99.2% EFECTIVIDAD
          </span>
        </div>
      </div>
    </div>
  );
}
