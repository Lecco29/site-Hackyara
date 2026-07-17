import { JORNADA, LINKS, PREMIOS } from '../data.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'
import ShapeGrid from '../ui/ShapeGrid.jsx'

export default function Premiacao() {
  return (
    <section id="premiacao" className="relative overflow-hidden bg-marinho py-24 text-white sm:py-32">
      <div className="absolute inset-0" aria-hidden="true">
        <ShapeGrid
          direction="diagonal"
          speed={0.35}
          squareSize={44}
          shape="square"
          borderColor="rgba(255, 255, 255, 0.05)"
          hoverFillColor="rgba(21, 196, 210, 0.35)"
          hoverTrailAmount={6}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow clara>Premiação</Eyebrow>
          <h2
            className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            R$ 7.500 em prêmios pras três melhores equipes
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            E tem mais que o dinheiro: as melhores soluções recebem
            encaminhamento pra incubação na Sprint, a incubadora da UTFPR Santa
            Helena, e seguem representando a cidade no circuito do Super
            Hackathon.
          </p>
        </Reveal>

        <Reveal>
          <dl className="mt-14 grid border-y border-white/15 sm:grid-cols-3 sm:divide-x sm:divide-white/15">
            {PREMIOS.map((premio) => (
              <div key={premio.posicao} className="py-8 max-sm:border-b max-sm:border-white/10 max-sm:last:border-0 sm:px-8 sm:first:pl-0">
                <dt className="text-sm uppercase tracking-wider text-white/50">
                  {premio.posicao}
                </dt>
                <dd
                  className={`mt-2 font-display text-5xl font-bold tracking-tight tabular-nums sm:text-6xl ${
                    premio.destaque ? 'text-turquesa' : 'text-white'
                  }`}
                >
                  {premio.valor}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal>
          <h3 className="mt-20 font-display text-2xl font-bold tracking-tight">
            Depois do HACKYARA, ainda tem estrada
          </h3>
          <ol className="mt-10 grid gap-10 lg:grid-cols-3">
            {JORNADA.map((etapa, i) => (
              <li key={etapa.etapa} className="border-t border-white/15 pt-6">
                <p className="font-display text-sm text-white/50 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="mt-2 font-display text-lg font-bold tracking-tight">
                  {etapa.etapa}
                  {etapa.atual && (
                    <span className="ml-2 align-middle font-sans text-xs font-semibold uppercase tracking-wider text-turquesa">
                      você está aqui
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-turquesa">
                  {etapa.local} · {etapa.data}
                </p>
                <p className="mt-3 leading-relaxed text-white/70">{etapa.texto}</p>
              </li>
            ))}
          </ol>

          <a
            href={LINKS.inscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block rounded-md bg-turquesa px-8 py-3.5 font-display font-semibold text-marinho transition-colors hover:bg-white"
          >
            Garantir minha vaga
          </a>
        </Reveal>
      </div>
    </section>
  )
}
