/*
 * Cabecera institucional de la seccion Trayectoria: tag "Quienes somos",
 * titular con gradiente periwinkle -> esmeralda, narrativa de evolucion y el
 * chip de "arquitectura de custodia predictiva". Portada del mock Nocturne.
 */
import { ShieldCheck } from 'lucide-react';

export function TrayectoriaHeader() {
  return (
    <div className="border-outline-variant/50 grid grid-cols-1 items-center gap-8 border-b pb-16 lg:grid-cols-12 lg:gap-12">
      {/* Columna izquierda: tag + titular */}
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 border-primary/25 inline-flex items-center gap-2 rounded border px-3 py-1 backdrop-blur-sm">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            <span className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
              Quiénes somos
            </span>
          </div>
          <span className="text-on-surface-variant/60 font-mono text-[11px] tracking-wider">
            REF: HIST_OP_25Y // MX-SECURITY-SYS
          </span>
        </div>

        <h2 className="text-on-surface text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          25 años protegiendo la carga de México,{' '}
          <span className="bg-gradient-to-r from-[#7c9df0] via-[#94b5ff] to-[#6ee7b7] bg-clip-text text-transparent">
            hoy con inteligencia de datos
          </span>
        </h2>
      </div>

      {/* Columna derecha: narrativa + chip de estado */}
      <div className="flex flex-col justify-center gap-6 lg:col-span-5">
        <p className="text-on-surface-variant text-base leading-relaxed font-normal sm:text-lg">
          Nacimos como una{' '}
          <strong className="text-on-surface font-semibold">empresa 100% mexicana</strong> con más
          de 25 años de experiencia consolidada en seguridad logística al transporte terrestre de
          mercancías. Hoy somos una{' '}
          <span className="text-on-surface font-medium">
            plataforma analítica de datos e inteligencia artificial
          </span>{' '}
          capaz de anticipar riesgos en ruta, mitigar amenazas antes de su ejecución y otorgar
          visibilidad crítica total a cada cadena de suministro.
        </p>

        <div className="bg-surface-recessed/70 border-outline-variant text-on-surface-variant flex items-center justify-between rounded border p-4 font-mono text-xs">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="text-success h-4 w-4" />
            <span>ARQUITECTURA DE CUSTODIA PREDICTIVA</span>
          </div>
          <span className="text-primary font-medium">ESTADO: VIGENTE</span>
        </div>
      </div>
    </div>
  );
}
