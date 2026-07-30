// botão reto com seta que desliza no hover
export default function Botao({ href, children, escuro = false, externo = false, grande = false }) {
  return (
    <a
      href={href}
      {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center font-mono font-bold transition-colors ${
        grande ? 'gap-4 px-8 py-5 text-lg sm:px-10 sm:py-6 sm:text-2xl' : 'gap-3 px-6 py-3.5'
      } ${
        escuro
          ? 'bg-marinho text-white hover:bg-marinho-claro'
          : 'bg-amarelo text-marinho hover:bg-turquesa'
      }`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1.5">
        →
      </span>
    </a>
  )
}
