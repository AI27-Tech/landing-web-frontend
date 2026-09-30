/*
 * Columna derecha de la seccion Datos e IA: mockup del "Client Intelligence
 * Hub". Portado del mock Nocturne: barra de consola, tres KPIs, grafico SVG de
 * tendencia de riesgo con tooltip anclado, y lista de viajes bajo vigilancia.
 *
 * Es un mockup estatico de UI (no consume datos): las cifras son ilustrativas.
 * El SVG usa hex directos por la misma razon que los demas graficos (un
 * atributo `stroke`/`fill` no puede leer una utilidad de Tailwind).
 */
import {
  Calendar,
  ChartColumn,
  Check,
  ChevronDown,
  CircleCheck,
  Download,
  Gauge,
  Route,
  Shield,
  Terminal,
  TrendingUp,
  Truck,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Counter } from '@/components/motion/Counter';

type Kpi = {
  etiqueta: string;
  icono: ReactNode;
  valor: ReactNode;
  valorColor: string;
  pie: ReactNode;
};

const kpis: Kpi[] = [
  {
    etiqueta: 'Total Viajes',
    icono: <Truck className="text-primary h-4 w-4" />,
    valor: <Counter value={14820} />,
    valorColor: 'text-on-surface',
    pie: (
      <span className="text-success flex items-center font-mono text-[11px]">
        <TrendingUp className="mr-0.5 h-3 w-3" />
        +8.4% vs mes anterior
      </span>
    ),
  },
  {
    etiqueta: 'Incidentes Prevenidos',
    icono: <Shield className="text-success h-4 w-4" />,
    valor: <Counter value={48} />,
    valorColor: 'text-success',
    pie: (
      <span className="text-success flex items-center font-mono text-[11px]">
        <CircleCheck className="mr-0.5 h-3 w-3" />
        100% neutralizados con IA
      </span>
    ),
  },
  {
    etiqueta: 'Índice de Riesgo',
    icono: <Gauge className="text-primary h-4 w-4" />,
    valor: (
      <>
        0.04% <span className="text-on-surface-variant text-xs font-normal">Mínimo</span>
      </>
    ),
    valorColor: 'text-on-surface',
    pie: (
      <span className="text-on-surface-variant flex items-center font-mono text-[11px]">
        <span className="text-primary mr-1">Score:</span>
        <span className="text-on-surface font-semibold tabular-nums">99.96 / 100</span>
      </span>
    ),
  },
];

type Viaje = {
  id: string;
  ruta: string;
  estado: ReactNode;
  extra?: ReactNode;
};

const viajes: Viaje[] = [
  {
    id: 'MTY-092',
    ruta: 'Corredor Bajío-Norte',
    estado: (
      <span className="bg-success/10 text-success border-success/30 inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[11px]">
        <span className="bg-success h-1.5 w-1.5 rounded-full" />
        En ruta segura
      </span>
    ),
    extra: <span className="text-on-surface-variant font-mono text-xs">ETA 14:30</span>,
  },
  {
    id: 'CDMX-418',
    ruta: 'Autopista 57D',
    estado: (
      <span className="bg-primary/10 text-primary border-primary/30 inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[11px]">
        <Route className="h-3 w-3" />
        Riesgo mitigado por desvío preventivo
      </span>
    ),
  },
  {
    id: 'GDL-105',
    ruta: 'Corredor Occidente',
    estado: (
      <span className="bg-surface text-success border-outline-variant inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[11px]">
        <Check className="h-3 w-3" />
        Telemetría nominal 100%
      </span>
    ),
  },
];

export function AnalyticsDashboard() {
  return (
    <div>
      <div className="bg-surface border-outline-variant flex flex-col overflow-hidden rounded-lg border shadow-2xl">
        {/* Barra de consola */}
        <div className="bg-surface-recessed border-outline-variant flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <div className="bg-outline-variant h-2.5 w-2.5 rounded-full" />
              <div className="bg-outline-variant h-2.5 w-2.5 rounded-full" />
              <div className="bg-outline-variant h-2.5 w-2.5 rounded-full" />
            </div>
            <div className="bg-outline-variant mx-1 h-4 w-px" />
            <span className="text-on-surface flex items-center gap-1.5 font-mono text-xs font-semibold tracking-wide">
              <Terminal className="text-primary h-[15px] w-[15px]" />
              AI27 Client Intelligence Hub
            </span>
            <span className="text-on-surface-variant hidden font-mono text-[10px] sm:inline">
              v4.8.2-prod
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="bg-surface border-outline-variant text-on-surface inline-flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-xs">
              <Calendar className="text-on-surface-variant h-[13px] w-[13px]" />
              <span>Últimos 30 días</span>
              <ChevronDown className="text-on-surface-variant h-3 w-3" />
            </div>
            <div className="bg-surface-recessed border-outline-variant text-success inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[11px]">
              <span className="bg-success h-1.5 w-1.5 animate-ping rounded-full" />
              <span className="hidden sm:inline">Sincronizado LEO-Sat</span>
            </div>
            <button
              type="button"
              className="bg-surface-bright hover:bg-outline-variant border-outline text-on-surface inline-flex items-center gap-1 rounded border px-2.5 py-1 font-medium transition-colors"
            >
              <Download className="h-[13px] w-[13px]" />
              <span className="hidden text-xs sm:inline">CSV / PDF</span>
            </button>
          </div>
        </div>

        {/* Contenido */}
        <div className="space-y-5 p-5">
          {/* KPIs */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.etiqueta}
                className="bg-surface-recessed border-outline-variant flex flex-col justify-between rounded border p-3.5"
              >
                <div className="text-on-surface-variant mb-2 flex items-center justify-between font-mono text-xs tracking-wider uppercase">
                  <span>{kpi.etiqueta}</span>
                  {kpi.icono}
                </div>
                <div className={`text-2xl font-bold tabular-nums ${kpi.valorColor}`}>
                  {kpi.valor}
                </div>
                <div className="mt-2">{kpi.pie}</div>
              </div>
            ))}
          </div>

          {/* Grafico de tendencia */}
          <div className="bg-surface-recessed border-outline-variant rounded border p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-on-surface flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                  <ChartColumn className="text-primary h-3.5 w-3.5" />
                  Tendencia de Riesgo &amp; Horas Críticas
                </span>
              </div>
              <div className="text-on-surface-variant flex items-center gap-4 font-mono text-[11px]">
                <span className="flex items-center gap-1.5">
                  <span className="bg-primary h-1 w-2.5 rounded" /> Predicción IA
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="bg-success h-1 w-2.5 rounded" /> Corredores Seguros
                </span>
              </div>
            </div>

            {/* Visualizacion SVG */}
            <div className="bg-background border-outline-variant/70 relative h-44 w-full overflow-hidden rounded border p-2">
              {/* Gridlines de fondo */}
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-3 opacity-20">
                <div className="border-outline-variant w-full border-b" />
                <div className="border-outline-variant w-full border-b" />
                <div className="border-outline-variant w-full border-b" />
                <div className="border-outline-variant w-full border-b" />
              </div>
              <svg
                className="h-full w-full overflow-visible"
                preserveAspectRatio="none"
                viewBox="0 0 540 140"
              >
                <defs>
                  <linearGradient id="datosAreaGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7c9df0" stopOpacity="0.32" />
                    <stop offset="90%" stopColor="#7c9df0" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="datosLineGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#7c9df0" />
                    <stop offset="50%" stopColor="#6ee7b7" />
                    <stop offset="100%" stopColor="#7c9df0" />
                  </linearGradient>
                </defs>
                {/* Area rellena */}
                <path
                  d="M 0,110 Q 70,120 135,70 T 270,85 T 405,30 T 540,65 L 540,140 L 0,140 Z"
                  fill="url(#datosAreaGradient)"
                />
                {/* Curva primaria */}
                <path
                  d="M 0,110 Q 70,120 135,70 T 270,85 T 405,30 T 540,65"
                  fill="none"
                  stroke="url(#datosLineGradient)"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                {/* Umbral critico */}
                <line
                  stroke="#fcd34d"
                  strokeDasharray="4 4"
                  strokeOpacity="0.5"
                  strokeWidth="1.2"
                  x1="0"
                  x2="540"
                  y1="45"
                  y2="45"
                />
                {/* Puntos de datos */}
                <circle cx="135" cy="70" fill="#1c222e" r="3.5" stroke="#7c9df0" strokeWidth="2" />
                <circle cx="270" cy="85" fill="#1c222e" r="3.5" stroke="#6ee7b7" strokeWidth="2" />
                {/* Hotspot de intervencion */}
                <g transform="translate(405, 30)">
                  <circle
                    className="animate-ping"
                    cx="0"
                    cy="0"
                    fill="#6ee7b7"
                    fillOpacity="0.4"
                    r="5"
                  />
                  <circle cx="0" cy="0" fill="#161b24" r="3.5" stroke="#6ee7b7" strokeWidth="2" />
                </g>
                <circle cx="540" cy="65" fill="#1c222e" r="3.5" stroke="#7c9df0" strokeWidth="2" />
              </svg>

              {/* Tooltip flotante */}
              <div className="bg-surface/95 border-success/40 pointer-events-none absolute top-3 left-[68%] -translate-x-1/2 rounded border px-2.5 py-1.5 shadow-lg backdrop-blur-sm">
                <div className="text-success flex items-center gap-1.5 font-mono text-[10px]">
                  <span className="bg-success h-1.5 w-1.5 rounded-full" />
                  <span className="font-semibold">03:40 AM · ALERTA EVITADA</span>
                </div>
                <div className="text-on-surface text-[11px]">Desvío dinámico 57D ejecutado</div>
              </div>

              {/* Ejes horarios */}
              <div className="text-on-surface-variant absolute right-0 bottom-1 left-0 flex justify-between px-3 font-mono text-[10px]">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>24:00</span>
              </div>
            </div>
          </div>

          {/* Lista de viajes */}
          <div className="space-y-2">
            <div className="text-on-surface-variant flex items-center justify-between px-1 font-mono text-xs">
              <span>UNIDADES EN TRÁNSITO BAJO VIGILANCIA IA (3 DE 1,420 ACTIVAS)</span>
              <span className="text-primary cursor-pointer hover:underline">Ver todas</span>
            </div>
            <div className="space-y-1.5">
              {viajes.map((viaje) => (
                <div
                  key={viaje.id}
                  className="bg-surface-recessed border-outline-variant hover:border-outline flex flex-wrap items-center justify-between gap-2 rounded border px-3 py-2.5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-on-surface bg-surface border-outline-variant rounded border px-2 py-0.5 font-mono text-xs font-bold">
                      {viaje.id}
                    </span>
                    <span className="text-on-surface-subtle text-xs font-medium">{viaje.ruta}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {viaje.estado}
                    {viaje.extra}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
