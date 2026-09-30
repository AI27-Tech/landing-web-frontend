/*
 * Formulario de solicitud de cotizacion. Portado del mock Nocturne.
 *
 * DECISION ABIERTA (README, "A donde va el formulario de cotizacion"): el mock
 * hace event.preventDefault() + alert() porque no hay backend. Se conserva ese
 * comportamiento como placeholder EXPLICITO; no se inventa un endpoint, un
 * servicio de formularios ni un mailto. Cuando se decida el destino, este
 * handler es el unico punto que cambia.
 */
import { ArrowRight, Lock } from 'lucide-react';
import type { FormEvent } from 'react';

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
    // Placeholder del mock: sin backend. Ver la nota de decision abierta arriba.
    alert(
      'Solicitud registrada con éxito en cabina AI27. Un ingeniero de ruta te contactará en menos de 2 horas.',
    );
  }

  return (
    <div className="lg:col-span-6">
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
