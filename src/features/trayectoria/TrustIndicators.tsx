/*
 * Indicadores institucionales de confianza: cuatro tarjetas (experiencia,
 * capital nacional, cobertura, centro de monitoreo) mas un pie de metadatos.
 * Portado del mock Nocturne. Iconos de lucide-react mapeados desde los SVG
 * genericos del mock.
 */
import { Check, Clock, Globe, MapPin, MonitorSmartphone, Zap } from 'lucide-react';
import type { ReactNode } from 'react';

type Indicador = {
  cifra: ReactNode;
  icono: ReactNode;
  iconoColor: string;
  titulo: string;
  descripcion: string;
  pie: ReactNode;
};

const indicadores: Indicador[] = [
  {
    cifra: (
      <>
        +25 <span className="text-primary text-2xl">Años</span>
      </>
    ),
    icono: <Clock className="h-5 w-5" />,
    iconoColor: 'text-primary',
    titulo: 'Años de experiencia',
    descripcion:
      'Liderazgo ininterrumpido asegurando las cadenas de suministro más exigentes de la industria nacional.',
    pie: (
      <span className="text-success flex items-center gap-1.5 font-mono text-[11px]">
        <Check className="h-3.5 w-3.5" />
        PIONEROS EN MÉXICO
      </span>
    ),
  },
  {
    cifra: '100%',
    icono: <Globe className="h-5 w-5" />,
    iconoColor: 'text-success',
    titulo: 'Empresa mexicana',
    descripcion:
      'Capital y talento nacional con conocimiento profundo de la topografía, legislación y entorno carretero de México.',
    pie: (
      <span className="text-primary flex items-center gap-1.5 font-mono text-[11px]">
        <Zap className="h-3.5 w-3.5" />
        TALENTO LOCAL // ALTO IMPACTO
      </span>
    ),
  },
  {
    cifra: (
      <span className="text-2xl lg:text-3xl">
        Cobertura <span className="text-primary">nacional</span>
      </span>
    ),
    icono: <MapPin className="h-5 w-5" />,
    iconoColor: 'text-primary',
    titulo: 'Cobertura nacional',
    descripcion:
      'Presencia operativa integral en los principales corredores logísticos, puertos mercantes y fronteras norte-sur.',
    pie: (
      <span className="text-success flex items-center gap-1.5 font-mono text-[11px]">
        <span className="bg-success h-2 w-2 rounded-full" />
        CORREDORES TRONCALES 100%
      </span>
    ),
  },
  {
    cifra: (
      <>
        24/7 <span className="text-success text-2xl">C4</span>
      </>
    ),
    icono: <MonitorSmartphone className="h-5 w-5" />,
    iconoColor: 'text-success',
    titulo: 'Centro de monitoreo propio',
    descripcion:
      'Infraestructura redundante propia, enlazada en tiempo real a fuerzas de seguridad y protocolos C4/C5.',
    pie: (
      <span className="text-primary flex items-center gap-1.5 font-mono text-[11px]">
        <span className="bg-primary h-2 w-2 animate-ping rounded-full" />
        TELEMETRÍA EN VIVO ACTIVA
      </span>
    ),
  },
];

export function TrustIndicators() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="text-on-surface-variant font-mono text-xs tracking-wider uppercase">
          Indicadores institucionales de confianza
        </span>
        <span className="text-on-surface-variant/60 font-mono text-[11px]">
          DATOS AUDITADOS • CIERRE 2024
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {indicadores.map((ind) => (
          <div
            key={ind.titulo}
            className="card-tactical bg-surface border-outline-variant flex flex-col justify-between rounded border p-6"
          >
            <div className="mb-4 flex items-start justify-between">
              <span className="text-on-surface font-mono text-3xl font-extrabold tracking-tight lg:text-4xl">
                {ind.cifra}
              </span>
              <div
                className={`bg-surface-recessed border-outline-variant flex h-9 w-9 items-center justify-center rounded border ${ind.iconoColor}`}
              >
                {ind.icono}
              </div>
            </div>
            <div>
              <h5 className="text-on-surface mb-1 text-sm font-semibold">{ind.titulo}</h5>
              <p className="text-on-surface-variant text-xs leading-relaxed">{ind.descripcion}</p>
            </div>
            <div className="border-outline-variant/50 mt-4 border-t pt-3">{ind.pie}</div>
          </div>
        ))}
      </div>

      {/* Pie de metadatos de ingenieria */}
      <div className="border-outline-variant/40 text-on-surface-variant/50 flex flex-col items-center justify-between border-t pt-4 font-mono text-xs sm:flex-row">
        <span>AI27 // PLATAFORMA DE SEGURIDAD PREDICTIVA • INFRAESTRUCTURA OPERATIVA</span>
        <div className="mt-2 flex items-center gap-4 sm:mt-0">
          <span>ENCRIPTACIÓN AES-256</span>
          <span>LATENCIA PROMEDIO: 18ms</span>
        </div>
      </div>
    </div>
  );
}
