/*
 * Linea cronologica de evolucion: cuatro fases de AI27, de la reaccion en campo
 * a la anticipacion algoritmica. La Fase IV esta destacada (esmeralda, badge
 * "IA activa" y nodo pulsante). Portada del mock Nocturne.
 *
 * La barra horizontal animada (timeline-stream) solo se muestra en desktop,
 * igual que el mock. Su animacion la apaga la guarda de reduced-motion.
 */
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

type Fase = {
  fase: string;
  categoria: string;
  titulo: string;
  descripcion: string;
  metaIzq: string;
  metaDer: string;
  destacada: boolean;
};

const fases: Fase[] = [
  {
    fase: 'Fase I',
    categoria: 'IA generativa & predictiva',
    titulo: 'Predicción e inteligencia de datos',
    descripcion: 'Anticipación de riesgos.',
    metaIzq: 'PREDICCIÓN ACTIVA',
    metaDer: '99.84% EFICACIA',
    destacada: true,
  },
  {
    fase: 'Fase II',
    categoria: 'Monitoreo',
    titulo: 'Centro de monitoreo y GPS 24/7',
    descripcion: 'Geocercas y seguimiento.',
    metaIzq: 'SEGUIMIENTO GPS',
    metaDer: 'NODO CENTRAL',
    destacada: false,
  },
  {
    fase: 'Fase III',
    categoria: 'Analítica',
    titulo: 'Datos y mapeo de riesgo',
    descripcion: 'Análisis de tramos críticos.',
    metaIzq: 'ANÁLISIS ESTADÍSTICO',
    metaDer: 'MAPEO NACIONAL',
    destacada: false,
  },
  {
    fase: 'Fase IV',
    categoria: 'Origen',
    titulo: 'Seguridad física y grupo de reacción',
    descripcion: 'Custodia y respuesta en ruta.',
    metaIzq: 'MODELO REACTIVO',
    metaDer: 'TERRESTRE',
    destacada: false,
  },
];

function FaseCard({ fase }: { fase: Fase }) {
  if (fase.destacada) {
    return (
      <div className="card-tactical bg-surface/90 border-success/50 ring-success/20 flex h-full min-h-[232px] flex-col justify-between rounded border p-5 shadow-[0_0_15px_-3px_rgba(110,231,183,0.15)] ring-1 backdrop-blur-sm">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-success font-mono text-xl font-bold tracking-tight">
                {fase.fase}
              </span>
              <span className="bg-success/10 text-success border-success/30 rounded-[3px] border px-1.5 py-0.5 font-mono text-[10px] font-semibold">
                IA ACTIVA
              </span>
            </div>
            <div className="bg-background border-success animate-tactical-pulse flex h-4 w-4 items-center justify-center rounded-full border-2">
              <span className="bg-success h-1.5 w-1.5 rounded-full" />
            </div>
          </div>
          <div className="text-success mb-1 font-mono text-[11px] tracking-wider uppercase">
            {fase.categoria}
          </div>
          <h4 className="text-on-surface mb-2 text-base font-semibold">{fase.titulo}</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">{fase.descripcion}</p>
        </div>
        <div className="border-outline-variant/60 mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px]">
          <span className="text-on-surface-variant/70">{fase.metaIzq}</span>
          <span className="text-success font-medium">{fase.metaDer}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card-tactical group bg-surface/80 border-outline-variant flex h-full min-h-[232px] flex-col justify-between rounded border p-5 backdrop-blur-sm">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-primary font-mono text-xl font-bold tracking-tight">
            {fase.fase}
          </span>
          <div className="bg-background border-primary flex h-4 w-4 items-center justify-center rounded-full border-2">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
          </div>
        </div>
        <div className="text-on-surface-variant mb-1 font-mono text-[11px] tracking-wider uppercase">
          {fase.categoria}
        </div>
        <h4 className="text-on-surface group-hover:text-primary mb-2 text-base font-semibold transition-colors">
          {fase.titulo}
        </h4>
        <p className="text-on-surface-variant text-sm leading-relaxed">{fase.descripcion}</p>
      </div>
      <div className="border-outline-variant/60 text-on-surface-variant/70 mt-4 flex items-center justify-between border-t pt-3 font-mono text-[11px]">
        <span>{fase.metaIzq}</span>
        <span className="text-on-surface">{fase.metaDer}</span>
      </div>
    </div>
  );
}

export function EvolutionTimeline() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div>
          <span className="text-primary font-mono text-xs tracking-wider uppercase">
            Línea cronológica de evolución
          </span>
          <h3 className="text-on-surface text-xl font-bold tracking-tight">
            De la reacción en campo a la anticipación algorítmica
          </h3>
        </div>
        <div className="text-on-surface-variant/70 flex items-center gap-2 font-mono text-xs">
          <span className="bg-success h-2 w-2 animate-pulse rounded-full" />
          <span>FLUJO VECTORIAL DE DATOS</span>
        </div>
      </div>

      <div className="relative pt-6 pb-4">
        {/* Barra de conexion horizontal iluminada (solo desktop) */}
        <div className="bg-outline-variant absolute top-[43px] right-10 left-10 hidden h-[2px] lg:block">
          <div className="timeline-stream h-full w-full opacity-90" />
        </div>

        <Stagger className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {fases.map((fase) => (
            <StaggerItem key={fase.fase} className="h-full">
              <FaseCard fase={fase} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </div>
  );
}
