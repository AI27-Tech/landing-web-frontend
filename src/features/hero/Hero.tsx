/*
 * Seccion Hero de la landing (variante tactica: radar + red de telemetria).
 * Ensambla el fondo tactico, la propuesta de valor y el panel Centro de Control
 * en el layout de dos columnas del mock Nocturne.
 */
import { Reveal } from '@/components/motion/Reveal';
import { ControlCenterPanel } from '@/features/hero/ControlCenterPanel';
import { HeroBackdrop } from '@/features/hero/HeroBackdrop';
import { HeroPitch } from '@/features/hero/HeroPitch';

export function Hero() {
  return (
    <section className="relative z-10 flex flex-grow items-center pt-28 pb-16">
      <HeroBackdrop />
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* El pitch entra desde la izquierda; el panel desde la derecha, un
              instante despues, para una entrada secuencial. */}
          <Reveal from="left" className="lg:col-span-6">
            <HeroPitch />
          </Reveal>
          <Reveal from="right" delay={0.15} className="lg:col-span-6">
            <ControlCenterPanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
