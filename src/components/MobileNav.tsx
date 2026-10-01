/*
 * Menu movil desplegable. Oculto en desktop, visible en móvil (<768px).
 * Se abre/cierra con el ícono de hamburguesa y contiene la navegación.
 *
 * Animaciones: el panel se desliza hacia abajo desde arriba con fade-in,
 * los items del menú se escalonan. Al cerrar, anima la salida hacia arriba.
 * Respeta reduced-motion.
 */
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

type MobileNavProps = {
  enlaces: Array<{ etiqueta: string; href: string }>;
  activo: string | null;
};

export function MobileNav({ enlaces, activo }: MobileNavProps) {
  const [abierto, setAbierto] = useState(false);
  const reducirMovimiento = useReducedMotion();

  // Cerrar menú al hacer click en un enlace
  const manejarClick = () => {
    setAbierto(false);
  };

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const manejarScroll = () => setAbierto(false);
    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  return (
    <div className="flex md:hidden">
      {/* Boton de hamburguesa */}
      <motion.button
        onClick={() => setAbierto(!abierto)}
        className="border-outline-variant text-on-surface hover:bg-surface-bright inline-flex items-center justify-center rounded border p-2.5 transition-colors duration-150"
        aria-label="Abrir menú"
        aria-expanded={abierto}
        animate={{ rotate: abierto ? 90 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {abierto ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </motion.button>

      {/* Panel desplegable con AnimatePresence para animar salida */}
      <AnimatePresence>
        {abierto && (
          <motion.div
            className="border-outline-variant bg-background absolute top-16 left-0 right-0 z-40 border-b shadow-lg"
            initial={reducirMovimiento ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducirMovimiento ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="mx-auto flex max-w-7xl flex-col space-y-1 px-6 py-4">
              {enlaces.map(({ etiqueta, href }, index) => {
                const esActivo = href.slice(1) === activo;
                return (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={manejarClick}
                    aria-current={esActivo ? 'true' : undefined}
                    className={`rounded px-3 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-150 ${
                      esActivo
                        ? 'bg-primary/10 text-primary'
                        : 'text-on-surface-variant hover:bg-surface hover:text-on-surface'
                    }`}
                    initial={reducirMovimiento ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reducirMovimiento ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: reducirMovimiento ? 0 : index * 0.05, duration: 0.2 }}
                  >
                    {etiqueta}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
