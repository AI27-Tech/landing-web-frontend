/*
 * Encabezado de la seccion Centro de monitoreo: badge operativo 24/7, titular
 * con gradiente y parrafo de apoyo. Portado del mock Nocturne.
 */
export function MonitoreoHeader() {
  return (
    <div className="max-w-4xl space-y-4">
      <div className="bg-surface-recessed border-outline-variant text-primary inline-flex items-center gap-2.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase">
        <span className="relative flex h-2 w-2">
          <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
          <span className="bg-success relative inline-flex h-2 w-2 rounded-full" />
        </span>
        <span className="text-on-surface font-semibold">Operación 24/7</span>
        <span className="text-outline">//</span>
        <span className="tracking-widest">Cabina C4 &amp; Fuerza Operativa</span>
      </div>

      <h2 className="text-on-surface text-3xl leading-tight font-extrabold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
        Un centro de monitoreo y un{' '}
        <span className="bg-gradient-to-r from-[#7c9df0] via-[#9ab6f7] to-[#6ee7b7] bg-clip-text text-transparent">
          grupo de reacción propios
        </span>
      </h2>

      <p className="text-on-surface-variant max-w-3xl text-base leading-relaxed sm:text-lg">
        AI27 cuenta con un centro de monitoreo privado y un grupo de reacción propio que permiten
        una acción inmediata ante eventos inesperados, en estrecha coordinación con autoridades
        federales, estatales y municipales.
      </p>
    </div>
  );
}
