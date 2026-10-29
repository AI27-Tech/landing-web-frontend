/*
 * Seccion Newsletter: catalogo de ediciones del Informe Mensual de Seguridad de
 * AI27, presentadas como tarjetas. Cada tarjeta enlaza al archivo estatico del
 * informe (ver `public/newsletter/`).
 *
 * El id "newsletter" es el ancla a la que apuntan el enlace del header y el de
 * la columna "Compañía" del footer.
 */
import { Reveal } from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { NewsletterCard } from '@/features/newsletter/NewsletterCard';
import { ediciones } from '@/features/newsletter/newsletter-data';

export function Newsletter() {
  return (
    <section id="newsletter" className="bg-background relative">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:py-28">
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
              Inteligencia de riesgo
            </span>
            <h2 className="text-on-surface text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Newsletter de seguridad
            </h2>
            <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed sm:text-lg">
              Nuestro informe mensual con el panorama del robo al transporte de carga en México:
              cifras, tendencias, tramos críticos y recomendaciones para operar con menos riesgo.
            </p>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ediciones.map((edicion) => (
            <StaggerItem key={edicion.id} className="flex">
              <div className="w-full">
                <NewsletterCard edicion={edicion} />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
