import { LINKS } from '../data.js'
import Botao from './Botao.jsx'
import Reveal from './Reveal.jsx'

// faixa de inscrição: é o bloco mais chapado do site de propósito, pra ser a
// primeira coisa que a pessoa vê depois do topo
export default function Inscricao() {
  return (
    <section
      id="inscricao"
      className="border-y-2 border-marinho bg-amarelo py-12 text-marinho sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-marinho/70">
            04 a 06 de setembro · UTFPR Santa Helena
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Inscrições abertas
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-8 flex flex-col gap-6 border-t-2 border-marinho/20 pt-7 lg:flex-row lg:items-center lg:gap-10">
            <div className="shrink-0">
              <Botao href={LINKS.inscricao} externo escuro grande>
                Inscrever minha equipe
              </Botao>
            </div>
            <p className="max-w-xl font-sans leading-relaxed text-marinho/80">
              A inscrição é individual e as equipes se formam na abertura, com
              dinâmicas da organização. Vale pra estudante, produtor,
              empreendedor, startup e dev.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
