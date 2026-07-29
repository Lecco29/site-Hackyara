import { useEffect, useRef, useState } from 'react'

// os dois banners são 2.97:1 e o quadro é 4:3, então só cabem ~45% da largura.
// como o logo ocupa justamente o centro deles, qualquer recorte fora do meio
// corta a marca ao meio: centralizado é o único enquadramento que não quebra.
// trocar por fotos reais do evento resolve isso de vez.
const FOTOS = [
  {
    src: '/hero/campus-utfpr.jpg',
    alt: 'Vista aérea da UTFPR Campus Santa Helena com o Lago de Itaipu ao fundo',
  },
  {
    src: '/hero/maratona.jpg',
    alt: 'Equipes trabalhando com telas de dados sobre agricultura',
  },
  {
    src: '/apoio/utfpr.png',
    alt: 'UTFPR — Campus Santa Helena',
    // marca, não foto: precisa caber inteira no quadro, com fundo e respiro
    marca: true,
  },
]

// posição de repouso de cada carta: quanto mais ao fundo, mais deslocada e menor
const SLOTS = [
  { x: 0, y: 0, giro: 1.5, escala: 1 },
  { x: -16, y: 14, giro: -2.5, escala: 0.965 },
  { x: 14, y: 26, giro: 3, escala: 0.93 },
]

const INTERVALO = 3200

export default function PilhaFotos() {
  // pilha[0] é a carta da frente
  const [pilha, setPilha] = useState(() => FOTOS.map((_, i) => i))
  const [ativo, setAtivo] = useState(false)
  const ref = useRef(null)

  // só começa a girar quando a pilha aparece na tela
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const obs = new IntersectionObserver(
      ([entrada]) => setAtivo(entrada.isIntersecting),
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!ativo) return
    const id = setInterval(() => {
      // a última carta vem pra frente: é ela que "chega por cima"
      setPilha((p) => [p[p.length - 1], ...p.slice(0, -1)])
    }, INTERVALO)
    return () => clearInterval(id)
  }, [ativo])

  return (
    <div ref={ref} className="relative aspect-[4/3] w-full">
      {FOTOS.map((foto, i) => {
        const slot = pilha.indexOf(i)
        const { x, y, giro, escala } = SLOTS[slot] ?? SLOTS[SLOTS.length - 1]
        return (
          <div
            key={foto.src}
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${giro}deg) scale(${escala})`,
              zIndex: FOTOS.length - slot,
            }}
          >
            {/* o wrapper de dentro faz o baque de chegada; o de fora, o deslocamento */}
            <div className={`h-full w-full ${slot === 0 ? 'assenta' : ''}`}>
              <img
                src={foto.src}
                alt={foto.alt}
                aria-hidden={slot !== 0}
                className={`foto-moldura h-full w-full ${
                  foto.marca ? 'bg-white object-contain p-10 sm:p-14' : 'object-cover'
                }`}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
