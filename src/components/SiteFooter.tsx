/*
 * Pie institucional de la landing. Portado del footer del mock Nocturne
 * (docs/mock/landing-nocturne/, compartido por las seis secciones).
 *
 * Los cuatro enlaces legales (Privacidad, Terminos, Seguridad, Compliance)
 * apuntan a anclas por ahora. Si se convierten en subpaginas reales, eso
 * exige instalar router y se registra en el README (decision abierta).
 */
const enlacesLegales = [
  { etiqueta: 'Privacidad', href: '#privacidad' },
  { etiqueta: 'Términos y Condiciones', href: '#terminos' },
  { etiqueta: 'Seguridad', href: '#seguridad' },
  { etiqueta: 'Compliance', href: '#compliance' },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-background border-outline-variant w-full border-t">
      <div className="text-on-surface-variant mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-[13px] md:flex-row">
        {/* Marca y aviso de derechos */}
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
          <span className="text-on-surface text-lg font-bold">AI27</span>
          <span className="text-outline-variant hidden sm:inline">|</span>
          <p>
            © 2025 AI27. Todos los derechos reservados. Seguridad e Inteligencia Predictiva en
            Tránsito de Carga.
          </p>
        </div>

        {/* Enlaces legales */}
        <nav className="flex items-center gap-6">
          {enlacesLegales.map(({ etiqueta, href }) => (
            <a
              key={href}
              className="text-on-surface-variant hover:text-primary transition-colors duration-150"
              href={href}
            >
              {etiqueta}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
