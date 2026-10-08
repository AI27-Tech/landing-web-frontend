/*
 * Formulario de solicitud de cotizacion. Portado del mock Nocturne.
 *
 * ENVIO POR mailto (sitio estatico, sin backend): al enviar se abre el cliente
 * de correo del usuario con un mensaje prellenado a partir de los campos. El
 * destino se reparte entre las dos cuentas de ventas (ver DESTINOS) con un
 * round-robin por navegador (localStorage) de arranque aleatorio: cada visitante
 * alterna estrictamente entre una cuenta y la otra, pero no todos empiezan por
 * la misma, de modo que el reparto queda lo mas parejo posible sin servidor.
 *
 * Limite conocido: el reparto solo puede contarse por navegador; no hay un
 * contador global. Si en el futuro hay backend, este handler es el unico punto
 * que cambia.
 */
import { ArrowRight, Lock } from 'lucide-react';
import type { FormEvent } from 'react';

// Cuentas de ventas que reciben las cotizaciones, en orden de indice (0 y 1).
const DESTINOS = ['cmatus@ai27.com', 'esamper@ai27.com'] as const;
const LS_CLAVE = 'ai27:cotizacion:contador';

function elegirDestino(): string {
  try {
    const almacen = window.localStorage;
    const previo = almacen.getItem(LS_CLAVE);
    const contador = previo === null ? Math.floor(Math.random() * 2) : Number(previo);
    const seguro = Number.isFinite(contador) ? contador : 0;
    almacen.setItem(LS_CLAVE, String(seguro + 1));
    return seguro % 2 === 0 ? DESTINOS[0] : DESTINOS[1];
  } catch {
    return Math.random() < 0.5 ? DESTINOS[0] : DESTINOS[1];
  }
}

const camposTexto = [
  {
    id: 'full-name',
    name: 'fullName',
    label: 'Nombre completo *',
    type: 'text',
    placeholder: 'Lic. Carlos Mendoza',
  },
  {
    id: 'company-name',
    name: 'companyName',
    label: 'Empresa / Razón Social *',
    type: 'text',
    placeholder: 'Logística Transmex S.A.',
  },
  {
    id: 'email',
    name: 'email',
    label: 'Correo corporativo *',
    type: 'email',
    placeholder: 'carlos@transmex.com',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Teléfono / Móvil *',
    type: 'tel',
    placeholder: '+52 55 1234 5678',
  },
] as const;

const opcionesCarga = [
  { value: 'electronica-bajio', label: 'Electrónica & Retail / Corredor Bajío - Norte (NAFTA)' },
  { value: 'farma-centro', label: 'Farmacéutica y Cadena de Frío / Centro - Occidente' },
  { value: 'alimentos-nacional', label: 'Alimentos, Bebidas y Consumo Masivo / Rutas Nacionales' },
  {
    value: 'quimicos-puerto',
    label: 'Químicos y Material Peligroso / Corredor Portuario (Manzanillo / Veracruz)',
  },
  { value: 'automotriz', label: 'Automotriz & Tier 1 / Puebla - Bajío - Monterrey' },
  { value: 'carga-general', label: 'Carga General / Corredores Mixtos' },
] as const;

const opcionesVolumen = [
  { value: '10-50', label: '10 a 50 viajes / mes (Operación focalizada)' },
  { value: '50-200', label: '50 a 200 viajes / mes (Flota media)' },
  { value: '200-500', label: '200 a 500 viajes / mes (Alta densidad logística)' },
  { value: '500+', label: '+500 viajes / mes (Operador logístico / Empresa global)' },
] as const;

const inputClase =
  'w-full bg-background border-outline-variant text-on-surface placeholder-on-surface-placeholder/40 focus:border-primary focus:ring-primary rounded border px-3.5 py-2.5 text-sm transition-colors focus:ring-1 focus:outline-none';

const labelClase = 'mb-1.5 block text-[11px] tracking-wider text-on-surface-variant uppercase';

export function QuoteForm() {
  function manejarEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const form = evento.currentTarget;
    const datos = new FormData(form);

    // Para los <select>, el texto de la opcion elegida es mas legible que su value.
    const textoOpcion = (name: string) => {
      const el = form.elements.namedItem(name);
      if (el instanceof HTMLSelectElement) {
        return el.options[el.selectedIndex]?.text ?? '';
      }
      return String(datos.get(name) ?? '');
    };

    const nombre = String(datos.get('fullName') ?? '');
    const empresa = String(datos.get('companyName') ?? '');
    const correo = String(datos.get('email') ?? '');
    const telefono = String(datos.get('phone') ?? '');
    const carga = textoOpcion('cargoType');
    const volumen = textoOpcion('monthlyVolume');

    const destino = elegirDestino();
    const asunto = `Solicitud de cotización — ${empresa || nombre || 'AI27'}`;
    const cuerpo = [
      'Nueva solicitud de cotización desde el sitio AI27.',
      '',
      `Nombre completo: ${nombre}`,
      `Empresa / Razón social: ${empresa}`,
      `Correo corporativo: ${correo}`,
      `Teléfono / Móvil: ${telefono}`,
      `Tipo de carga y corredores: ${carga}`,
      `Número estimado de viajes al mes: ${volumen}`,
    ].join('\n');

    const mailto = `mailto:${destino}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    // Abre el cliente de correo del usuario con la solicitud prellenada.
    window.location.href = mailto;
  }

  return (
    <div>
      <div className="bg-surface border-outline-variant relative rounded border p-6 shadow-lg sm:p-7">
        {/* Encabezado de la tarjeta */}
        <div className="border-outline-variant mb-5 flex items-center justify-between border-b pb-5">
          <div>
            <h3 className="text-on-surface text-base font-semibold tracking-tight">
              Solicitud de cotización técnica
            </h3>
            <p className="text-on-surface-variant mt-0.5 text-xs">
              Evaluación de cobertura, tecnología y custodia en ruta
            </p>
          </div>
          <div className="bg-background border-outline-variant text-success flex items-center gap-1.5 rounded border px-2.5 py-1 text-[10px] tracking-widest uppercase">
            <span className="bg-success status-pulse h-1.5 w-1.5 rounded-full" />
            <span>Cabina de ventas activa</span>
          </div>
        </div>

        <form className="space-y-4" onSubmit={manejarEnvio}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {camposTexto.map((campo) => (
              <div key={campo.id}>
                <label className={labelClase} htmlFor={campo.id}>
                  {campo.label}
                </label>
                <input
                  className={campo.type === 'tel' ? `${inputClase} tabular-nums` : inputClase}
                  id={campo.id}
                  name={campo.name}
                  placeholder={campo.placeholder}
                  type={campo.type}
                  required
                />
              </div>
            ))}
          </div>

          {/* Tipo de carga */}
          <div>
            <label className={labelClase} htmlFor="cargo-type">
              Tipo de carga y corredores principales *
            </label>
            <select
              className={inputClase}
              id="cargo-type"
              name="cargoType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Seleccionar categoría logística
              </option>
              {opcionesCarga.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>

          {/* Volumen mensual */}
          <div>
            <label className={labelClase} htmlFor="monthly-volume">
              Número estimado de viajes al mes *
            </label>
            <select
              className={inputClase}
              id="monthly-volume"
              name="monthlyVolume"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Seleccionar volumen operativo
              </option>
              {opcionesVolumen.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>

          {/* Boton primario */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-hover text-on-primary flex w-full items-center justify-center gap-2.5 rounded px-6 py-3.5 text-sm font-semibold tracking-tight shadow-md transition-all duration-150 active:scale-[0.99]"
            >
              <span>Cotizar servicio</span>
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
          </div>

          {/* Nota legal */}
          <div className="text-on-surface-variant flex items-start gap-2 pt-2 text-[11px] leading-tight">
            <Lock className="text-primary mt-0.5 h-[15px] w-[15px] shrink-0" />
            <p>
              Tus datos operativos están protegidos bajo cifrado AES-256 y acuerdos de
              confidencialidad estricta. AI27 no comparte información de rutas con terceros.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
