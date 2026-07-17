import { COTAS, LINKS } from '../data.js'
import Eyebrow from '../ui/Eyebrow.jsx'
import Reveal from '../ui/Reveal.jsx'

export default function Patrocinio() {
  return (
    <section id="patrocinio" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>Para empresas</Eyebrow>
          <h2
            className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-marinho sm:text-5xl"
            style={{ textWrap: 'balance' }}
          >
            Sua marca na frente de quem faz o agro da região
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                Patrocinar o HACKYARA coloca sua empresa na frente de mais de
                100 participantes, além dos mentores, professores e empresas
                que passam pelo evento. E a exposição continua depois: a marca
                aparece no circuito do Super Hackathon e no Summit Iguassu
                Valley.
              </p>
              <p>
                As cotas vão do Bronze ao Diamante, cada uma com um pacote de
                contrapartidas: espaço no evento, marca nas peças oficiais,
                agradecimentos nos pitches e presença nos materiais pós-evento.
                A proposta completa, com valores, é enviada por e-mail.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t border-marinho/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
              <p className="text-sm uppercase tracking-wider text-tinta/60">Cotas</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {COTAS.map((cota, i) => (
                  <li
                    key={cota}
                    className={`rounded-md border px-5 py-2.5 font-display font-semibold ${
                      i === 0
                        ? 'border-turquesa bg-turquesa/5 text-turquesa-escuro'
                        : 'border-marinho/20 text-marinho'
                    }`}
                  >
                    {cota}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${LINKS.email}?subject=Patrocínio HACKYARA 2026`}
                  className="rounded-md bg-marinho px-6 py-3 text-center font-display font-semibold text-white transition-colors hover:bg-marinho-claro"
                >
                  Pedir proposta de cotas
                </a>
                <a
                  href={LINKS.whatsapp1.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-marinho/20 px-6 py-3 text-center font-display font-semibold text-marinho transition-colors hover:border-turquesa hover:text-turquesa-escuro"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              <p className="mt-8 text-sm text-tinta/60">
                Realização: UTFPR Campus Santa Helena · Sprint Incubadora ·
                Super Hackathon Sebrae/PR
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
