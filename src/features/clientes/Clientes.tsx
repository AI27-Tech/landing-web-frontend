/*
 * Seccion Clientes: muro de logos de las empresas que son clientes en AI27.
 */
import { Reveal } from '@/components/motion/Reveal';
import { ClientLogosMarquee } from '@/features/clientes/ClientLogosMarquee';
import { ClientesHeader } from '@/features/clientes/ClientesHeader';
import { clientes } from '@/features/clientes/clientes-data';

export function Clientes() {
  return (
    <section id="clientes" className="relative">
      <div className="bg-engineering-grid-faint pointer-events-none absolute inset-0 z-0" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_transparent,_rgba(14,17,23,0.8)_60%,_#0e1117_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 lg:py-28">
        <Reveal>
          <ClientesHeader />
        </Reveal>
        <ClientLogosMarquee clientes={clientes} />
      </div>
    </section>
  );
}
