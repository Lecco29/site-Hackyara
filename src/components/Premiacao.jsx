import { LINKS, PREMIOS } from '../data.js'
import Botao from './Botao.jsx'
import Reveal from './Reveal.jsx'

export default function Premiacao() {
  return (
    <section id="premiacao" className="border-y-2 border-marinho bg-marinho py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            R$ 6.000 em prêmios, e o prêmio não para no dinheiro
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-white/75">
            As melhores soluções ainda recebem encaminhamento pra incubação na
            Sprint, a incubadora da UTFPR Santa Helena, e seguem representando
            o evento no circuito do Super Hackathon até o Summit Iguassu
            Valley, em Foz do Iguaçu.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {PREMIOS.map((premio) => (
              <div
                key={premio.posicao}
                className={`border-2 p-8 transition-transform duration-200 hover:-translate-y-1 ${
                  premio.destaque ? 'border-amarelo bg-amarelo text-marinho' : 'border-white/25'
                }`}
              >
                <p className={`text-sm font-bold uppercase tracking-widest ${premio.destaque ? 'text-marinho/70' : 'text-white/60'}`}>
                  {premio.posicao}
                </p>
                <p className="mt-2 text-4xl font-bold tracking-tight tabular-nums sm:text-5xl">{premio.valor}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Botao href={LINKS.inscricao} externo>
              Garantir minha vaga
            </Botao>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
