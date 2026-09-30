/*
 * Seccion 6 (parte 1): panel tactico de contacto y cotizacion. Portado del mock
 * Nocturne: banda de estado superior, dos columnas (propuesta + formulario) y
 * strip de telemetria inferior, sobre el fondo de rejilla y halos del mock.
 *
 * El id "cotizar" es el destino del boton "Cotizar servicio" de la barra
 * superior y del Hero.
 */
import { BadgeCheck } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
import { ContactPitch } from '@/features/contacto/ContactPitch';
import { QuoteForm } from '@/features/contacto/QuoteForm';

export function Contacto() {
  return (
    <section
      id="cotizar"
      className="bg-grid-pattern relative w-full overflow-hidden pt-12 pb-20 md:py-24"
    >
      {/* Halos atmosfericos */}
      <div className="bg-primary/10 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />
      <div className="bg-success/5 pointer-events-none absolute top-1/4 right-10 -z-10 h-[360px] w-[360px] rounded-full blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-surface-recessed border-outline-variant relative overflow-hidden rounded border shadow-2xl backdrop-blur-sm">
          {/* Banda de estado superior */}
          <div className="border-outline-variant bg-background/60 text-on-surface-variant flex flex-wrap items-center justify-between border-b px-6 py-2.5 text-[11px] tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <span className="bg-success status-pulse inline-block h-1.5 w-1.5 rounded-full" />
              <span className="text-on-surface font-semibold">
                Terminal de enlace // Selección de protocolo
              </span>
            </div>
            <div className="text-on-surface-variant hidden items-center gap-6 font-mono text-[10px] sm:flex">
              <span>CANAL: SSL/TLS AES-256</span>
              <span>LATENCIA: 14ms</span>
              <span className="text-primary">MODO: RESPUESTA DIRECTA C4</span>
            </div>
          </div>

          {/* Dos columnas */}
          <div className="grid grid-cols-1 items-start gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
            <Reveal from="left" className="lg:col-span-6">
              <ContactPitch />
            </Reveal>
            <Reveal from="right" delay={0.12} className="lg:col-span-6">
              <QuoteForm />
            </Reveal>
          </div>

          {/* Strip de telemetria inferior */}
          <div className="border-outline-variant bg-background/80 text-on-surface-variant flex flex-wrap items-center justify-between gap-4 border-t px-6 py-3 text-[11px]">
            <div className="flex items-center gap-4">
              <span className="text-on-surface flex items-center gap-1.5">
                <BadgeCheck className="text-primary h-[15px] w-[15px]" />
                Monitoreo activo de más de 350,000 viajes anuales
              </span>
            </div>
            <div className="flex items-center gap-6 font-mono text-[10px]">
              <span>COBERTURA: 32 ESTADOS</span>
              <span>CABINAS: CDMX / GDL / MTY</span>
              <span className="text-success">ALERTA AUTOMATIZADA: ON</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
