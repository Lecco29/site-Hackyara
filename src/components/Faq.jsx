import { LINKS } from '../data.js'
import Reveal from './Reveal.jsx'

const FAQ = [
  {
    pergunta: 'Preciso saber programar?',
    resposta:
      'Não. As melhores equipes misturam perfis: quem entende do problema, quem desenha, quem apresenta bem e quem programa. O desafio pede uma solução, e ela nem sempre é um aplicativo.',
  },
  {
    pergunta: 'Posso me inscrever sem equipe?',
    resposta:
      'Pode. A inscrição é individual e a formação das equipes acontece na abertura do evento, com dinâmicas da organização pra quem chega sozinho. Cada equipe tem de 3 a 5 integrantes.',
    link: { label: 'Ver as regras de composição no regulamento', href: LINKS.regulamento },
  },
  {
    pergunta: 'Quem pode participar?',
    resposta:
      'Estudantes de nível técnico e universitário, startups, empreendedores e produtores com interesse em agrotech. A idade mínima é 16 anos, e menores de 18 precisam de autorização assinada pelo responsável.',
    link: { label: 'Requisitos completos no regulamento', href: LINKS.regulamento },
  },
  {
    pergunta: 'Quando vou conhecer o desafio?',
    resposta:
      'Na abertura, sexta-feira. Os desafios vêm de empresas da região e são segredo até a largada: todo mundo conhece o problema ao mesmo tempo.',
  },
  {
    pergunta: 'Como faço a inscrição?',
    resposta:
      'Pela página do HACKYARA no Sympla, usando qualquer botão de inscrição deste site. Fazer a inscrição já implica aceitar os termos do regulamento. Qualquer dúvida, chama a organização no WhatsApp.',
    link: { label: 'Ler o regulamento do HACKYARA', href: LINKS.regulamento },
  },
]

export default function Faq() {
  return (
    <section id="faq" className="papel-grade relative overflow-hidden border-t border-marinho/10 py-16 sm:py-24">
      <div className="mancha-turquesa absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-marinho sm:text-4xl">
            Antes de perguntar no grupo, olha aqui
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-10 space-y-3">
            {FAQ.map((item) => (
              <details key={item.pergunta} className="group border-2 border-marinho/15 bg-white open:border-turquesa">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-bold text-marinho [&::-webkit-details-marker]:hidden">
                  {item.pergunta}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-turquesa-escuro transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 font-sans leading-relaxed text-tinta/85">
                  <p>{item.resposta}</p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-bold text-turquesa-escuro underline decoration-2 underline-offset-4 hover:text-marinho"
                    >
                      {item.link.label} →
                    </a>
                  )}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-8 font-sans">
            Ficou faltando alguma?{' '}
            <a
              href={LINKS.whatsapp1.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-turquesa-escuro underline decoration-2 underline-offset-4 hover:text-marinho"
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
