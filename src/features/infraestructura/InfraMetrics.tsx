/*
 * Fila inferior de la seccion Infraestructura: cuatro metricas de red y el pie
 * de metadatos de ingenieria. Portada del mock Nocturne.
 */
type Metrica = {
  valor: string;
  valorNumerico: boolean;
  etiqueta: string;
  etiquetaColor: string;
  descripcion: string;
};

const metricas: Metrica[] = [
  {
    valor: '+120',
    valorNumerico: true,
    etiqueta: 'Puntos de control',
    etiquetaColor: 'text-primary',
    descripcion:
      'Ubicaciones estratégicas activas en carreteras federales y libramientos (datos ilustrativos de red).',
  },
  {
    valor: '24,000 km',
    valorNumerico: true,
    etiqueta: 'Corredores monitoreados',
    etiquetaColor: 'text-success',
    descripcion: 'Ejes troncales logísticos asegurados bajo cobertura algorítmica y física.',
  },
  {
    valor: 'Nacional',
    valorNumerico: false,
    etiqueta: 'Cobertura geográfica',
    etiquetaColor: 'text-primary',
    descripcion: 'Cobertura nacional en los principales corredores y aduanas.',
  },
  {
    valor: '24/7/365',
    valorNumerico: true,
    etiqueta: 'Operación y reacción',
    etiquetaColor: 'text-success',
    descripcion:
      'Supervisión ininterrumpida desde C4 con unidades de custodia y reacción en campo.',
  },
];

export function InfraMetrics() {
  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 md:grid-cols-4">
        {metricas.map((m) => (
          <div
            key={m.etiqueta}
            className="bg-surface border-outline-variant hover:border-outline flex flex-col justify-between rounded-sm border p-5 transition-all duration-150"
          >
            <div>
              <div
                className={`text-on-surface font-mono text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${
                  m.valorNumerico ? 'tabular-nums' : 'uppercase'
                }`}
              >
                {m.valor}
              </div>
              <div
                className={`mt-1 font-mono text-[11px] font-semibold tracking-wider uppercase ${m.etiquetaColor}`}
              >
                {m.etiqueta}
              </div>
            </div>
            <p className="text-on-surface-variant border-outline-variant/80 mt-3 border-t pt-3 text-xs leading-relaxed">
              {m.descripcion}
            </p>
          </div>
        ))}
      </div>

      {/* Pie de metadatos */}
      <div className="border-outline-variant/60 mt-12 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center sm:flex-row sm:text-left">
        <div className="text-on-surface-placeholder font-mono text-[11px] tracking-wide">
          AI27 // ARQUITECTURA DE INFRAESTRUCTURA Y DESPLIEGUE TÁCTICO // PROTOCOLO NACIONAL
          AUDITABLE
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-success inline-block h-1.5 w-1.5 rounded-full" />
          <span className="text-on-surface-variant font-mono text-[10px] tracking-wider uppercase">
            TELEMETRÍA EN LÍNEA · LATENCIA RED: 28MS
          </span>
        </div>
      </div>
    </>
  );
}
