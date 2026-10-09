/*
 * Consola de comando del centro de monitoreo (columna izquierda). Portada del
 * mock Nocturne: cabecera tecnica con reloj en vivo, KPIs de estado,
 * log de eventos en tiempo real, mini escaner de radar y barra de estado.
 *
 * El reloj y el barrido del radar: el reloj es dato (no lo apaga reduced-motion);
 * el barrido y los pulsos si los apaga la guarda global.
 */
import { Clock, Radar, ScrollText, Truck } from 'lucide-react';
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
    etiqueta: 'Unidades en tránsito',
    icono: <Truck className="text-primary h-[15px] w-[15px]" />,
    valor: '4,892',
    puntoColor: 'bg-success',
    pieColor: 'text-success',
    pie: 'En ruta segura',
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
    hora: '03:42:17 CST',
    horaColor: 'text-error',
    borde: 'border-error',
    ref: 'INC-2271',
    titulo: 'Intento de robo con violencia.',
    detalle: 'Grupo de reacción desplegado · enlace con Guardia Nacional · unidad asegurada',
  },
  {
    hora: '03:39:48 CST',
    horaColor: 'text-warning',
    borde: 'border-warning',
    ref: 'INC-2268',
    titulo: 'Cierre total de la circulación.',
    detalle: 'Bloqueo por manifestación · reruteo activado por corredor alterno',
  },
  {
    hora: '03:35:03 CST',
    horaColor: 'text-warning',
    borde: 'border-warning',
    ref: 'INC-2264',
    titulo: 'Desvío no programado detectado.',
    detalle: 'Unidad TR-5583 fuera de ruta · contacto con operador en curso',
  },
];

export function CommandConsole() {
  const hora = useLocalClock();

  return (
    <div className="space-y-4">
      <div className="bg-surface border-outline-variant relative overflow-hidden rounded-lg border shadow-xl shadow-black/40">
        {/* Cabecera tecnica */}
        <div className="bg-surface-recessed border-outline-variant flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2 font-mono text-[10px] sm:gap-3 sm:px-4 sm:py-3 sm:text-[11px]">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-success/10 border-success/30 text-success flex items-center gap-1 rounded border px-1.5 py-0.5 sm:gap-1.5 sm:px-2">
              <span className="bg-success h-1 w-1 animate-pulse rounded-full sm:h-1.5 sm:w-1.5" />
              <span className="text-[9px] font-semibold tracking-wider sm:text-[11px]">
                SISTEMA ACTIVO
              </span>
            </div>
            <span className="text-outline hidden sm:inline">|</span>
            <span className="text-on-surface-variant hidden items-center gap-1 sm:flex sm:gap-1.5">
              <Clock className="text-primary h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="text-on-surface font-medium tabular-nums">{hora}</span>
              <span className="text-on-surface-variant text-[9px] sm:text-[11px]">// CABINA</span>
            </span>
          </div>
        </div>

        {/* Panel interior */}
        <div className="space-y-5 p-5">
          {/* KPIs */}
          <div className="grid grid-cols-1 gap-2 sm:gap-3">
            {kpis.map((kpi) => (
              <div
                key={kpi.etiqueta}
                className="bg-surface-recessed border-outline-variant hover:border-outline rounded-lg border p-2.5 transition-colors sm:p-3"
              >
                <div className="text-on-surface-variant mb-1 flex items-center justify-between font-mono text-[9px] tracking-wider uppercase sm:text-[10px] md:text-[11px]">
                  <span className="truncate">{kpi.etiqueta}</span>
                  {kpi.icono}
                </div>
                <div className="text-on-surface text-lg font-bold tracking-tight tabular-nums sm:text-xl">
                  {kpi.valor}
                </div>
                <div
                  className={`mt-1 flex items-center gap-1 text-[9px] sm:gap-1.5 sm:text-[10px] md:text-[11px] ${kpi.pieColor}`}
                >
                  <span
                    className={`inline-block h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5 ${kpi.puntoColor}`}
                  />
                  <span className="truncate">{kpi.pie}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Log de eventos + mini radar */}
          <div className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12">
            {/* Log de eventos */}
            <div className="bg-surface-recessed border-outline-variant space-y-2 rounded-lg border p-2.5 sm:space-y-2.5 sm:p-3.5 lg:col-span-7">
              <div className="border-outline-variant/60 flex items-center justify-between border-b pb-2">
                <span className="text-on-surface-variant flex items-center gap-1 font-mono text-[9px] tracking-wider uppercase sm:gap-1.5 sm:text-[10px] md:text-[11px]">
                  <ScrollText className="text-primary h-3 w-3 sm:h-[13px] sm:w-[13px]" />
                  <span className="hidden sm:inline">Log de Eventos</span>
                  <span className="sm:hidden">Log</span>
                </span>
                <span className="text-success bg-success/10 border-success/20 rounded border px-1 py-0.5 font-mono text-[8px] sm:text-[10px]">
                  SYNC
                </span>
              </div>
              <div className="space-y-1.5 font-mono text-[11px] sm:space-y-2 sm:text-[12px]">
                {eventos.map((ev) => (
                  <div
                    key={ev.ref}
                    className={`bg-surface/80 hover:bg-surface-bright rounded border-l-2 p-1.5 transition-colors sm:p-2 ${ev.borde}`}
                  >
                    <div className="text-on-surface-variant mb-0.5 flex items-center justify-between gap-2 overflow-hidden text-[9px] sm:text-[10px]">
                      <span className={`flex-shrink-0 font-semibold ${ev.horaColor}`}>
                        {ev.hora}
                      </span>
                      <span className="text-primary flex-shrink-0">{ev.ref}</span>
                    </div>
                    <p className="text-on-surface line-clamp-2 text-[10px] leading-snug font-medium sm:text-[11px]">
                      {ev.titulo}
                    </p>
                    <span className="text-on-surface-variant line-clamp-1 text-[8px] sm:text-[9px]">
                      {ev.detalle}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini radar / cobertura satelital */}
            <div className="bg-surface-recessed border-outline-variant relative flex flex-col justify-between overflow-hidden rounded-lg border p-2.5 sm:p-3.5 lg:col-span-5">
              <div className="z-10 flex items-center justify-between gap-2">
                <span className="text-on-surface-variant flex items-center gap-1 font-mono text-[9px] tracking-wider uppercase sm:gap-1.5 sm:text-[10px] md:text-[11px]">
                  <Radar className="text-primary h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="hidden sm:inline">Escáner Táctico</span>
                  <span className="sm:hidden">Escáner</span>
                </span>
                <span className="text-primary font-mono text-[8px] sm:text-[10px]">360°</span>
              </div>

              {/* Radar visual */}
              <div className="relative mx-auto my-2 flex h-28 w-28 items-center justify-center sm:my-3 sm:h-36 sm:w-36">
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
                <div className="bg-success absolute top-6 right-6 h-1.5 w-1.5 animate-pulse rounded-full shadow-sm shadow-[#6ee7b7] sm:top-7 sm:right-8 sm:h-2 sm:w-2" />
                <div className="bg-primary absolute bottom-8 left-6 h-1.5 w-1.5 rounded-full shadow-sm shadow-[#7c9df0] sm:bottom-9 sm:left-7 sm:h-2 sm:w-2" />
                <div className="bg-success/80 absolute top-10 left-8 h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5" />
                <div className="bg-warning absolute right-8 bottom-6 h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5" />
                {/* Centro */}
                <div className="bg-on-surface z-10 h-1.5 w-1.5 rounded-full shadow-sm shadow-white sm:h-2 sm:w-2" />
              </div>

              {/* Barra de coordenadas */}
              <div className="border-outline-variant/60 text-on-surface-variant z-10 flex justify-between gap-1 overflow-hidden border-t pt-1.5 font-mono text-[8px] sm:pt-2 sm:text-[10px]">
                <span className="truncate">LAT 20°34&apos; // LON 100°23&apos;</span>
                <span className="text-success flex-shrink-0">OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de estado inferior */}
        <div className="bg-surface-recessed border-outline-variant text-on-surface-variant flex flex-col items-start gap-2 border-t px-3 py-2 font-mono text-[9px] sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-4 sm:py-2 sm:text-[11px]">
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-outline hidden sm:inline">»</span>
            <span className="truncate">
              <strong className="text-on-surface">DESPACHO:</strong>{' '}
              <span className="hidden sm:inline">CABINA MATRIZ</span>
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="bg-success h-1.5 w-1.5 flex-shrink-0 rounded-full sm:h-2 sm:w-2" />
            <span className="text-success text-[8px] sm:text-[11px]">REACCIÓN ACTIVA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
