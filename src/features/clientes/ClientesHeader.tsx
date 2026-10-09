export function ClientesHeader() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">

      <h2 className="text-on-surface text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        Las cadenas de suministro más importantes de México{' '}
        <span className="bg-gradient-to-r from-[#7c9df0] via-[#94b5ff] to-[#6ee7b7] bg-clip-text text-transparent">
          confían en AI27
        </span>
      </h2>

      <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed sm:text-lg">
        Operamos la seguridad de empresas líderes en transporte, manufactura y distribución a lo
        largo de los corredores troncales del país.
      </p>
    </div>
  );
}
