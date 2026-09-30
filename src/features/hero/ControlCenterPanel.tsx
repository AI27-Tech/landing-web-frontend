/*
 * Columna derecha del Hero: panel "Centro de Control AI27". Portado del mock
 * Nocturne. Cuatro bloques: cabecera con reloj en vivo, visualizador de ruta,
 * rejilla de KPIs y registro de incidentes.
 *
 * Los iconos son lucide-react (el unico paquete de iconos de los repos AI27).
 * El mock usa Material Symbols, que es un artefacto del generador, no una
 * decision de codigo; aqui se mapean a su equivalente de lucide.
 */
import {
  BadgeCheck,
  Gauge,
  RadioTower,
  Route,
  Satellite,
  ShieldCheck,
  Terminal,
  Truck,
} from 'lucide-react';
import { Counter } from '@/components/motion/Counter';
import { useSystemClock } from '@/features/hero/useSystemClock';

/* El visualizador de ruta: CDMX -> unidad en transito -> QRO -> MTY. */
function RouteVisualizer() {
  return (
    <div className="bg-surface-recessed border-outline-variant relative mt-4 rounded border p-3.5">
      <div className="text-on-surface-variant mb-2 flex items-center justify-between text-[11px] font-semibold uppercase">
        <span className="text-on-surface flex items-center gap-1.5">
          <Route className="text-primary h-3.5 w-3.5" />
          Corredor Estratégico Bajío - Norte
        </span>
        <span className="text-success border-success/30 bg-success-container rounded border px-2 py-0.5 text-[10px]">
          Riesgo: 0.02% (Bajo)
        </span>
      </div>

      {/* Esquema vectorial de la ruta */}
      <div className="border-outline-variant/60 bg-background/60 relative my-2 flex h-28 w-full items-center justify-between overflow-hidden rounded border px-3 sm:px-6">
        <div className="bg-radar-grid pointer-events-none absolute inset-0 opacity-20" />
        {/* Lineas de la ruta */}
        <div className="bg-outline-variant absolute top-1/2 right-10 left-10 h-0.5 -translate-y-1/2" />
        <div className="absolute top-1/2 left-10 h-0.5 w-2/3 -translate-y-1/2 bg-gradient-to-r from-[#6ee7b7] via-[#7c9df0] to-[#7c9df0]" />

        {/* Nodo 1: CDMX */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-surface border-primary flex h-3.5 w-3.5 items-center justify-center rounded-full border-2">
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
          </div>
          <span className="text-on-surface mt-1.5 text-[10px] font-bold">CDMX</span>
          <span className="text-on-surface-variant text-[9px] tabular-nums">DEP 04:10</span>
        </div>

        {/* Unidad de telemetria en transito */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">
            <span className="animate-ping-slow bg-success absolute inline-flex h-full w-full rounded-full opacity-60" />
            <div className="bg-success text-on-primary flex h-4 w-4 items-center justify-center rounded-full shadow-lg">
              <Truck className="h-2.5 w-2.5" />
            </div>
          </div>
          <span className="text-success mt-1 text-[10px] font-semibold tabular-nums">UNIT-849</span>
          <span className="text-on-surface-variant text-[9px] tabular-nums">82 km/h</span>
        </div>

        {/* Nodo 2: QRO */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-surface border-outline-variant flex h-3 w-3 items-center justify-center rounded-full border">
            <div className="bg-on-surface-variant h-1 w-1 rounded-full" />
          </div>
          <span className="text-on-surface-variant mt-1.5 text-[10px]">QRO</span>
          <span className="text-on-surface-variant text-[9px]">SAFE OK</span>
        </div>

        {/* Nodo 3: MTY */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="bg-surface border-outline flex h-3.5 w-3.5 items-center justify-center rounded-full border-2">
            <div className="bg-outline h-1.5 w-1.5 rounded-full" />
          </div>
          <span className="text-on-surface mt-1.5 text-[10px] font-bold">MTY Hub</span>
          <span className="text-on-surface-variant text-[9px] tabular-nums">ETA 14:30</span>
        </div>
      </div>

      {/* Detalles de micro-telemetria */}
      <div className="text-on-surface-variant flex items-center justify-between px-1 pt-1 text-[11px]">
        <span className="flex items-center gap-1">
          <Satellite className="text-primary h-3 w-3" />
          Constelación LEO 8/8
        </span>
        <span className="tabular-nums">Protocolo AES-256 enlazado</span>
      </div>
    </div>
  );
}

type Kpi = {
  etiqueta: string;
  nota: string;
  notaColor: string;
  valor: React.ReactNode;
  valorColor: string;
  icono: React.ReactNode;
};

const kpis: Kpi[] = [
  {
    etiqueta: 'Unidades en Tránsito',
    nota: '+12% vs ayer',
    notaColor: 'text-success',
    valor: <Counter value={4892} />,
    valorColor: 'text-on-surface',
    icono: <RadioTower className="text-primary h-4 w-4" />,
  },
  {
    etiqueta: 'Prevención Predictiva',
    nota: 'Neuronal',
    notaColor: 'text-primary',
    valor: <Counter value={99.84} decimals={2} suffix="%" />,
    valorColor: 'text-success',
    icono: <BadgeCheck className="text-success h-4 w-4" />,
  },
  {
    etiqueta: 'Alertas Neutralizadas',
    nota: 'Turno Activo',
    notaColor: 'text-warning',
    valor: <Counter value={342} />,
    valorColor: 'text-on-surface',
    icono: <span className="text-on-surface-variant text-[11px]">hoy</span>,
  },
  {
    etiqueta: 'Latencia Satelital',
    nota: 'Óptima',
    notaColor: 'text-success',
    valor: <Counter value={18} suffix="ms" />,
    valorColor: 'text-primary',
    icono: <Gauge className="text-on-surface-variant h-4 w-4" />,
  },
];

function KpiGrid() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {kpis.map(({ etiqueta, nota, notaColor, valor, valorColor, icono }) => (
        <div
          key={etiqueta}
          className="bg-surface-recessed border-outline-variant hover:border-outline rounded border p-3 transition-colors"
        >
          <div className="flex items-center justify-between">
            <span className="text-on-surface-variant text-[10px] font-semibold tracking-wider uppercase">
              {etiqueta}
            </span>
            <span className={`text-[10px] font-semibold tabular-nums ${notaColor}`}>{nota}</span>
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className={`text-2xl font-bold tracking-tight tabular-nums ${valorColor}`}>
              {valor}
            </span>
            {icono}
          </div>
        </div>
      ))}
    </div>
  );
}

type Incidente = { marca: string; marcaColor: string; texto: string; hora: string };

const incidentes: Incidente[] = [
  {
    marca: 'OK',
    marcaColor: 'text-success',
    texto: 'Check-in satelital confirmado KM 148 Autopista 57D',
    hora: '21:41:58',
  },
  {
    marca: 'IA',
    marcaColor: 'text-primary',
    texto: 'Desvío predictivo ejecutado por congestión de riesgo',
    hora: '21:40:12',
  },
];

function IncidentLog() {
  return (
    <div className="border-outline-variant mt-4 border-t pt-3">
      <div className="text-on-surface-variant mb-2 flex items-center justify-between text-[11px] font-semibold uppercase">
        <span className="flex items-center gap-1.5">
          <Terminal className="text-primary h-3 w-3" />
          Registro Automatizado de Incidentes
        </span>
        <span className="text-success text-[10px] tabular-nums">Sincronizado</span>
      </div>
      <div className="space-y-1.5 text-[11px]">
        {incidentes.map(({ marca, marcaColor, texto, hora }) => (
          <div
            key={hora}
            className="bg-surface-recessed/80 border-outline-variant/50 flex items-center justify-between rounded border px-2 py-1"
          >
            <div className="flex items-center gap-2">
              <span className={`font-semibold ${marcaColor}`}>{marca}</span>
              <span className="text-on-surface-subtle">{texto}</span>
            </div>
            <span className="text-on-surface-variant text-[10px] tabular-nums">{hora}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ControlCenterPanel() {
  const hora = useSystemClock();

  return (
    <div>
      <div className="bg-surface border-outline-variant hover:border-outline relative overflow-hidden rounded border p-5 shadow-2xl transition-all duration-200">
        {/* Barrido de radar atmosferico */}
        <div className="animate-radar-line pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#7c9df0]/10 to-transparent" />

        {/* Cabecera del panel */}
        <div className="border-outline-variant flex flex-wrap items-center justify-between gap-2 border-b pb-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="text-primary h-5 w-5" />
            <div>
              <h2 className="text-on-surface text-[13px] font-semibold tracking-wider uppercase">
                Centro de Control AI27
              </h2>
              <p className="text-on-surface-variant text-[11px]">
                Telemetría en Vivo &amp; Predicción Neural
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-success bg-surface-recessed border-outline-variant inline-flex items-center gap-1.5 rounded border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase">
              <span className="bg-success h-1.5 w-1.5 animate-pulse rounded-full" />
              Sistema Activo
            </span>
            <span className="text-on-surface-variant bg-surface-recessed border-outline-variant rounded border px-2 py-0.5 text-[11px] tabular-nums">
              {hora}
            </span>
          </div>
        </div>

        <RouteVisualizer />
        <KpiGrid />
        <IncidentLog />
      </div>
    </div>
  );
}
