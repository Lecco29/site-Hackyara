import { LINKS } from '../data.js'
import Botao from './Botao.jsx'
import Reveal from './Reveal.jsx'

export default function ChamadaFinal() {
  return (
    <section className="border-t border-marinho/10 bg-nevoa py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-marinho sm:text-4xl">
            Topa transformar o campo em três dias?
          </h2>
          <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed">
            As inscrições são pelo Sympla e o{' '}
            <a
              href={LINKS.regulamento}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-turquesa-escuro underline decoration-2 underline-offset-4 hover:text-marinho"
            >
              regulamento do HACKYARA
            </a>{' '}
            está aqui no site. Dúvidas? A organização responde no WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Botao href={LINKS.inscricao} externo>
              Inscreva sua equipe
            </Botao>
            <Botao href={LINKS.whatsapp1.url} externo escuro>
              Falar com a organização
            </Botao>
          </div>
        </Reveal>

        <Reveal className="shrink-0">
          <img
            src="/logo-hackyara.png"
            alt=""
            aria-hidden="true"
            className="flutua-lento w-64 sm:w-80"
          />
        </Reveal>
      </div>
    </section>
  )
}
