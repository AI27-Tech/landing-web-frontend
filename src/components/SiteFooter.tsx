/*
 * Footer institucional de la landing. Portado del footer completo del mock de
 * Contacto (docs/mock/.../contacto_cotizacion), que es el footer definitivo del
 * sitio: coordenadas tecnicas, cuatro columnas (marca, plataforma, compania,
 * atencion) y sub-footer legal.
 *
 * Reemplaza el footer minimo que el scaffold traia del mock del Hero. Ese Hero
 * duplicaba un footer reducido en cada seccion; este es el institucional real.
 *
 * Correccion respecto al mock: el sub-footer del mock repetia el texto de
 * copyright en el lugar de los enlaces legales (un defecto del generador). Aqui
 * se restituyen los cuatro enlaces legales (Privacidad, Terminos, Seguridad,
 * Compliance) que la landing ya declaraba.
 *
 * Datos de contacto entre corchetes ([telefono de contacto], [direccion]) son
 * placeholders literales del mock: datos pendientes de definir, no se inventan.
 */
import { Mail, MapPin, PhoneCall } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

const plataforma = [
  'Centro de Monitoreo',
  'Grupo de Reacción Propio',
  'Corredores de Seguridad',
  'Datos e IA Predictiva',
  'Integración API / TMS',
];

const compania = [
  'Quiénes Somos',
  '25 Años de Trayectoria',
  'Casos de Éxito',
  'Cobertura Nacional',
  'Sala de Prensa',
];

const enlacesLegales = [
  { etiqueta: 'Privacidad', href: '#privacidad' },
  { etiqueta: 'Términos y Condiciones', href: '#terminos' },
  { etiqueta: 'Seguridad', href: '#seguridad' },
  { etiqueta: 'Compliance', href: '#compliance' },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-background border-outline-variant text-on-surface-variant relative z-10 w-full border-t pt-14 pb-8">
      {/* Coordenadas tecnicas */}
      <div className="border-outline-variant/60 text-on-surface-variant/60 mx-auto mb-8 flex max-w-7xl flex-wrap items-center justify-between border-b px-6 pb-4 font-mono text-[10px] tracking-widest uppercase">
        <span>AI27 // INTELLIGENCE SYSTEM NETWORK</span>
        <span className="hidden sm:inline">GEO-FENCE LAT 19.4326° N, LONG 99.1332° W</span>
        <span>NODE STATUS: SYNCHRONIZED</span>
      </div>

      {/* Grid principal (las columnas entran en cascada al hacer scroll). */}
      <Stagger className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Marca y mision */}
        <StaggerItem className="space-y-4 pr-0 lg:col-span-5 lg:pr-8">
          <div className="text-on-surface flex items-center gap-1.5 text-2xl font-bold tracking-tight">
            <span className="bg-primary inline-block h-3 w-3 rounded-sm" />
            AI27
          </div>
          <p className="text-on-surface-variant max-w-md text-[13px] leading-relaxed">
            Seguridad e inteligencia de datos para el transporte de carga en México. Más de 25 años
            anticipando el riesgo en ruta con monitoreo en tiempo real y capacidad de reacción
            inmediata en autopistas federales.
          </p>
          <div className="bg-surface-recessed border-outline-variant text-on-surface inline-flex items-center gap-2 rounded border px-3 py-1.5 text-xs">
            <span className="bg-success status-pulse h-2 w-2 rounded-full" />
            <span className="text-[12px] font-medium">
              Todos los servicios y cabinas operativos
            </span>
          </div>
        </StaggerItem>

        {/* Plataforma & Red */}
        <StaggerItem className="space-y-3 lg:col-span-2">
          <h3 className="text-on-surface text-xs font-semibold tracking-wider uppercase">
            Plataforma &amp; Red
          </h3>
          <ul className="space-y-2 text-[13px]">
            {plataforma.map((item) => (
              <li key={item}>
                <a className="hover:text-primary transition-colors duration-150" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </StaggerItem>

        {/* Compania */}
        <StaggerItem className="space-y-3 lg:col-span-2">
          <h3 className="text-on-surface text-xs font-semibold tracking-wider uppercase">
            Compañía
          </h3>
          <ul className="space-y-2 text-[13px]">
            {compania.map((item) => (
              <li key={item}>
                <a className="hover:text-primary transition-colors duration-150" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </StaggerItem>

        {/* Atencion inmediata */}
        <StaggerItem className="space-y-3 lg:col-span-3">
          <h3 className="text-on-surface text-xs font-semibold tracking-wider uppercase">
            Atención Inmediata
          </h3>
          <div className="space-y-2.5 text-[13px]">
            <div className="flex items-start gap-2.5">
              <PhoneCall className="text-primary mt-0.5 h-[17px] w-[17px] shrink-0" />
              <div className="space-y-1">
                <span className="text-on-surface-variant block text-[11px] tracking-wider uppercase">
                  Teléfonos de contacto:
                </span>
                <div className="text-on-surface-variant text-xs">
                  Ventas:{' '}
                  <a
                    className="text-on-surface hover:text-primary transition-colors"
                    href="tel:+525560827466"
                  >
                    (55) 6082 7466
                  </a>
                </div>
                <div className="text-on-surface-variant text-xs">
                  Atención comercial:{' '}
                  <a
                    className="text-on-surface hover:text-primary transition-colors"
                    href="tel:+525549090269"
                  >
                    (55) 4909 0269
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="text-primary mt-0.5 h-[17px] w-[17px] shrink-0" />
              <div className="space-y-1">
                <span className="text-on-surface-variant block text-[11px] tracking-wider uppercase">
                  Correos de contacto:
                </span>
                <div className="text-on-surface-variant text-xs">
                  Ventas:{' '}
                  <a
                    className="text-on-surface hover:text-primary transition-colors"
                    href="mailto:cmatus@ai27.com"
                  >
                    cmatus@ai27.com
                  </a>
                </div>
                <div className="text-on-surface-variant text-xs">
                  Atención comercial:{' '}
                  <a
                    className="text-on-surface hover:text-primary transition-colors"
                    href="mailto:esamper@ai27.com"
                  >
                    esamper@ai27.com
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="text-primary mt-0.5 h-[17px] w-[17px] shrink-0" />
              <div>
                <span className="text-on-surface-variant block text-[11px] tracking-wider uppercase">
                  Matriz de Operaciones:
                </span>
                <address className="text-xs not-italic">
                  <a
                    className="text-on-surface-variant hover:text-primary transition-colors"
                    href="https://www.google.com/maps/place/AI27+Predictive+Intelligence/@19.5032909,-99.1778381,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f31db4b6a31b:0xfeda91cb25f61590!8m2!3d19.5032909!4d-99.1778381!16s%2Fg%2F11gnpv6bgy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Eje 5 Nte 990, Santa Bárbara, Azcapotzalco,
                    <br />
                    02230 Ciudad de México, CDMX
                  </a>
                </address>
              </div>
            </div>
          </div>
        </StaggerItem>
      </Stagger>

      {/* Sub-footer: copyright + enlaces legales */}
      <div className="border-outline-variant border-t pt-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="text-on-surface-variant text-center text-[13px] md:text-left">
            © 2026 AI27. Todos los derechos reservados.
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-5 text-[13px]">
            {enlacesLegales.map(({ etiqueta, href }) => (
              <a
                key={href}
                className="hover:text-primary transition-colors duration-150"
                href={href}
              >
                {etiqueta}
              </a>
            ))}
          </nav>
        </div>

        {/* Micro badge de seguridad inferior */}
        <div className="border-outline-variant/30 text-on-surface-variant/60 mx-auto mt-4 flex max-w-7xl flex-wrap items-center justify-between border-t px-6 pt-3 font-mono text-[10px] uppercase">
          <span>AI27 // DESPLIEGUE TÁCTICO &amp; PROTOCOLO LOGÍSTICO // ENCRIPTACIÓN AES-256</span>
          <span>CENTRO DE ATENCIÓN A EMERGENCIAS ACTIVO</span>
        </div>
      </div>
    </footer>
  );
}
