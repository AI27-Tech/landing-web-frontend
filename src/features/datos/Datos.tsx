/*
 * Seccion 5: Datos e inteligencia artificial. Ensambla el encabezado, el layout
 * de dos columnas (capacidades + dashboard mockup) y la fila de metricas de
 * valor de datos, sobre el fondo de rejilla y el resplandor radial del mock.
 *
 * El id "datos" es el destino del ancla de la barra superior.
 */
import { AnalyticsDashboard } from '@/features/datos/AnalyticsDashboard';
import { DataCapabilities } from '@/features/datos/DataCapabilities';
import { DataMetrics } from '@/features/datos/DataMetrics';
import { DatosHeader } from '@/features/datos/DatosHeader';

export function Datos() {
  return (
    <section
      id="datos"
      className="bg-grid-pattern bg-radar-glow border-outline-variant relative w-full overflow-hidden border-b px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Halos atmosfericos */}
      <div className="bg-primary/5 pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-success/5 pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <DatosHeader />

        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <DataCapabilities />
          <AnalyticsDashboard />
        </div>

        <DataMetrics />
      </div>
    </section>
  );
}
