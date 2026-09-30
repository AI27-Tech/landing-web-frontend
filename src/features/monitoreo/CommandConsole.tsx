/*
 * Consola de comando del centro de monitoreo (columna izquierda). Portada del
 * mock Nocturne: cabecera tecnica con reloj en vivo, tres KPIs de telemetria,
 * log de eventos en tiempo real, mini escaner de radar y barra de estado.
 *
 * El reloj y el barrido del radar: el reloj es dato (no lo apaga reduced-motion);
 * el barrido y los pulsos si los apaga la guarda global.
 */
import { Clock, Radar, Satellite, ScanEye, ScrollText, Truck, Waypoints } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLocalClock } from '@/features/monitoreo/useLocalClock';

type Kpi = {
  etiqueta: string;
  icono: ReactNode;
  valor: ReactNode;
  puntoColor: string;
  pieColor: string;
  pie: string;
};

const kpis: Kpi[] = [
  {
    etiqueta: 'Unidades Activas',
    icono: <Truck className="text-primary h-[15px] w-[15px]" />,
    valor: '4,892',
    puntoColor: 'bg-success',
    pieColor: 'text-success',
    pie: 'En ruta segura',
  },
  {
    etiqueta: 'Alertas Gestionadas',
    icono: <ScanEye className="text-warning h-[15px] w-[15px]" />,
    valor: (
      <>
        0 <span className="text-on-surface-variant text-xs font-normal">críticas</span>
      </>
    ),
    puntoColor: 'bg-warning',
    pieColor: 'text-warning',
    pie: '14 preventivas activas',
  },
  {
    etiqueta: 'Viajes Monitoreados',
    icono: <Waypoints className="text-primary h-[15px] w-[15px]" />,
    valor: '1,280+',
    puntoColor: 'bg-primary',
    pieColor: 'text-on-surface-variant',
    pie: 'Turno en curso',
  },
];

type Evento = {
  hora: string;
  horaColor: string;
  borde: string;
  ref: string;
  titulo: string;
  detalle: string;
};

const eventos: Evento[] = [
  {
    hora: '03:41:02 CST',
    horaColor: 'text-success',
    borde: 'border-success',
    ref: 'TR-8821',
    titulo: 'Autopista 57D Km 162 — Check-in biométrico confirmado.',
    detalle: 'Operador verificado sin anomalías',
  },
  {
    hora: '03:38:45 CST',
    horaColor: 'text-warning',
    borde: 'border-warning',
    ref: 'CV-1049',
    titulo: 'Corredor Bajío — Desvío predictivo preventivo ejecutado.',
    detalle: 'Ruta recalculada por congestión crítica',
  },
  {
    hora: '03:32:10 CST',
    horaColor: 'text-primary',
    borde: 'border-primary',
    ref: 'TF-4402',
    titulo: 'Macro-libramiento GDL — Escolta táctica enlazada.',
    detalle: 'Custodia visual activa en cuadrante 4',
  },
];

export function CommandConsole() {
  const hora = useLocalClock();

  return (
    <div className="space-y-4 lg:col-span-7">
      <div className="bg-surface border-outline-variant relative overflow-hidden rounded-lg border shadow-xl shadow-black/40">
        {/* Cabecera tecnica */}
        <div className="bg-surface-recessed border-outline-variant flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 font-mono text-[11px]">
          <div className="flex items-center gap-3">
            <div className="bg-success/10 border-success/30 text-success flex items-center gap-1.5 rounded border px-2 py-0.5">
              <span className="bg-success h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-semibold tracking-wider">SISTEMA ACTIVO</span>
            </div>
            <span className="text-outline">|</span>
            <span className="text-on-surface-variant flex items-center gap-1.5">
              <Clock className="text-primary h-3.5 w-3.5" />
              <span className="text-on-surface font-medium tabular-nums">{hora}</span>
              <span className="text-on-surface-variant">// CABINA PRINCIPAL</span>
            </span>
          </div>
          <div className="text-on-surface-variant flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-[10px] tracking-wider uppercase">Latencia:</span>
              <span className="text-success font-semibold tabular-nums">14ms</span>
            </div>
            <span className="text-outline">|</span>
            <div className="flex items-center gap-1">
              <Satellite className="text-primary h-[13px] w-[13px]" />
              <span className="text-on-surface tracking-tight">LEO-MESH 99.98%</span>
            </div>
          </div>
        </div>

        {/* Panel interior */}
        <div className="space-y-5 p-5">
          {/* KPIs */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.etiqueta}
                className="bg-surface-recessed border-outline-variant hover:border-outline rounded-lg border p-3 transition-colors"
              >
                <div className="text-on-surface-variant mb-1 flex items-center justify-between font-mono text-[11px] tracking-wider uppercase">
                  <span>{kpi.etiqueta}</span>
                  {kpi.icono}
                </div>
                <div className="text-on-surface text-xl font-bold tracking-tight tabular-nums">
                  {kpi.valor}
                </div>
                <div className={`mt-1 flex items-center gap-1.5 text-[11px] ${kpi.pieColor}`}>
                  <span className={`inline-block h-1.5 w-1.5 rounded-full ${kpi.puntoColor}`} />
                  <span>{kpi.pie}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Log de eventos + mini radar */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            {/* Log de eventos */}
            <div className="bg-surface-recessed border-outline-variant space-y-2.5 rounded-lg border p-3.5 md:col-span-7">
              <div className="border-outline-variant/60 flex items-center justify-between border-b pb-2">
                <span className="text-on-surface-variant flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase">
                  <ScrollText className="text-primary h-[13px] w-[13px]" />
                  Log de Eventos en Tiempo Real
                </span>
                <span className="text-success bg-success/10 border-success/20 rounded border px-1.5 py-0.5 font-mono text-[10px]">
                  SYNC
                </span>
              </div>
              <div className="space-y-2 font-mono text-[12px]">
                {eventos.map((ev) => (
                  <div
                    key={ev.ref}
                    className={`bg-surface/80 hover:bg-surface-bright rounded border-l-2 p-2 transition-colors ${ev.borde}`}
                  >
                    <div className="text-on-surface-variant mb-0.5 flex items-center justify-between text-[10px]">
                      <span className={`font-semibold ${ev.horaColor}`}>{ev.hora}</span>
                      <span className="text-primary">{ev.ref}</span>
                    </div>
                    <p className="text-on-surface leading-snug font-medium">{ev.titulo}</p>
                    <span className="text-on-surface-variant text-[10px]">{ev.detalle}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini radar / cobertura satelital */}
            <div className="bg-surface-recessed border-outline-variant relative flex flex-col justify-between overflow-hidden rounded-lg border p-3.5 md:col-span-5">
              <div className="z-10 flex items-center justify-between">
                <span className="text-on-surface-variant flex items-center gap-1.5 font-mono text-[11px] tracking-wider uppercase">
                  <Radar className="text-primary h-3.5 w-3.5" />
                  Escáner C4
                </span>
                <span className="text-primary font-mono text-[10px]">GEO-COV 360°</span>
              </div>

              {/* Radar visual */}
              <div className="relative mx-auto my-3 flex h-36 w-36 items-center justify-center">
                <div className="border-outline-variant absolute inset-0 rounded-full border" />
                <div className="border-outline-variant/70 absolute inset-4 rounded-full border" />
                <div className="border-outline-variant/40 absolute inset-9 rounded-full border" />
                <div className="bg-outline-variant/60 absolute inset-x-0 top-1/2 h-px" />
                <div className="bg-outline-variant/60 absolute inset-y-0 left-1/2 w-px" />
                {/* Barrido rotatorio */}
                <div className="animate-radar-beam pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                  <div className="h-1/2 w-1/2 origin-bottom-right bg-gradient-to-br from-[#7c9df0]/30 to-transparent" />
                </div>
                {/* Blips */}
                <div className="bg-success absolute top-7 right-8 h-2 w-2 animate-pulse rounded-full shadow-sm shadow-[#6ee7b7]" />
                <div className="bg-primary absolute bottom-9 left-7 h-2 w-2 rounded-full shadow-sm shadow-[#7c9df0]" />
                <div className="bg-success/80 absolute top-12 left-10 h-1.5 w-1.5 rounded-full" />
                <div className="bg-warning absolute right-10 bottom-6 h-1.5 w-1.5 rounded-full" />
                {/* Centro */}
                <div className="bg-on-surface z-10 h-2 w-2 rounded-full shadow-sm shadow-white" />
              </div>

              {/* Barra de coordenadas */}
              <div className="border-outline-variant/60 text-on-surface-variant z-10 flex justify-between border-t pt-2 font-mono text-[10px]">
                <span>LAT 20°34&apos;N // LON 100°23&apos;W</span>
                <span className="text-success">ENLACE OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de estado inferior */}
        <div className="bg-surface-recessed border-outline-variant text-on-surface-variant flex flex-wrap items-center justify-between border-t px-4 py-2 font-mono text-[11px]">
          <div className="flex items-center gap-2">
            <span className="text-outline">»</span>
            <span>
              DESPACHO C4: <strong className="text-on-surface">CABINA MATRIZ QUERÉTARO</strong>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-success h-2 w-2 rounded-full" />
            <span className="text-success">REACCIÓN INMEDIATA EN ESPERA ACTIVA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
