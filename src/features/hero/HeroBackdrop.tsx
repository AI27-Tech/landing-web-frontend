/*
 * Fondo tactico del Hero: rejilla de ingenieria, radar concentrico con barrido
 * conico, coordenadas geodesicas y la constelacion de nodos logisticos de
 * Mexico. Portado fiel del mock Nocturne (Hero, variante tactica).
 *
 * NOTA DE COLOR: el SVG y los gradientes de rejilla usan valores hex directos.
 * Un atributo `stroke`/`fill` de SVG o un `linear-gradient` en background no
 * pueden referenciar una utilidad de Tailwind ni una variable de rol de forma
 * portable, asi que aqui se replican los valores del mock. Es la misma
 * excepcion documentada en globals.css para los patrones de rejilla; el resto
 * de la landing nombra el color por rol. Los hex coinciden con los tokens:
 * primary #7c9df0, success #6ee7b7, outline #2d3748, canvas #0e1117.
 *
 * Es decorativo: aria-hidden y pointer-events-none. La guarda global de
 * reduced-motion (globals.css) apaga el barrido, el pulso y el flujo.
 */
export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* Rejilla milimetrica de ingenieria */}
      <div className="bg-engineering-grid absolute inset-0 opacity-80" />

      {/* Radar tactico: anillos concentricos, cruz y barrido conico */}
      <div className="absolute top-1/2 left-[30%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-50">
        <div className="absolute inset-0 rounded-full border border-[#7c9df0]/20" />
        <div className="absolute inset-[90px] rounded-full border border-[#7c9df0]/25" />
        <div className="absolute inset-[180px] rounded-full border border-dashed border-[#7c9df0]/25" />
        <div className="absolute inset-[270px] rounded-full border border-[#7c9df0]/30" />
        <div className="absolute inset-[330px] rounded-full border border-[#6ee7b7]/40" />
        {/* Cruz */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#7c9df0]/30 to-transparent" />
        <div className="absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#7c9df0]/30 to-transparent" />
        {/* Barrido conico */}
        <div
          className="animate-radar-sweep-conic absolute inset-[90px] rounded-full"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(124, 157, 240, 0.18) 0deg, rgba(124, 157, 240, 0.04) 45deg, transparent 90deg, transparent 360deg)',
          }}
        />
      </div>

      {/* Coordenadas geodesicas y marcadores de telemetria */}
      <div className="absolute top-24 left-8 hidden flex-col gap-1 font-mono text-[9px] tracking-wider text-[#7c9df0]/60 sm:flex">
        <span>+ GRID: 23°38&apos;N 101°58&apos;W</span>
        <span>+ AZIMUTH: 342.6° MIL-STD</span>
        <span className="text-[#6ee7b7]/70">
          CALIBRATED: LEO-SAT 0.08ms | ZONE: CORREDOR-CENTRAL
        </span>
      </div>
      <div className="absolute top-24 right-8 hidden text-right font-mono text-[9px] tracking-widest text-[#94a3b8]/40 lg:block">
        <div>ENC: AES-256-GCM / FREQ 14.2 GHz</div>
        <div>SURVEILLANCE: ACTIVE REAL-TIME</div>
      </div>

      {/* Red estrategica de transporte y constelacion de telemetria */}
      <svg
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="link-emerald-periwinkle" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#7c9df0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7c9df0" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient cx="50%" cy="50%" id="node-halo-blue" r="50%">
            <stop offset="0%" stopColor="#7c9df0" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#7c9df0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#7c9df0" stopOpacity="0" />
          </radialGradient>
          <radialGradient cx="50%" cy="50%" id="node-halo-green" r="50%">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#6ee7b7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0" />
          </radialGradient>
          <filter height="160%" id="tactical-glow" width="160%" x="-30%" y="-30%">
            <feGaussianBlur result="blur" stdDeviation="3.5" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Corredores arteriales base (estaticos) */}
        <path d="M160 180 L390 210" stroke="#7c9df0" strokeOpacity="0.25" strokeWidth="1.2" />
        <path d="M390 210 L640 330" stroke="url(#link-emerald-periwinkle)" strokeWidth="1.4" />
        <path
          d="M640 330 L560 490"
          filter="url(#tactical-glow)"
          stroke="#7c9df0"
          strokeOpacity="0.45"
          strokeWidth="1.8"
        />
        <path d="M560 490 L430 510" stroke="#7c9df0" strokeOpacity="0.35" strokeWidth="1.2" />
        <path d="M430 510 L360 580" stroke="#7c9df0" strokeOpacity="0.3" strokeWidth="1.2" />
        <path
          d="M560 490 L610 580"
          filter="url(#tactical-glow)"
          stroke="#7c9df0"
          strokeOpacity="0.55"
          strokeWidth="1.8"
        />
        <path d="M610 580 L750 620" stroke="url(#link-emerald-periwinkle)" strokeWidth="1.4" />
        <path d="M430 510 L610 580" stroke="#7c9df0" strokeOpacity="0.25" strokeWidth="1" />
        <path d="M640 330 L750 620" stroke="#2d3748" strokeOpacity="0.4" strokeWidth="1" />

        {/* Flujo de paquetes de telemetria (animado) */}
        <path
          className="animate-dash-flow"
          d="M390 210 L640 330"
          stroke="#6ee7b7"
          strokeOpacity="0.8"
          strokeWidth="1.6"
        />
        <path
          className="animate-dash-flow"
          d="M640 330 L560 490"
          stroke="#7c9df0"
          strokeOpacity="0.9"
          strokeWidth="1.8"
        />
        <path
          className="animate-dash-flow"
          d="M560 490 L610 580"
          stroke="#6ee7b7"
          strokeOpacity="0.95"
          strokeWidth="2"
        />
        <path
          className="animate-dash-flow"
          d="M610 580 L750 620"
          stroke="#7c9df0"
          strokeOpacity="0.75"
          strokeWidth="1.4"
        />

        {/* Tijuana */}
        <circle
          className="animate-node-glow"
          cx="160"
          cy="180"
          fill="url(#node-halo-blue)"
          r="40"
        />
        <circle cx="160" cy="180" fill="#7c9df0" fillOpacity="0.8" r="3.5" />
        <text
          fill="#94a3b8"
          fillOpacity="0.6"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          x="172"
          y="184"
        >
          TIJ_HUB [32.51° N]
        </text>

        {/* Ciudad Juarez */}
        <circle
          className="animate-node-glow"
          cx="390"
          cy="210"
          fill="url(#node-halo-blue)"
          r="35"
          style={{ animationDelay: '1.4s' }}
        />
        <circle cx="390" cy="210" fill="#7c9df0" fillOpacity="0.75" r="3.5" />
        <text
          fill="#94a3b8"
          fillOpacity="0.55"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          x="402"
          y="214"
        >
          CJS_PORT [31.69° N]
        </text>

        {/* Monterrey (nodo critico activo) */}
        <circle
          className="animate-node-glow"
          cx="640"
          cy="330"
          fill="url(#node-halo-green)"
          r="55"
          style={{ animationDelay: '0.7s' }}
        />
        <circle
          className="animate-ping-slow"
          cx="640"
          cy="330"
          r="16"
          stroke="#6ee7b7"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        <circle cx="640" cy="330" fill="#6ee7b7" filter="url(#tactical-glow)" r="5" />
        <text
          fill="#e2e8f0"
          fillOpacity="0.85"
          fontFamily="monospace"
          fontSize="10"
          fontWeight="600"
          letterSpacing="1"
          x="654"
          y="334"
        >
          MTY_CORREDOR [25.68° N]
        </text>

        {/* Queretaro / Bajio */}
        <circle
          className="animate-node-glow"
          cx="560"
          cy="490"
          fill="url(#node-halo-blue)"
          r="50"
          style={{ animationDelay: '2.1s' }}
        />
        <circle
          className="animate-ping-slow"
          cx="560"
          cy="490"
          r="12"
          stroke="#7c9df0"
          strokeOpacity="0.35"
          strokeWidth="1"
        />
        <circle cx="560" cy="490" fill="#7c9df0" filter="url(#tactical-glow)" r="4.5" />
        <text
          fill="#94a3b8"
          fillOpacity="0.75"
          fontFamily="monospace"
          fontSize="9.5"
          fontWeight="500"
          letterSpacing="1"
          x="574"
          y="494"
        >
          QRO_NODE [20.58° N]
        </text>

        {/* Guadalajara */}
        <circle
          className="animate-node-glow"
          cx="430"
          cy="510"
          fill="url(#node-halo-blue)"
          r="40"
          style={{ animationDelay: '1.2s' }}
        />
        <circle cx="430" cy="510" fill="#7c9df0" fillOpacity="0.8" r="4" />
        <text
          fill="#94a3b8"
          fillOpacity="0.6"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          x="350"
          y="525"
        >
          GDL_LOG [20.65° N]
        </text>

        {/* Manzanillo */}
        <circle
          className="animate-node-glow"
          cx="360"
          cy="580"
          fill="url(#node-halo-blue)"
          r="40"
          style={{ animationDelay: '1.8s' }}
        />
        <circle cx="360" cy="580" fill="#7c9df0" fillOpacity="0.75" r="3.5" />
        <text
          fill="#94a3b8"
          fillOpacity="0.55"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          x="265"
          y="594"
        >
          ZLO_PACIFIC [19.05° N]
        </text>

        {/* Ciudad de Mexico (nucleo central) */}
        <circle
          className="animate-node-glow"
          cx="610"
          cy="580"
          fill="url(#node-halo-green)"
          r="70"
        />
        <circle
          className="animate-ping-slow"
          cx="610"
          cy="580"
          r="22"
          stroke="#6ee7b7"
          strokeOpacity="0.45"
          strokeWidth="1.2"
        />
        <circle cx="610" cy="580" fill="#6ee7b7" filter="url(#tactical-glow)" r="5.5" />
        <text
          fill="#e2e8f0"
          fillOpacity="0.9"
          fontFamily="monospace"
          fontSize="10.5"
          fontWeight="600"
          letterSpacing="1"
          x="626"
          y="584"
        >
          CDMX_CENTRAL [19.43° N]
        </text>

        {/* Veracruz */}
        <circle
          className="animate-node-glow"
          cx="750"
          cy="620"
          fill="url(#node-halo-blue)"
          r="40"
          style={{ animationDelay: '2.6s' }}
        />
        <circle cx="750" cy="620" fill="#7c9df0" fillOpacity="0.7" r="3.5" />
        <text
          fill="#94a3b8"
          fillOpacity="0.55"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1"
          x="762"
          y="624"
        >
          VER_GULF [19.17° N]
        </text>

        {/* Enlaces satelitales LEO */}
        <g transform="translate(880, 160)">
          <polygon fill="#7c9df0" opacity="0.85" points="0,-4 4,0 0,4 -4,0" />
          <line opacity="0.7" stroke="#7c9df0" strokeWidth="0.75" x1="-12" x2="12" y1="0" y2="0" />
          <path
            d="M0 4 L-240 170"
            stroke="#7c9df0"
            strokeDasharray="2,4"
            strokeOpacity="0.25"
            strokeWidth="0.8"
          />
          <text fill="#7c9df0" fontFamily="monospace" fontSize="8" opacity="0.6" x="14" y="3">
            SAT-LEO_04 [AZ 48°]
          </text>
        </g>
        <g transform="translate(280, 120)">
          <polygon fill="#6ee7b7" opacity="0.85" points="0,-4 4,0 0,4 -4,0" />
          <line opacity="0.7" stroke="#6ee7b7" strokeWidth="0.75" x1="-12" x2="12" y1="0" y2="0" />
          <path
            d="M0 4 L110 90"
            stroke="#6ee7b7"
            strokeDasharray="2,4"
            strokeOpacity="0.25"
            strokeWidth="0.8"
          />
          <text fill="#6ee7b7" fontFamily="monospace" fontSize="8" opacity="0.6" x="14" y="3">
            SAT-LEO_09 [AZ 112°]
          </text>
        </g>
      </svg>

      {/* Vineta radial de contraste: garantiza la legibilidad del texto y el panel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 35% 45%, rgba(14, 17, 23, 0.72) 0%, rgba(14, 17, 23, 0.92) 80%, #0e1117 100%)',
        }}
      />
    </div>
  );
}
