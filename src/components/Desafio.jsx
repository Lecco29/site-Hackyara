import { LINKS } from '../data.js'
import Botao from './Botao.jsx'
import Reveal from './Reveal.jsx'

const PILARES = [
  {
    titulo: 'Problema real',
    texto: 'Os desafios nascem de demandas de empresas e instituições da região, não de enunciado inventado em gabinete.',
  },
  {
    titulo: 'Solução aplicável',
    texto: 'Produto, serviço, processo ou tecnologia: a banca avalia viabilidade, não só a ideia bonita.',
  },
  {
    titulo: 'Caminho pra frente',
    texto: 'As melhores soluções podem virar produto ou startup, com apoio do Sebrae e incubação na Sprint.',
  },
]

export default function Desafio() {
  return (
    <section id="desafio" className="papel-grade relative overflow-hidden border-y border-marinho/10 bg-white py-16 sm:py-24">
      <div className="mancha-esmeralda absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-block bg-esmeralda px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            Os desafios
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-marinho sm:text-4xl">
            Problemas reais, revelados na largada
          </h2>
        </Reveal>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,24rem)]">
          <Reveal>
            <div className="space-y-5 font-sans text-lg leading-relaxed">
              <p>
                Os desafios do HACKYARA vêm de empresas e instituições da
                região, passam pela curadoria do Sebrae e só são apresentados
                às equipes na abertura do evento. Ninguém sai na frente: todo
                mundo conhece o problema na sexta e apresenta a solução no
                domingo.
              </p>
              <p>
                Cada equipe escolhe um recorte do desafio e constrói uma
                proposta que funcione de verdade, com mentoria técnica e de
                negócio durante os três dias inteiros.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <img
              src="/maratona.jpg"
              alt="Equipes trabalhando com telas de dados sobre agricultura"
              className="foto-moldura aspect-square w-full -rotate-1 object-cover object-right transition-transform duration-300 hover:rotate-0"
              loading="lazy"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {PILARES.map((pilar, i) => (
            <Reveal key={pilar.titulo}>
              <div
                className={`h-full border-2 border-marinho/15 bg-white p-6 transition-all duration-200 hover:-translate-y-1 ${
                  ['border-t-esmeralda border-t-4 hover:border-esmeralda', 'border-t-turquesa border-t-4 hover:border-turquesa', 'border-t-amarelo border-t-4 hover:border-amarelo'][i % 3]
                }`}
              >
                <h3 className="font-bold text-marinho">
                  <span
                    className={['text-esmeralda-escuro', 'text-turquesa-escuro', 'text-amarelo-escuro'][i % 3]}
                    aria-hidden="true"
                  >
                    /&nbsp;
                  </span>
                  {pilar.titulo}
                </h3>
                <p className="mt-3 font-sans leading-relaxed text-tinta/85">{pilar.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-2 border-marinho bg-white p-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-marinho">
                Sua empresa tem um desafio real?
              </h3>
              <p className="mt-2 max-w-2xl font-sans leading-relaxed text-tinta/85">
                Empresas da região podem apresentar suas demandas pro Super
                Hackathon. A curadoria do Sebrae seleciona os desafios, alinha
                os detalhes com você e leva o problema pras equipes resolverem
                durante o evento.
              </p>
            </div>
            <div className="shrink-0">
              <Botao href={LINKS.formDesafios} externo>
                Enviar meu desafio
              </Botao>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
