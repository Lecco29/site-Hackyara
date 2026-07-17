import { LINKS } from '../data.js'

export default function Footer() {
  return (
    <footer className="bg-marinho text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img
              src="/logo-hackyara-branco.png"
              alt="HACKYARA — Hackathon de Inovação, Santa Helena-PR, Terra das Águas"
              className="h-12 w-auto"
            />
            <p className="mt-4 leading-relaxed text-white/70">
              Hackathon de Inovação // Santa Helena-PR // Terra das Águas.
              Fase local do Super Hackathon Sebrae/PR, realizada pela UTFPR
              Campus Santa Helena e pela Sprint Incubadora.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display font-bold uppercase tracking-widest text-turquesa">
                Contato
              </h3>
              <ul className="mt-4 space-y-2.5 text-white/80">
                <li>
                  <a href={`mailto:${LINKS.email}`} className="hover:text-turquesa">
                    {LINKS.email}
                  </a>
                </li>
                <li>
                  <a href={LINKS.whatsapp1.url} target="_blank" rel="noopener noreferrer" className="hover:text-turquesa">
                    WhatsApp {LINKS.whatsapp1.label}
                  </a>
                </li>
                <li>
                  <a href={LINKS.whatsapp2.url} target="_blank" rel="noopener noreferrer" className="hover:text-turquesa">
                    WhatsApp {LINKS.whatsapp2.label}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display font-bold uppercase tracking-widest text-turquesa">
                O evento
              </h3>
              <ul className="mt-4 space-y-2.5 text-white/80">
                <li>04 a 06 de setembro de 2026</li>
                <li>UTFPR Campus Santa Helena</li>
                <li>Santa Helena, Paraná</li>
                <li>
                  <a
                    href={LINKS.inscricao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-turquesa hover:underline"
                  >
                    superhackathon.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          <p>HACKYARA 2026 · Feito na Terra das Águas.</p>
        </div>
      </div>
    </footer>
  )
}
