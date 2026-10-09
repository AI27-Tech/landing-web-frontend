/*
 * Encabezado de la seccion Datos e IA: tag de plataforma analitica, titular con
 * gradiente y parrafo de apoyo. Portado del mock Nocturne.
 */
export function DatosHeader() {
  return (
    <div className="mb-14 max-w-4xl">
      <div className="bg-surface-recessed border-outline-variant text-primary mb-4 inline-flex items-center gap-2 rounded border px-3 py-1 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-sm">
        <span className="bg-success inline-block h-1.5 w-1.5 animate-pulse rounded-full" />
        <span>• Datos + IA // Plataforma analítica predictiva</span>
      </div>

      <h2 className="text-on-surface mb-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        No solo protegemos tu carga:{' '}
        <span className="bg-gradient-to-r from-[#7c9df0] via-[#a5b4fc] to-[#6ee7b7] bg-clip-text text-transparent">
          te damos sus datos
        </span>
      </h2>

      <p className="text-on-surface-variant max-w-3xl text-[15px] leading-relaxed font-normal sm:text-base">
        Cada viaje monitoreado genera miles de datos. En AI27 transformamos esos
        datos en visibilidad operacional en tiempo real, predicción algorítmica de riesgos y
        analítica estratégica para la toma de decisiones críticas en tu cadena de suministro.
      </p>
    </div>
  );
}
