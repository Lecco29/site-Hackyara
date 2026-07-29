import { LINKS } from '../data.js'
import Reveal from './Reveal.jsx'

// logos em public/apoio/; itens sem logo caem no wordmark de texto
const REALIZACAO = [
  { nome: 'UTFPR', detalhe: 'Campus Santa Helena', logo: '/apoio/utfpr.png' },
  // marca empilhada: precisa de mais altura que as horizontais pra ler igual
  { nome: 'Sprint', detalhe: 'Incubadora da UTFPR Santa Helena', logo: '/apoio/sprint.png', altura: 'h-14 sm:h-16' },
  { nome: 'Super Hackathon', detalhe: 'by Sebrae Startups', logo: '/apoio/superhackathon.png' },
]

const VAGAS_PATROCINIO = ['Diamante', 'Ouro', 'Prata']

export default function Apoiadores() {
  return (
    <section id="apoiadores" className="border-t border-marinho/10 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tinta/60">Realização</p>
            <ul className="mt-5 flex flex-wrap items-stretch gap-4">
              {REALIZACAO.map((org) => (
                <li
                  key={org.nome}
                  className="flex min-w-40 flex-col items-center justify-center border-2 border-marinho/15 bg-white px-6 py-4 text-center transition-colors hover:border-marinho/40"
                >
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt={`${org.nome} — ${org.detalhe}`}
                      title={`${org.nome} — ${org.detalhe}`}
                      className={`mx-auto w-auto object-contain ${org.altura ?? 'h-10 sm:h-12'}`}
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span className="text-lg font-bold text-marinho">{org.nome}</span>
                      <span className="text-xs uppercase tracking-wider text-tinta/60">{org.detalhe}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-tinta/60">Patrocínio</p>
            <ul className="mt-5 flex flex-wrap items-stretch gap-4">
              {VAGAS_PATROCINIO.map((cota) => (
                <li key={cota} className="min-w-40">
                  <a
                    href={`mailto:${LINKS.email}?subject=Patrocínio HACKYARA 2026 — cota ${cota}`}
                    className="flex h-full flex-col justify-center border-2 border-dashed border-marinho/25 px-6 py-4 text-center transition-colors hover:border-amarelo hover:bg-amarelo/10"
                  >
                    <span className="text-lg font-bold text-tinta/50">Sua marca aqui</span>
                    <span className="text-xs uppercase tracking-wider text-amarelo-escuro">cota {cota} →</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
