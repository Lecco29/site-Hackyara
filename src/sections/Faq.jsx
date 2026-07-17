import { FAQ, LINKS } from '../data.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Faq() {
  return (
    <section id="faq" className="bg-nevoa py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-marinho sm:text-5xl">
            Antes de perguntar no grupo, olha aqui
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-12 divide-y divide-marinho/10 border-y border-marinho/10">
            {FAQ.map((item) => (
              <details key={item.pergunta} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold tracking-tight text-marinho [&::-webkit-details-marker]:hidden">
                  {item.pergunta}
                  <svg
                    className="shrink-0 text-turquesa-escuro transition-transform group-open:rotate-45"
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-4 max-w-xl leading-relaxed">{item.resposta}</p>
              </details>
            ))}
          </div>

          <p className="mt-8">
            Ficou faltando alguma?{' '}
            <a
              href={LINKS.whatsapp1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-turquesa-escuro underline decoration-turquesa/40 underline-offset-4 hover:decoration-turquesa"
            >
              Fala com a organização no WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  )
}
