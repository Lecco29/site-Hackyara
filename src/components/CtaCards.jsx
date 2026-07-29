import { LINKS } from '../data.js'
import Reveal from './Reveal.jsx'

const CARDS = [
  {
    titulo: 'Monte sua equipe',
    texto: 'Estudante, produtor, empreendedor, startup ou dev: inscreva-se e passe três dias construindo uma solução de verdade.',
    href: LINKS.inscricao,
    externo: true,
    cor: 'bg-amarelo text-marinho',
  },
  {
    titulo: 'Patrocine o evento',
    texto: 'Coloque sua marca e seu desafio na frente de mais de 100 talentos e do ecossistema de inovação do Oeste do Paraná.',
    href: `mailto:${LINKS.email}?subject=Patrocínio HACKYARA 2026`,
    externo: false,
    cor: 'bg-marinho text-white',
  },
]

export default function CtaCards() {
  return (
    <section className="papel-grade border-b border-marinho/10 bg-papel py-14 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
        {CARDS.map((card) => (
          <Reveal key={card.titulo}>
            <a
              href={card.href}
              {...(card.externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`group block h-full p-8 transition-transform duration-200 hover:-translate-y-1 sm:p-10 ${card.cor}`}
            >
              <h3 className="text-2xl font-bold">
                {card.titulo}{' '}
                <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">
                  →
                </span>
              </h3>
              <p className="mt-3 leading-relaxed opacity-85">{card.texto}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
