// Linha-d'água: curva fluida usada como divisor de seções (guia de marca, item 3.4)
export default function Onda({ de = 'transparent', para = '#ffffff', invertida = false }) {
  return (
    <div aria-hidden="true" className={invertida ? 'rotate-180' : ''} style={{ backgroundColor: de, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-12 w-full sm:h-20">
        <path
          d="M0,48 C240,88 480,8 720,32 C960,56 1200,80 1440,40 L1440,90 L0,90 Z"
          fill={para}
        />
      </svg>
    </div>
  )
}
