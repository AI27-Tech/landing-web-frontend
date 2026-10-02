/*
 * Seccion 3: Infraestructura y red operativa nacional. Ensambla el encabezado,
 * el layout de dos columnas (mapa tactico + capacidades) y la fila de metricas
 * sobre el fondo de rejilla de precision y los halos de color del mock Nocturne.
 *
 * El id "infraestructura" es el destino del ancla de la barra superior.
 */
import { Reveal } from '@/components/motion/Reveal';
import { CapabilityCards } from '@/features/infraestructura/CapabilityCards';
import { InfraHeader } from '@/features/infraestructura/InfraHeader';
import { InfraMetrics } from '@/features/infraestructura/InfraMetrics';
import { TacticalMap } from '@/features/infraestructura/TacticalMap';

export function Infraestructura() {
  return (
    <section
      id="infraestructura"
      className="border-outline-variant relative w-full overflow-hidden border-t py-20 lg:py-28"
    >
      {/* Fondo: rejilla de precision + halos de color desenfocados */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="bg-primary/5 pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full blur-[140px]" />
      <div className="bg-success/5 pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <InfraHeader />
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-12 lg:gap-8">
          <Reveal from="left" className="md:col-span-2 lg:col-span-7">
            <TacticalMap />
          </Reveal>
          {/* CapabilityCards gestiona su entrada con Stagger; su col-span vive
              en el propio componente. No se envuelve en Reveal para no solapar
              dos animaciones de opacidad (parpadeo). */}
          <CapabilityCards />
        </div>

        <InfraMetrics />
      </div>
    </section>
  );
}
