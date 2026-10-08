/*
 * Columna derecha del Hero: panel "Centro de Control AI27". Portado del mock
 * Nocturne. Bloques: cabecera con reloj en vivo, rejilla de KPIs y registro de
 * incidentes.
 *
 * Los iconos son lucide-react (el unico paquete de iconos de los repos AI27).
 * El mock usa Material Symbols, que es un artefacto del generador, no una
 * decision de codigo; aqui se mapean a su equivalente de lucide.
 */
import { BadgeCheck, RadioTower, ShieldCheck, Terminal } from 'lucide-react';
import { Counter } from '@/components/motion/Counter';
import { useSystemClock } from '@/features/hero/useSystemClock';

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

        <KpiGrid />
        <IncidentLog />
      </div>
    </div>
  );
}
