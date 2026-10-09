/*
 * Composicion de la landing. Por ahora una sola seccion (Hero) entre la barra
 * superior fija y el pie institucional, ambos compartidos por las seis
 * secciones del mock. Las siguientes secciones se agregan como hermanas del
 * Hero dentro del mismo <main>, en el orden del README.
 */
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { Contacto } from '@/features/contacto/Contacto';
import { Hero } from '@/features/hero/Hero';
import { Infraestructura } from '@/features/infraestructura/Infraestructura';
import { Monitoreo } from '@/features/monitoreo/Monitoreo';
import { Trayectoria } from '@/features/trayectoria/Trayectoria';

export function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <SiteHeader />
      <main className="flex flex-grow flex-col">
        <Hero />
        <Trayectoria />
        <Infraestructura />
        <Monitoreo />
        <Contacto />
      </main>
      <SiteFooter />
    </div>
  );
}
