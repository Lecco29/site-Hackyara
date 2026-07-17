import Reveal from '../ui/Reveal.jsx'

const PILARES = [
  {
    titulo: 'Economia circular',
    texto: 'Resíduo que vira adubo, energia ou matéria-prima deixa de ser custo e vira receita na propriedade.',
  },
  {
    titulo: 'Transformação digital',
    texto: 'Sensores, dados e automação pra rastrear, medir e dar destino certo ao que a produção descarta.',
  },
  {
    titulo: 'Impacto real',
    texto: 'Solução boa é a que o produtor consegue usar. A banca avalia viabilidade, não só a ideia bonita.',
  },
]

export default function Desafio() {
  return (
    <section id="desafio" className="bg-nevoa py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-block bg-esmeralda px-3 py-1 font-display text-xs font-semibold uppercase tracking-[0.22em] text-white">
            O desafio 2026
          </p>
          <h2
            className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-marinho sm:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            Gestão de resíduos na agropecuária
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-14">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                O Extremo Oeste do Paraná concentra granjas de aves e suínos,
                laticínios e lavouras que movimentam a economia da região
                inteira. Essa produção gera dejetos, embalagens e sobras todos
                os dias. Descartar custa caro, tratar dá trabalho, e boa parte
                disso poderia voltar pro ciclo produtivo.
              </p>
              <p>
                Durante o HACKYARA, cada equipe escolhe um recorte desse
                problema e constrói uma proposta de solução. Pode ser um
                produto, um serviço, um processo ou uma tecnologia. O que
                importa é que funcione no campo de verdade.
              </p>
            </div>
            <figure>
              <img
                src="/img/maratona.jpg"
                alt="Equipes trabalhando lado a lado com telas de dados sobre agricultura, com o pôr do sol no lago ao fundo"
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover object-right"
              />
              <figcaption className="mt-3 text-sm text-tinta/60">
                Dados do campo na tela: é assim que um fim de semana vira protótipo.
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-16 grid gap-10 border-t border-marinho/15 pt-10 sm:grid-cols-3">
            {PILARES.map((pilar) => (
              <li key={pilar.titulo}>
                <h3 className="font-display text-lg font-bold tracking-tight text-marinho">
                  <span className="text-esmeralda" aria-hidden="true">/&nbsp;</span>
                  {pilar.titulo}
                </h3>
                <p className="mt-3 leading-relaxed">{pilar.texto}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
