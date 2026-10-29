/*
 * Tarjeta de una edicion del newsletter. Muestra portada, periodo, titulo y
 * resumen, y enlaza al archivo estatico del informe (abre en pestana nueva, el
 * mismo criterio que los documentos legales del footer).
 *
 * El color se nombra por rol (bg-surface, text-on-surface, border-outline-...),
 * nunca por valor: los tokens viven en src/styles/tokens.css.
 */
import { ArrowUpRight } from 'lucide-react';
import type { EdicionNewsletter } from '@/features/newsletter/newsletter-data';

type NewsletterCardProps = {
  edicion: EdicionNewsletter;
};

export function NewsletterCard({ edicion }: NewsletterCardProps) {
  const { mes, anio, titulo, resumen, portada, hrefEspanol, hrefIngles } = edicion;

  return (
    <article className="group bg-surface border-outline-variant hover:border-primary/50 relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-colors duration-200">
      {/* Portada: enlace principal al informe en espanol */}
      <a
        href={hrefEspanol}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-surface-recessed relative block aspect-[4/3] overflow-hidden"
        aria-label={`Abrir ${titulo} — ${mes} ${anio}`}
      >
        <img
          src={portada}
          alt={`Portada del informe de ${mes} ${anio}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
        <span className="bg-primary text-on-primary absolute top-3 left-3 rounded px-2 py-1 text-[11px] font-semibold tracking-wider uppercase">
          {mes} {anio}
        </span>
      </a>

      {/* Cuerpo */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-on-surface text-lg leading-snug font-bold tracking-tight">
          <a
            href={hrefEspanol}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-150"
          >
            {titulo}
          </a>
        </h3>
        <p className="text-on-surface-variant flex-1 text-sm leading-relaxed">{resumen}</p>

        {/* Acciones: idioma del informe */}
        <div className="border-outline-variant/60 mt-2 flex items-center gap-4 border-t pt-4 text-[13px]">
          <a
            href={hrefEspanol}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-hover inline-flex items-center gap-1 font-semibold transition-colors duration-150"
          >
            Leer en español
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <span className="text-outline-variant" aria-hidden="true">
            /
          </span>
          <a
            href={hrefIngles}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant hover:text-on-surface inline-flex items-center gap-1 transition-colors duration-150"
          >
            English
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
