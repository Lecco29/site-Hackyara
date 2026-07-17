// Marcador de seção com o "//" da assinatura oficial do logo
export default function Eyebrow({ children, clara = false }) {
  return (
    <p
      className={`font-display text-xs font-semibold uppercase tracking-[0.22em] ${
        clara ? 'text-turquesa' : 'text-turquesa-escuro'
      }`}
    >
      <span aria-hidden="true">//&nbsp;</span>
      {children}
    </p>
  )
}
