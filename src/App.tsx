/*
 * MARCADOR DE POSICION — no es la landing.
 *
 * El scaffold entra sin UI a proposito: primero se acuerda el andamiaje (tokens,
 * Tailwind, convenciones, verificacion) y despues se bajan las secciones. Este
 * componente existe para dos cosas y ninguna mas:
 *
 *  1. Que `pnpm dev` no arranque en blanco y puedas confirmar que la cadena de
 *     tokens funciona de punta a punta: fondo, texto, primary y bordes salen de
 *     `src/styles/tokens.css` y llegan aqui como utilidades de Tailwind.
 *  2. Tener un lugar donde ver el contraste real de la paleta antes de
 *     comprometer el Hero al pixel.
 *
 * Se borra en el mismo commit que trae la primera seccion de verdad.
 */
export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 py-24">
      <p className="text-on-surface-variant text-[11px] font-semibold tracking-[0.05em] uppercase">
        Scaffold — sin UI todavia
      </p>

      <h1 className="text-on-surface max-w-2xl text-center text-3xl font-bold tracking-tight">
        Tokens <span className="text-primary">en linea</span>
      </h1>

      <p className="text-on-surface-variant max-w-xl text-center text-sm leading-relaxed">
        Si ves esta pagina con fondo pizarra, texto claro y primary periwinkle, la cadena tokens.css
        &rarr; globals.css &rarr; Tailwind esta conectada. Las secciones de{' '}
        <code className="text-on-surface-subtle font-mono">docs/mock/landing-nocturne/</code> se
        portan a partir del Hero.
      </p>

      {/* Muestreo de la paleta: el unico proposito de estos swatches es
          dejar ver los valores reales antes de maquetar. */}
      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6">
        {[
          ['bg-background', 'Lienzo'],
          ['bg-surface', 'Panel'],
          ['bg-surface-bright', 'Hover'],
          ['bg-primary', 'Primary'],
          ['bg-success', 'Exito'],
          ['bg-warning', 'Alerta'],
        ].map(([clase, etiqueta]) => (
          <li
            key={clase}
            className="border-outline-variant bg-surface flex flex-col items-center gap-2 rounded border p-3"
          >
            <span className={`h-8 w-full rounded-sm ${clase}`} />
            <span className="text-on-surface-variant text-[10px] tracking-[0.06em] uppercase">
              {etiqueta}
            </span>
            <span className="text-on-surface-placeholder font-mono text-[10px]">{clase}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
