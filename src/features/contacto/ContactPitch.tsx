/*
 * Columna izquierda del panel de contacto: propuesta de valor, metricas de
 * servicio y acciones de contacto directo. Portada del mock Nocturne.
 *
 * El telefono y demas datos de contacto vienen del mock como placeholders
 * literales ("[telefono de contacto]"): son datos pendientes de definir, no se
 * inventan.
 */
import { Phone } from 'lucide-react';

const metricas = [
  { valor: '< 24 hrs', etiqueta: 'Respuesta de cotización', color: 'text-success' },
] as const;

export function ContactPitch() {
  return (
    <div className="flex h-full flex-col justify-between space-y-8">
      <div className="space-y-5">
        <div className="bg-surface border-outline-variant text-primary inline-flex items-center gap-2.5 rounded border px-3 py-1 text-[11px] font-semibold tracking-wider uppercase">
          <span className="bg-success status-pulse h-2 w-2 rounded-full" />
          <span>Despliegue operativo // Contacto &amp; cotización</span>
        </div>

        <h2 className="text-on-surface text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-[42px]">
          Cotiza la seguridad y los datos de tu carga
        </h2>

        <p className="text-on-surface-variant text-sm leading-relaxed sm:text-base">
          Integra analítica predictiva, custodia satelital 24/7 y reacción táctica inmediata en tus
          corredores logísticos. Obtén una propuesta personalizada para el volumen y riesgo de tu
          operación en menos de 24 horas.
        </p>
      </div>

      {/* Metricas de servicio */}
      <div className="border-outline-variant/80 bg-background/30 grid grid-cols-1 gap-3 rounded border-y p-3">
        {metricas.map((m, i) => (
          <div
            key={m.etiqueta}
            className={`flex flex-col ${i > 0 ? 'border-outline-variant border-l pl-3' : ''}`}
          >
            <span
              className={`text-base font-semibold tracking-tight tabular-nums sm:text-lg ${m.color}`}
            >
              {m.valor}
            </span>
            <span className="text-on-surface-variant mt-0.5 text-[10px] leading-tight tracking-wider uppercase sm:text-[11px]">
              {m.etiqueta}
            </span>
          </div>
        ))}
      </div>

      {/* Acciones de contacto */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <a
            className="border-outline-variant hover:border-outline bg-background hover:bg-surface-recessed text-on-surface-variant hover:text-on-surface inline-flex items-center justify-center gap-2 rounded border px-4 py-3 text-center text-[13px] font-medium transition-all duration-150 active:scale-[0.99]"
            href="tel:+525560827466"
          >
            <Phone className="text-success h-[18px] w-[18px]" />
            <span>Ventas: (55) 6082 7466</span>
          </a>
          <a
            className="border-outline-variant hover:border-outline bg-background hover:bg-surface-recessed text-on-surface-variant hover:text-on-surface inline-flex items-center justify-center gap-2 rounded border px-4 py-3 text-center text-[13px] font-medium transition-all duration-150 active:scale-[0.99]"
            href="tel:+525549090269"
          >
            <Phone className="text-success h-[18px] w-[18px]" />
            <span>Atención comercial: (55) 4909 0269</span>
          </a>
        </div>

        <div className="text-on-surface-variant flex items-center gap-2 text-xs">
          <span className="bg-success inline-block h-2 w-2 rounded-full" />
          <span className="text-on-surface-subtle">Disponibilidad 24/7 C4:</span>
          <span>Guardia táctica y despacho de custodias activas a nivel nacional</span>
        </div>
      </div>
    </div>
  );
}
