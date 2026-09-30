/*
 * Columna izquierda del Hero: propuesta de valor. Portada del mock Nocturne.
 * Pill de estado, titular, subtitulo, botones de accion y metricas de confianza.
 */
const metricas = [
  { valor: '+25 Años', etiqueta: 'de experiencia', destacado: false },
  { valor: '99.8%', etiqueta: 'Cargas seguras', destacado: true },
  { valor: '+1.2M', etiqueta: 'Viajes monitoreados', destacado: false },
] as const;

export function HeroPitch() {
  return (
    <div className="flex flex-col justify-center space-y-7 lg:col-span-6">
      {/* Pill de telemetria en vivo */}
      <div className="bg-surface-recessed border-outline-variant inline-flex w-fit items-center gap-2.5 rounded border px-3 py-1.5 shadow-inner">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping-slow bg-primary absolute inline-flex h-full w-full rounded-full opacity-75" />
          <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
        </span>
        <span className="text-on-surface-variant text-[11px] font-semibold tracking-wider uppercase">
          Inteligencia Predictiva &amp; Telemetría Satelital
        </span>
      </div>

      {/* Titular */}
      <h1 className="text-on-surface text-3xl leading-[1.18] font-bold tracking-tight sm:text-4xl lg:text-[42px]">
        Protegemos tu carga con <span className="text-primary">Inteligencia Artificial</span> y
        datos en tiempo real
      </h1>

      {/* Subtitulo */}
      <p className="text-on-surface-variant max-w-xl text-[14px] leading-relaxed sm:text-[15px]">
        Más de 25 años asegurando la cadena logística de México. Hoy anticipamos riesgos, predecimos
        rutas críticas y neutralizamos amenazas antes de que ocurran.
      </p>

      {/* Botones de accion */}
      <div className="flex flex-wrap items-center gap-4 pt-1">
        <a
          className="bg-primary text-on-primary hover:bg-primary-hover inline-flex items-center justify-center rounded px-6 py-3 text-[13px] font-semibold tracking-wide uppercase shadow-sm transition-all duration-150 active:scale-[0.99]"
          href="#cotizar"
        >
          Cotizar servicio
        </a>
        <a
          className="bg-surface border-outline-variant text-on-surface hover:border-outline hover:bg-surface-bright inline-flex items-center justify-center rounded border px-6 py-3 text-[13px] font-medium tracking-wide uppercase transition-all duration-150 active:scale-[0.99]"
          href="#conocer-mas"
        >
          Conocer más
        </a>
      </div>

      {/* Metricas de confianza */}
      <div className="border-outline-variant grid grid-cols-3 gap-4 border-t pt-6">
        {metricas.map(({ valor, etiqueta, destacado }, i) => (
          <div
            key={etiqueta}
            className={`flex flex-col ${i > 0 ? 'border-outline-variant border-l pl-4' : ''}`}
          >
            <span
              className={`text-xl font-bold tracking-tight tabular-nums sm:text-2xl ${
                destacado ? 'text-success' : 'text-on-surface'
              }`}
            >
              {valor}
            </span>
            <span className="text-on-surface-variant mt-0.5 text-[12px]">{etiqueta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
