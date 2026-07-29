import { LINKS } from '../data.js'

const COLUNAS = [
  {
    titulo: 'O evento',
    itens: [
      { label: '04 a 06 de setembro de 2026' },
      { label: 'UTFPR Campus Santa Helena' },
      { label: 'Santa Helena, Paraná' },
    ],
  },
  {
    titulo: 'Participação',
    itens: [
      { label: 'Inscrições', href: LINKS.inscricao },
      { label: 'Regulamento', href: LINKS.regulamento },
      { label: 'Dúvidas frequentes', href: '#faq' },
      { label: 'Proposta de patrocínio', href: `mailto:${LINKS.email}` },
    ],
  },
  {
    titulo: 'Contato',
    itens: [
      { label: LINKS.email, href: `mailto:${LINKS.email}` },
      { label: `WhatsApp ${LINKS.whatsapp1.label}`, href: LINKS.whatsapp1.url },
      { label: `WhatsApp ${LINKS.whatsapp2.label}`, href: LINKS.whatsapp2.url },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-marinho bg-marinho text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <img
              src="/logo-hackyara-branco.png"
              alt="HACKYARA — Hackathon de Inovação, Santa Helena-PR, Terra das Águas"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-sm font-sans leading-relaxed text-white/70">
              Fase local do Super Hackathon Sebrae/PR, realizada pela UTFPR
              Campus Santa Helena e pela Sprint Incubadora.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUNAS.map((col) => (
              <div key={col.titulo}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-turquesa">{col.titulo}</h3>
                <ul className="mt-4 space-y-2.5 font-sans text-white/80">
                  {col.itens.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.href.startsWith('http') || item.href.endsWith('.pdf')
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="hover:text-turquesa"
                        >
                          {item.label}
                        </a>
                      ) : (
                        item.label
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>HACKYARA 2026 · Feito na Terra das Águas.</p>
          <p>
            Hackathon <span className="text-turquesa">//</span> Santa Helena-PR{' '}
            <span className="text-turquesa">//</span> Terra das Águas
          </p>
        </div>
      </div>
    </footer>
  )
}
