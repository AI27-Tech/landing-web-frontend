/*
 * Seccion 2: Trayectoria y cobertura nacional ("Quienes somos"). Ensambla la
 * cabecera institucional, la linea cronologica de evolucion y los indicadores
 * de confianza sobre el fondo de rejilla tenue del mock Nocturne.
 *
 * El id "nosotros" es el destino del ancla de la barra superior.
 */
import { EvolutionTimeline } from '@/features/trayectoria/EvolutionTimeline';
import { TrayectoriaHeader } from '@/features/trayectoria/TrayectoriaHeader';
import { TrustIndicators } from '@/features/trayectoria/TrustIndicators';

export function Trayectoria() {
  return (
    <section id="nosotros" className="relative">
      {/* Fondo: rejilla milimetrica tenue + velo radial para profundidad */}
      <div className="bg-engineering-grid-faint pointer-events-none absolute inset-0 z-0" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_transparent,_rgba(14,17,23,0.8)_60%,_#0e1117_100%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-6 py-20 sm:px-8 lg:gap-20 lg:py-28">
        <TrayectoriaHeader />
        <EvolutionTimeline />
        <TrustIndicators />
      </div>
    </section>
  );
}
