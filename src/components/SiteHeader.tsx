/*
 * Barra superior fija de la landing. Portada del header del mock Nocturne
 * (docs/mock/landing-nocturne/, compartido por las seis secciones).
 *
 * El color se nombra por rol (bg-background, text-on-surface-variant, ...),
 * nunca por valor: los tokens viven en src/styles/tokens.css.
 *
 * El enlace activo ya no es fijo: un scroll-spy (useScrollSpy) resalta el de la
 * seccion que se esta viendo. El id de cada seccion se deriva del href.
 */
import { useScrollSpy } from '@/components/useScrollSpy';

const enlaces = [
  { etiqueta: 'Nosotros', href: '#nosotros' },
  { etiqueta: 'Infraestructura', href: '#infraestructura' },
  { etiqueta: 'Monitoreo', href: '#monitoreo' },
  { etiqueta: 'Datos', href: '#datos' },
] as const;

const ids = enlaces.map((enlace) => enlace.href.slice(1));

export function SiteHeader() {
  const activo = useScrollSpy(ids);

  return (
    <header className="bg-background/80 border-outline-variant fixed top-0 left-0 z-50 w-full border-b shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Marca y distintivo */}
        <div className="flex items-center gap-3">
          <a
            className="text-on-surface flex items-center gap-2 text-xl font-bold tracking-tight"
            href="#"
          >
            <span>AI27</span>
            <span className="bg-surface border-outline-variant text-primary inline-flex items-center rounded border px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase">
              +25 años de liderazgo
            </span>
          </a>
        </div>

        {/* Navegacion por anclas */}
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

        {/* Accion principal */}
        <div className="flex items-center gap-3">
          <a
            className="bg-primary text-on-primary hover:bg-primary-hover inline-flex items-center justify-center rounded px-4 py-2 text-[13px] font-semibold tracking-wide uppercase shadow-sm transition-all duration-150 active:scale-[0.99]"
            href="#cotizar"
          >
            Cotizar servicio
          </a>
        </div>
      </div>
    </header>
  );
}
