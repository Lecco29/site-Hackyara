import { useEffect, useState } from 'react'
import { LINKS } from '../data.js'
import Botao from './Botao.jsx'
import PilhaFotos from './PilhaFotos.jsx'

const LARGADA = new Date('2026-09-04T08:00:00-03:00')

function calculaRestante() {
  const diff = LARGADA.getTime() - Date.now()
  if (diff <= 0) return null
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor(diff / 3600000) % 24,
    min: Math.floor(diff / 60000) % 60,
    seg: Math.floor(diff / 1000) % 60,
  }
}

function Contagem() {
  const [restante, setRestante] = useState(calculaRestante)

  useEffect(() => {
    const id = setInterval(() => setRestante(calculaRestante()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!restante) return null

  const blocos = [
    { valor: restante.dias, rotulo: 'dias' },
    { valor: restante.horas, rotulo: 'horas' },
    { valor: restante.min, rotulo: 'min' },
    { valor: restante.seg, rotulo: 'seg' },
  ]

  return (
    <div className="mt-8 flex items-stretch gap-3" aria-label="Contagem regressiva pra largada">
      {blocos.map((b, i) => (
        <div
          key={b.rotulo}
          className={`min-w-[4.2rem] border-2 bg-white px-3 py-2 text-center ${
            ['border-amarelo', 'border-turquesa', 'border-esmeralda', 'border-marinho/20'][i]
          }`}
        >
          <span className="block text-3xl font-bold tracking-tight text-marinho tabular-nums sm:text-4xl">
            {String(b.valor).padStart(2, '0')}
          </span>
          <span className="text-xs uppercase tracking-wider text-tinta/60">{b.rotulo}</span>
        </div>
      ))}
      <span className="self-center pl-1 text-sm leading-tight text-tinta/60">
        pra
        <br />
        largada
      </span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="topo" className="papel-grade relative overflow-hidden pt-16">
      <div className="mancha-turquesa absolute inset-0" aria-hidden="true" />
      <div className="mancha-esmeralda absolute inset-0" aria-hidden="true" />
      <div className="mancha-amarela absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-marinho sm:text-5xl lg:text-[3.4rem]">
            O hackathon da{' '}
            <mark className="bg-amarelo px-2 text-marinho">Terra das Águas</mark>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/80">
            Três dias na UTFPR Santa Helena pra resolver desafios reais de
            empresas da região, revelados na largada. Equipes, mentores e
            ecossistema de inovação, todo mundo construindo junto.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Botao href={LINKS.inscricao} externo grande>
              Inscreva sua equipe
            </Botao>
            <a href="#desafio" className="font-bold text-marinho underline decoration-turquesa decoration-2 underline-offset-8 hover:text-turquesa-escuro">
              Como funcionam os desafios
            </a>
          </div>
          <Contagem />
          <p className="mt-6 text-sm text-tinta/60">
            04 a 06 de setembro de 2026 · UTFPR Campus Santa Helena · presencial
          </p>
          <a
            href={LINKS.inscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block border-l-4 border-amarelo bg-white/70 px-4 py-2.5 text-sm text-tinta/80 transition-colors hover:border-turquesa"
          >
            Etapa oficial do <strong className="text-marinho">Super Hackathon</strong> do
            Sebrae/PR — a jornada segue até o Summit Iguassu Valley, em Foz do Iguaçu ↗
          </a>
        </div>

        <div className="relative">
          <PilhaFotos />
        </div>
      </div>
    </section>
  )
}
