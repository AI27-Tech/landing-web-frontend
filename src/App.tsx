/*
 * Composicion de la landing.
 *
 * TEMPORAL: la landing esta en pausa y solo se muestra la pantalla
 * "En construccion". La composicion original (header, secciones y footer) queda
 * comentada abajo; para republicar la landing completa, se descomenta ese
 * bloque, se vuelve a renderizar <AppLanding /> y se elimina <EnConstruccion />.
 */
import { EnConstruccion } from '@/features/en-construccion/EnConstruccion';

export function App() {
  return <EnConstruccion />;
}

/*
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Contacto } from '@/features/contacto/Contacto';
import { Datos } from '@/features/datos/Datos';
import { Hero } from '@/features/hero/Hero';
import { Infraestructura } from '@/features/infraestructura/Infraestructura';
import { Monitoreo } from '@/features/monitoreo/Monitoreo';
import { Trayectoria } from '@/features/trayectoria/Trayectoria';

export function AppLanding() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex flex-grow flex-col">
        <Hero />
        <Trayectoria />
        <Infraestructura />
        <Monitoreo />
        <Datos />
        <Contacto />
      </main>
      <SiteFooter />
    </div>
  );
}
*/
