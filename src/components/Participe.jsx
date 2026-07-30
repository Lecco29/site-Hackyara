import { PARTICIPACOES } from '../data.js'
import Reveal from './Reveal.jsx'

// as classes ficam escritas por extenso: o Tailwind varre o código como texto e
// não enxerga nome de classe montado por interpolação
const PALETA = {
  esmeralda: { topo: 'border-t-esmeralda', texto: 'text-esmeralda-escuro', borda: 'hover:border-esmeralda' },
  turquesa: { topo: 'border-t-turquesa', texto: 'text-turquesa-escuro', borda: 'hover:border-turquesa' },
  amarelo: { topo: 'border-t-amarelo', texto: 'text-amarelo-escuro', borda: 'hover:border-amarelo' },
}

export default function Participe() {
  return (
    <section
      id="participe"
      className="papel-grade relative overflow-hidden border-y border-marinho/10 bg-papel py-16 sm:py-24"
    >
      <div className="mancha-amarela absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-block bg-marinho px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Faça parte
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-marinho sm:text-4xl">
            Não precisa competir pra estar dentro
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed">
            O HACKYARA só funciona porque tem empresa trazendo problema de
            verdade, gente experiente orientando as equipes e patrocinador
            bancando a estrutura. Escolha o seu lugar.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PARTICIPACOES.map((item) => {
            const cor = PALETA[item.cor]
            return (
              <Reveal key={item.titulo}>
                <a
                  href={item.href}
                  {...(item.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group flex h-full flex-col border-2 border-t-4 border-marinho/15 bg-white p-8 transition-all duration-200 hover:-translate-y-1 ${cor.topo} ${cor.borda}`}
                >
                  <h3 className="text-2xl font-bold text-marinho">
                    <span className={cor.texto} aria-hidden="true">
                      /&nbsp;
                    </span>
                    {item.titulo}
                  </h3>
                  <p className="mt-3 flex-1 font-sans leading-relaxed text-tinta/85">{item.texto}</p>
                  <span className={`mt-6 font-mono text-sm font-bold uppercase tracking-wider ${cor.texto}`}>
                    {item.acao}{' '}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
