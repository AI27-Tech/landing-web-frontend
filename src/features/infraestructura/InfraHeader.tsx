/*
 * Encabezado de la seccion Infraestructura: badge de red operativa, titular y
 * parrafo descriptivo. Portado del mock Nocturne.
 */
export function InfraHeader() {
  return (
    <div className="mb-14 flex flex-col items-start lg:mb-16">
      <div className="bg-surface-recessed border-outline-variant mb-5 inline-flex items-center gap-2.5 rounded-sm border px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
          <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
        </span>
        <span className="text-primary font-mono text-[11px] font-semibold tracking-wider uppercase">
          Infraestructura // Red operativa nacional
        </span>
      </div>

      <h2 className="text-on-surface max-w-4xl text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-5xl">
        Una red de seguridad desplegada en todo el país
      </h2>

      <p className="text-on-surface-variant mt-5 max-w-3xl text-base leading-relaxed sm:text-lg">
        AI27 ha construido una sólida infraestructura de seguridad integrada: corredores troncales,
        puntos de control y estaciones de verificación continua a lo largo del territorio nacional,
        operando en estrecha coordinación y enlace directo con autoridades federales, estatales y
        municipales.
      </p>
    </div>
  );
}
