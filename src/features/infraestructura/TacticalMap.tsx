/*
 * Panel del mapa tactico de corredores troncales de Mexico. Portado fiel del
 * mock Nocturne: cabecera HUD, silueta SVG del pais con corredores primarios,
 * nodos con etiquetas y checkpoints, HUDs flotantes y leyenda.
 *
 * NOTA DE COLOR: como en el fondo del Hero, el SVG y sus filtros usan valores
 * hex directos porque un atributo `stroke`/`fill` no puede leer una utilidad de
 * Tailwind. Coinciden con los tokens (primary #7c9df0, success #6ee7b7,
 * outline #2d3748, surface-recessed #161b24). El landmass usa #181f2a, un tono
 * intermedio propio del mock sin rol equivalente; se conserva como valor.
 *
 * El barrido de radar y el pulso de nodos los apaga la guarda de reduced-motion.
 */
import { Waypoints } from 'lucide-react';

export function TacticalMap() {
  return (
    <div className="flex flex-col lg:col-span-7">
      <div className="group bg-surface-recessed border-outline-variant relative flex h-full min-h-[560px] flex-col justify-between overflow-hidden rounded-sm border p-5 sm:p-6">
        {/* Cabecera HUD */}
        <div className="border-outline-variant relative z-10 flex flex-wrap items-center justify-between gap-3 border-b pb-4">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
              <span className="bg-success relative inline-flex h-2.5 w-2.5 rounded-full" />
            </span>
            <span className="text-on-surface font-mono text-xs font-semibold tracking-wider uppercase">
              Radar de corredores troncales
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-success/15 border-success/30 rounded-sm border px-2 py-0.5">
              <span className="text-success font-mono text-[10px] font-semibold tracking-wider uppercase">
                Enlace activo
              </span>
            </div>
            <div className="text-on-surface-placeholder hidden font-mono text-[11px] tabular-nums sm:inline-block">
              23.6345° N, 102.5528° W
            </div>
          </div>
        </div>

        {/* Centro visual: mapa + radar de fondo */}
        <div className="relative flex flex-1 items-center justify-center py-6 select-none">
          {/* Radar de fondo */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
            <div className="border-outline-variant relative flex h-[360px] w-[360px] items-center justify-center rounded-full border sm:h-[440px] sm:w-[440px]">
              <div className="border-outline-variant/60 h-[240px] w-[240px] rounded-full border" />
              <div className="border-outline-variant/40 h-[120px] w-[120px] rounded-full border" />
              <div className="animate-radar-rotate absolute inset-0 origin-center rounded-full bg-gradient-to-tr from-[#7c9df0]/0 via-[#7c9df0]/5 to-[#7c9df0]/20" />
            </div>
          </div>

          {/* SVG del mapa */}
          <svg
            className="relative z-10 h-auto max-h-[420px] w-full drop-shadow-2xl"
            fill="none"
            viewBox="0 0 960 620"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter height="140%" id="glow-periwinkle" width="140%" x="-20%" y="-20%">
                <feGaussianBlur result="blur" stdDeviation="3" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter height="140%" id="glow-emerald" width="140%" x="-20%" y="-20%">
                <feGaussianBlur result="blur" stdDeviation="3.5" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="routeGrad1" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#7c9df0" />
                <stop offset="100%" stopColor="#6ee7b7" />
              </linearGradient>
            </defs>

            {/* Silueta: Baja California */}
            <path
              d="M78 62 L132 128 L170 196 L195 248 L220 310 L204 330 L180 270 L146 210 L108 140 L68 76 Z"
              fill="#1c222e"
              stroke="#2d3748"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M222 318 L244 374 L258 418 L242 414 L226 360 Z"
              fill="#1c222e"
              stroke="#2d3748"
              strokeWidth="1.2"
            />
            {/* Mexico continental */}
            <path
              d="M210 92 L310 94 L378 126 L468 120 L532 168 L608 174 L662 258 L636 294 L590 286 L530 338 L544 380 L618 398 L690 410 L742 432 L788 438 L834 402 L888 386 L912 414 L894 456 L830 464 L796 502 L748 518 L686 480 L622 474 L554 498 L474 482 L426 448 L374 406 L320 334 L266 250 L234 162 Z"
              fill="#181f2a"
              stroke="#2d3748"
              strokeLinejoin="round"
              strokeWidth="1.8"
            />
            {/* Peninsula de Yucatan */}
            <path
              d="M788 438 L840 398 L896 384 L916 414 L884 452 L830 460 Z"
              fill="#1c222e"
              stroke="#2d3748"
              strokeWidth="1.2"
            />
            {/* Divisiones regionales internas */}
            <path
              d="M378 126 L380 240 L450 310"
              stroke="#242e3d"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            <path
              d="M532 168 L530 260 L480 340"
              stroke="#242e3d"
              strokeDasharray="3 3"
              strokeWidth="1"
            />
            <path
              d="M608 174 L576 270 L580 380"
              stroke="#242e3d"
              strokeDasharray="3 3"
              strokeWidth="1"
            />

            {/* Corredores troncales primarios */}
            {/* 1. Corredor Centro - NAFTA */}
            <path
              d="M544 380 L526 352 L518 304 L576 242 L606 182"
              filter="url(#glow-periwinkle)"
              stroke="#7c9df0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
            />
            <path
              d="M544 380 L526 352 L518 304 L576 242 L606 182"
              opacity="0.8"
              stroke="#ffffff"
              strokeDasharray="6 4"
              strokeLinecap="round"
              strokeWidth="1"
            />
            {/* 2. Corredor Pacifico & Bajio */}
            <path
              d="M544 380 L470 366 L422 360 L388 400"
              filter="url(#glow-emerald)"
              stroke="#6ee7b7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            <path
              d="M470 366 L410 312 L350 246"
              opacity="0.7"
              stroke="#7c9df0"
              strokeDasharray="4 3"
              strokeLinecap="round"
              strokeWidth="2"
            />
            {/* 3. Corredor Golfo & Sureste */}
            <path
              d="M544 380 L582 392 L640 404 L716 432 L788 440"
              filter="url(#glow-periwinkle)"
              stroke="url(#routeGrad1)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
            {/* 4. Enlace Norte Centro */}
            <path
              d="M518 304 L490 248 L460 210 L378 128"
              opacity="0.85"
              stroke="#7c9df0"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            {/* 5. Corredor Noroeste */}
            <path
              d="M470 366 L350 246 L278 174 L170 120 L84 66"
              opacity="0.65"
              stroke="#7c9df0"
              strokeDasharray="5 4"
              strokeLinecap="round"
              strokeWidth="1.8"
            />

            {/* Nodos estrategicos */}
            {/* CDMX */}
            <g transform="translate(544, 380)">
              <circle className="animate-node-pulse" fill="#7c9df0" opacity="0.2" r="12" />
              <circle fill="#161b24" r="6" stroke="#7c9df0" strokeWidth="2" />
              <circle fill="#6ee7b7" r="2.5" />
              <text
                fill="#e2e8f0"
                fontFamily="ui-monospace, monospace"
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.05em"
                x="10"
                y="4"
              >
                CDMX [C5/HQ]
              </text>
            </g>
            {/* Queretaro */}
            <g transform="translate(526, 352)">
              <circle fill="#7c9df0" opacity="0.25" r="9" />
              <circle fill="#7c9df0" r="4" />
              <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="9" x="8" y="-4">
                QRO
              </text>
            </g>
            {/* San Luis Potosi */}
            <g transform="translate(518, 304)">
              <circle fill="#6ee7b7" opacity="0.2" r="8" />
              <circle fill="#6ee7b7" r="4" />
              <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="9" x="8" y="3">
                SLP
              </text>
            </g>
            {/* Monterrey */}
            <g transform="translate(576, 242)">
              <circle className="animate-node-pulse" fill="#7c9df0" opacity="0.2" r="10" />
              <circle fill="#161b24" r="5" stroke="#7c9df0" strokeWidth="1.8" />
              <circle fill="#7c9df0" r="2" />
              <text
                fill="#e2e8f0"
                fontFamily="ui-monospace, monospace"
                fontSize="9.5"
                fontWeight="600"
                x="10"
                y="3"
              >
                MTY
              </text>
            </g>
            {/* Nuevo Laredo */}
            <g transform="translate(606, 182)">
              <circle className="animate-node-pulse" fill="#6ee7b7" opacity="0.3" r="9" />
              <circle fill="#6ee7b7" r="4.5" />
              <text
                fill="#6ee7b7"
                fontFamily="ui-monospace, monospace"
                fontSize="9.5"
                fontWeight="600"
                x="9"
                y="3"
              >
                N. LAREDO
              </text>
            </g>
            {/* Guadalajara */}
            <g transform="translate(470, 366)">
              <circle fill="#7c9df0" opacity="0.2" r="9" />
              <circle fill="#161b24" r="4.5" stroke="#7c9df0" strokeWidth="1.8" />
              <circle fill="#7c9df0" r="2" />
              <text fill="#e2e8f0" fontFamily="ui-monospace, monospace" fontSize="9" x="-32" y="14">
                GDL
              </text>
            </g>
            {/* Manzanillo */}
            <g transform="translate(388, 400)">
              <circle fill="#6ee7b7" opacity="0.2" r="6" />
              <circle fill="#6ee7b7" r="3.5" />
              <text
                fill="#94a3b8"
                fontFamily="ui-monospace, monospace"
                fontSize="8.5"
                x="-58"
                y="4"
              >
                PTO. MZLO
              </text>
            </g>
            {/* Puebla */}
            <g transform="translate(582, 392)">
              <circle fill="#7c9df0" r="3.5" />
              <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="8.5" x="7" y="10">
                PUE
              </text>
            </g>
            {/* Veracruz */}
            <g transform="translate(640, 404)">
              <circle fill="#6ee7b7" opacity="0.3" r="5" />
              <circle fill="#6ee7b7" r="3.5" />
              <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="8.5" x="8" y="2">
                VER
              </text>
            </g>
            {/* Ciudad Juarez */}
            <g transform="translate(378, 128)">
              <circle fill="#7c9df0" r="4" />
              <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="9" x="8" y="3">
                CD. JUÁREZ
              </text>
            </g>
            {/* Tijuana */}
            <g transform="translate(84, 66)">
              <circle fill="#7c9df0" r="4" />
              <text fill="#94a3b8" fontFamily="ui-monospace, monospace" fontSize="9" x="8" y="3">
                TIJUANA
              </text>
            </g>

            {/* Checkpoints intermedios (rombos) */}
            <g transform="translate(535, 366)">
              <polygon fill="#6ee7b7" points="0,-3 3,0 0,3 -3,0" />
            </g>
            <g transform="translate(550, 270)">
              <polygon fill="#6ee7b7" points="0,-3 3,0 0,3 -3,0" />
            </g>
            <g transform="translate(591, 212)">
              <polygon fill="#6ee7b7" points="0,-3 3,0 0,3 -3,0" />
            </g>
            <g transform="translate(608, 398)">
              <polygon fill="#6ee7b7" points="0,-3 3,0 0,3 -3,0" />
            </g>
            <g transform="translate(444, 363)">
              <polygon fill="#6ee7b7" points="0,-3 3,0 0,3 -3,0" />
            </g>
          </svg>

          {/* HUDs flotantes */}
          <div className="bg-background/90 border-outline-variant absolute top-10 right-4 hidden items-center space-x-2 rounded-sm border px-2.5 py-1.5 shadow-lg backdrop-blur sm:right-6 sm:flex">
            <span className="bg-primary h-1.5 w-1.5 rounded-full" />
            <span className="text-on-surface font-mono text-[10px] tracking-tight">
              CORREDOR NAFTA: VIGILADO
            </span>
          </div>
          <div className="bg-background/90 border-outline-variant absolute bottom-16 left-4 flex items-center space-x-2 rounded-sm border px-2.5 py-1.5 shadow-lg backdrop-blur sm:left-6">
            <span className="bg-success h-1.5 w-1.5 rounded-full" />
            <span className="text-on-surface font-mono text-[10px] tracking-tight">
              CHECKPOINT KM 148: DESPEJADO
            </span>
          </div>
          <div className="bg-background/90 border-outline-variant absolute right-4 bottom-28 hidden items-center space-x-2 rounded-sm border px-2.5 py-1.5 shadow-lg backdrop-blur sm:right-10 md:flex">
            <Waypoints className="text-primary h-3 w-3" />
            <span className="text-on-surface font-mono text-[10px] tracking-tight">
              CONEXIÓN C4/C5: SINCRONIZADA
            </span>
          </div>
        </div>

        {/* Leyenda */}
        <div className="border-outline-variant text-on-surface-variant relative z-10 mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t pt-3.5 font-mono text-[11px]">
          <div className="flex items-center space-x-2">
            <span className="bg-primary inline-block h-1 w-3 rounded-sm shadow-[0_0_6px_#7c9df0]" />
            <span>Ruta troncal primaria</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-success inline-block h-2 w-2 rounded-full shadow-[0_0_6px_#6ee7b7]" />
            <span>Punto de verificación activo</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="border-primary/60 bg-primary/20 inline-block h-2 w-2 rounded-sm border" />
            <span>Zona de cobertura inmediata</span>
          </div>
        </div>
      </div>
    </div>
  );
}
