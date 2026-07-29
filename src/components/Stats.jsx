import { useEffect, useRef, useState } from 'react'
import { STATS } from '../data.js'

function Contador({ valor, prefixo, sufixo }) {
  const ref = useRef(null)
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAtual(valor)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        obs.disconnect()
        // a origem tem que sair do próprio requestAnimationFrame: misturar com
        // performance.now() deixava t anterior a inicio (aba em segundo plano,
        // volta do cache) e o contador rodava pra trás, exibindo negativo
        let inicio = null
        const dur = 1400
        const tick = (t) => {
          if (inicio === null) inicio = t
          const p = Math.min(Math.max((t - inicio) / dur, 0), 1)
          const suave = 1 - Math.pow(1 - p, 3)
          setAtual(Math.round(valor * suave))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [valor])

  return (
    <span ref={ref} className="tabular-nums">
      {prefixo}
      {atual.toLocaleString('pt-BR')}
      {sufixo}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="border-b border-marinho/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-3 sm:px-6 sm:py-20">
        {STATS.map((stat, i) => (
          <div key={stat.rotulo}>
            <span
              aria-hidden="true"
              className={`mb-4 block h-1.5 w-12 ${['bg-amarelo', 'bg-turquesa', 'bg-esmeralda'][i % 3]}`}
            />
            <p className="text-5xl font-bold tracking-tight text-marinho sm:text-6xl">
              <Contador valor={stat.valor} prefixo={stat.prefixo} sufixo={stat.sufixo} />
            </p>
            <p className="mt-2 text-tinta/60">{stat.rotulo}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
