import { LINKS, PREMIOS } from '../data.js'
import Reveal from './Reveal.jsx'

// o que a equipe leva além do dinheiro, que é o peso que a organização quer
// dar à premiação neste momento
const CONQUISTAS = [
  {
    titulo: 'Incubação na Sprint',
    texto:
      'Os projetos promissores podem ser encaminhados pra incubação na SprinT, a incubadora da UTFPR Santa Helena, e virar startup de verdade.',
  },
  {
    titulo: 'Vaga na etapa final',
    texto:
      'As equipes classificadas têm uma semana de imersão e apresentam o pitch final no Summit Iguassu Valley, em Foz do Iguaçu, dias 17 e 18 de setembro.',
  },
  {
    titulo: 'Prova de conceito',
    texto:
      'A empresa que teve o desafio resolvido tem direito de primeira negociação com a equipe pra desenvolver uma PoC, formalizada por um MoU.',
  },
]

export default function Premiacao() {
  return (
    <section id="premiacao" className="border-y-2 border-marinho bg-marinho py-14 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-block bg-turquesa px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Premiação
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            O prêmio não para no dinheiro
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-lg leading-relaxed text-white/75">
            Sair do HACKYARA com uma solução testada vale mais que o valor em
            conta. É por isso que a etapa local é só o começo do caminho.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {CONQUISTAS.map((item, i) => (
              <div key={item.titulo}>
                <span
                  aria-hidden="true"
                  className={`mb-4 block h-1 w-10 ${['bg-turquesa', 'bg-esmeralda', 'bg-amarelo'][i]}`}
                />
                <h3 className="font-bold">{item.titulo}</h3>
                <p className="mt-2 font-sans leading-relaxed text-white/70">{item.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 border-t border-white/15 pt-6 font-mono text-sm">
            <p className="uppercase tracking-widest text-white/50">
              Premiação em dinheiro da etapa local
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-7 gap-y-2">
              {PREMIOS.map((premio) => (
                <span key={premio.posicao} className="text-white/85">
                  <span className="text-white/50">{premio.posicao}</span>{' '}
                  <span className="font-bold tabular-nums">{premio.valor}</span>
                </span>
              ))}
              <a
                href={LINKS.regulamento}
                target="_blank"
                rel="noopener noreferrer"
                className="text-turquesa underline decoration-2 underline-offset-4 hover:text-white"
              >
                condições no regulamento ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
