/*
 * Seccion 4: Centro de monitoreo y grupo de reaccion. Ensambla el encabezado,
 * el layout de dos columnas (consola de comando C4 + protocolo del grupo de
 * reaccion) y las capacidades institucionales, sobre el fondo de rejilla tenue
 * y los halos de color del mock Nocturne.
 *
 * El id "monitoreo" es el destino del ancla de la barra superior.
 */
import { CommandConsole } from '@/features/monitoreo/CommandConsole';
import { MonitoreoCapabilities } from '@/features/monitoreo/MonitoreoCapabilities';
import { MonitoreoHeader } from '@/features/monitoreo/MonitoreoHeader';
import { ReactionProtocol } from '@/features/monitoreo/ReactionProtocol';

export function Monitoreo() {
  return (
    <section
      id="monitoreo"
      className="bg-engineering-grid-faint border-outline-variant/50 relative w-full overflow-hidden border-y py-16 md:py-24"
    >
      {/* Halos atmosfericos */}
      <div className="bg-primary/[0.035] pointer-events-none absolute top-10 left-1/4 h-[450px] w-[650px] -translate-x-1/2 rounded-full blur-[140px]" />
      <div className="bg-success/[0.025] pointer-events-none absolute right-10 bottom-1/4 h-[550px] w-[550px] rounded-full blur-[160px]" />

      <div className="relative mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
        <MonitoreoHeader />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <CommandConsole />
          <ReactionProtocol />
        </div>

        <MonitoreoCapabilities />
      </div>
    </section>
  );
}
