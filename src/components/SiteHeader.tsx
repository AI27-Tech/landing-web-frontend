/*
 * Barra superior fija de la landing. Portada del header del mock Nocturne
 * (docs/mock/landing-nocturne/, compartido por las seis secciones).
 *
 * El color se nombra por rol (bg-background, text-on-surface-variant, ...),
 * nunca por valor: los tokens viven en src/styles/tokens.css.
 *
 * En móvil: logo + badge a la izquierda, menú hamburguesa a la derecha.
 * En desktop: logo + badge, navegación centrada, botón de acción a la derecha.
 *
 * El enlace activo es resaltado por useScrollSpy (basado en la sección que se
 * está viendo). El id de cada sección se deriva del href.
 */
import { useScrollSpy } from '@/components/useScrollSpy';
import { MobileNav } from '@/components/MobileNav';

const enlaces = [
  { etiqueta: 'Nosotros', href: '#nosotros' },
  { etiqueta: 'Infraestructura', href: '#infraestructura' },
  { etiqueta: 'Monitoreo', href: '#monitoreo' },
  { etiqueta: 'Newsletter', href: '#newsletter' },
  // Enlace a '#datos' retirado temporalmente: la seccion Datos e IA quedo
  // desvinculada de la pagina (ver App.tsx). Restaurar junto con <Datos />.
] as const;

const ids = enlaces.map((enlace) => enlace.href.slice(1));

export function SiteHeader() {
  const activo = useScrollSpy(ids);

  return (
    <header className="bg-background/80 border-outline-variant fixed top-0 left-0 z-50 w-full border-b shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Marca y distintivo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            className="text-on-surface flex items-center gap-2 text-xl font-bold tracking-tight"
            href="#"
          >
            <span>AI27</span>
            <span className="bg-surface border-outline-variant text-primary inline-flex items-center rounded border px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
              +25Y
            </span>
          </a>
        </div>

        {/* Navegacion desktop */}
        <nav className="hidden items-center gap-8 text-[13px] tracking-wide uppercase md:flex">
          {enlaces.map(({ etiqueta, href }) => {
            const esActivo = href.slice(1) === activo;
            return (
              <a
                key={href}
                href={href}
                aria-current={esActivo ? 'true' : undefined}
                className={
                  esActivo
                    ? 'text-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface transition-colors duration-150'
                }
              >
                {etiqueta}
              </a>
            );
          })}
        </nav>

        {/* Acciones: CTA desktop + Mobile nav */}
        <div className="flex items-center gap-3">
          <a
            className="bg-primary text-on-primary hover:bg-primary-hover hidden items-center justify-center rounded px-4 py-2 text-[13px] font-semibold tracking-wide uppercase shadow-sm transition-all duration-150 active:scale-[0.99] md:inline-flex"
            href="#cotizar"
          >
            Cotizar servicio
          </a>
          <MobileNav
            enlaces={enlaces as unknown as Array<{ etiqueta: string; href: string }>}
            activo={activo}
          />
        </div>
      </div>
    </header>
  );
}
