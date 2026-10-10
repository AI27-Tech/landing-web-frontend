/*
 * Pantalla temporal de "En construccion". Ocupa toda la ventana y es lo unico
 * que se muestra mientras la landing esta en pausa: no se renderiza el header,
 * el footer ni ninguna de las secciones del mock. Para volver a publicar la
 * landing completa, se restaura la composicion original de `App.tsx`.
 *
 * Colores por rol (tokens de @ai27-tech/ui), nunca por valor. Sin dependencias
 * de scroll ni de Motion: no hay contenido que revelar.
 */
export function EnConstruccion() {
  return (
    <main className="bg-background text-on-surface flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="flex max-w-xl flex-col items-center gap-6">
        <span className="border-outline text-on-surface-variant rounded-full border px-4 py-1 text-xs font-medium tracking-[0.2em] uppercase">
          AI27
        </span>

        <h1 className="text-on-surface text-4xl font-semibold tracking-tight sm:text-5xl">
          Sitio en construcción
        </h1>

        <p className="text-on-surface-variant text-base leading-relaxed sm:text-lg">
          Estamos preparando esta página. Vuelve pronto para conocer el servicio de seguridad para
          transporte de carga de AI27.
        </p>
      </div>
    </main>
  );
}
